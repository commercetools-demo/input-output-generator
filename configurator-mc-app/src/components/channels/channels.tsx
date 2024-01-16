import { useIntl } from 'react-intl';
import { Link as RouterLink } from 'react-router-dom';
import Constraints from '@commercetools-uikit/constraints';
import FlatButton from '@commercetools-uikit/flat-button';
import { ContentNotification } from '@commercetools-uikit/notifications';
import Spacings from '@commercetools-uikit/spacings';
import Text from '@commercetools-uikit/text';
import messages from './messages';
import { BackIcon } from '@commercetools-uikit/icons';
import { useRete } from 'rete-react-plugin';
import { createEditor } from '../editor';
import { useCallback, useState } from 'react';
import { useProduct } from '../../hooks/use-product-connector';

type TChannelsProps = {
  linkToWelcome: string;
};

const Channels = (props: TChannelsProps) => {
  const intl = useIntl();

  const [productId, setProductId] = useState('');
  const { getProduct } = useProduct({ productId: productId });
  const getProductData = useCallback(async (pId: string) => {
    setProductId(pId);
    return getProduct();
  }, []);
  const handleEditor = useCallback(
    (el) => createEditor({ getProductData }, el),
    []
  );

  const [ref] = useRete(handleEditor);

  return (
    <Spacings.Stack scale="xl">
      <Spacings.Stack scale="xs">
        <FlatButton
          as={RouterLink}
          to={props.linkToWelcome}
          label={intl.formatMessage(messages.backToWelcome)}
          icon={<BackIcon />}
        />
        <Text.Headline as="h2" intlMessage={messages.title} />
      </Spacings.Stack>

      <Constraints.Horizontal max={13}>
        <ContentNotification type="info">
          <Text.Body intlMessage={messages.demoHint} />
        </ContentNotification>
      </Constraints.Horizontal>

      <div ref={ref} style={{ height: '100vh', width: '100vw' }}></div>
    </Spacings.Stack>
  );
};
Channels.displayName = 'Channels';

export default Channels;
