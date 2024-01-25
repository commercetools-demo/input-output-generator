import { useCallback, type ReactNode, useState } from 'react';
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
  const { getData } = useSampler();

  const getSampleData = useCallback(async (entity: string, body?: any) => {
    return getData(entity, body);
  }, []);

  const handleEditor = useCallback(
    (el) => createEditor({ getSampleData }, el),
    []
  );

  const [ref] = useRete(handleEditor);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Spacings.Stack scale="m">
        <Text.Headline as="h3" intlMessage={messages.title}></Text.Headline>

        <SpacingsInline scale="m" justifyContent="space-between">
          <Text.Body intlMessage={messages.body}></Text.Body>

          <SpacingsInline scale="m" alignItems="center">
            <PrimaryButton label={intl.formatMessage(messages.save)} />{' '}
            <SecondaryButton label={intl.formatMessage(messages.cancel)} />
          </SpacingsInline>
        </SpacingsInline>
      </Spacings.Stack>

      <div style={{ width: '100%', height: '100%', padding: '10px 0' }}>
        <div
          style={{ width: '100%', height: '80%', border: '1px solid black' }}
        >
          <div
            ref={ref}
            style={{ width: '100%', height: '100%', position: 'relative' }}
          ></div>
        </div>
      <CollapsiblePanel header={intl.formatMessage(messages.preview)}>
        <pre>Hello World</pre>
      </CollapsiblePanel>
      </div>
    </div>
  );
};
Welcome.displayName = 'Welcome';

export default Welcome;
