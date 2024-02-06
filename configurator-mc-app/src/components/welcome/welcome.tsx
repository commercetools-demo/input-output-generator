import { useCallback, type ReactNode, useState, useEffect } from 'react';
import Spacings from '@commercetools-uikit/spacings';
import Text from '@commercetools-uikit/text';
import messages from './messages';
import { useRete } from 'rete-react-plugin';
import { useSampler } from '../../hooks/sampler-connection';
import { createEditor } from '../editor';
import SpacingsInline from '@commercetools-uikit/spacings-inline';
import PrimaryButton from '@commercetools-uikit/primary-button';
import SecondaryButton from '@commercetools-uikit/secondary-button';
import { useIntl } from 'react-intl';
import CollapsiblePanel from '@commercetools-uikit/collapsible-panel';
import {
  useCustomObjectFetcher,
  useCustomObjectUpdater,
} from '../../hooks/use-custom-object-connector/use-custom-object-connector';
import { useApplicationContext } from '@commercetools-frontend/application-shell-connectors';
import { ContentNotification } from '@commercetools-uikit/notifications';
import { EditorExtraOptions, ExportConfigParams } from '../editor/types';

type TWrapWithProps = {
  children: ReactNode;
  condition: boolean;
  wrapper: (children: ReactNode) => ReactNode;
};
const WrapWith = (props: TWrapWithProps) => (
  <>{props.condition ? props.wrapper(props.children) : props.children}</>
);
WrapWith.displayName = 'WrapWith';

const Welcome = () => {
  const intl = useIntl();
  const { storageContainer, storageKey } = useApplicationContext<{
    storageKey: string;
    storageContainer: string;
  }>((context: any) => context.environment);

  const { getData } = useSampler();
  const { execute } = useCustomObjectUpdater();

  const { customObject, loading } = useCustomObjectFetcher({
    container: storageContainer,
    key: storageKey,
  });

  const [previewData, setPreviewData] = useState<string>('');
  const [config, setConfig] = useState<ExportConfigParams>();
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);

  const getSampleData = useCallback(getData, []);

  const handleEditor = useCallback(
    (el) => {
      if (loading && !customObject) {
        return new Promise<any>(() => ({
          destroy: () => {},
        }));
      }

      return createEditor(
        {
          getSampleData,
          setPreviewData,
          exportConfig: setConfig,
          initialData: customObject?.value.exportData,
        },
        el
      );
    },
    [loading, customObject]
  );

  let [ref] = useRete(handleEditor);

  const storePaths = async () => {
    await execute({
      draft: {
        container: storageContainer,
        key: storageKey,
        value: JSON.stringify(config),
      },
    });
    setIsNotificationVisible(true);
    setConfig({});
  };

  useEffect(() => {
    return () => {
      setTimeout(() => setIsNotificationVisible(false), 2000);
    };
  }, [isNotificationVisible]);
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Spacings.Stack scale="m">
        <Text.Headline as="h3" intlMessage={messages.title}></Text.Headline>

        <SpacingsInline scale="m" justifyContent="space-between">
          <Text.Body intlMessage={messages.body}></Text.Body>

          <SpacingsInline scale="m" alignItems="center">
            <PrimaryButton
              label={intl.formatMessage(messages.save)}
              onClick={storePaths}
            />
            <SecondaryButton label={intl.formatMessage(messages.cancel)} />
          </SpacingsInline>
        </SpacingsInline>
      </Spacings.Stack>
      {isNotificationVisible && (
        <ContentNotification type="info">
          {intl.formatMessage(messages.completed)}
        </ContentNotification>
      )}

      <div style={{ width: '100%', height: '100%', padding: '10px 0' }}>
        <div
          style={{ width: '100%', height: '600px', border: '1px solid black' }}
        >
          <div
            ref={ref}
            style={{ width: '100%', height: '100%', position: 'relative' }}
          ></div>
        </div>

        <CollapsiblePanel header={intl.formatMessage(messages.preview)}>
          <pre>{previewData}</pre>
        </CollapsiblePanel>
      </div>
    </div>
  );
};
Welcome.displayName = 'Welcome';

export default Welcome;
