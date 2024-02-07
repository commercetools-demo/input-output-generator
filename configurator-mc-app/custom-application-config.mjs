import { PERMISSIONS, entryPointUriPath } from './src/constants';

/**
 * @type {import('@commercetools-frontend/application-config').ConfigOptionsForCustomApplication}
 */
const config = {
  name: 'Configurator',
  entryPointUriPath,
  cloudIdentifier: '${env:CLOUD_IDENTIFIER}',
  env: {
    development: {
      initialProjectKey: '${env:INITIAL_PROJECT_KEY}',
    },
    production: {
      applicationId: '${env:APPLICATION_ID}',
      url: '${env:APPLICATION_URL}',
    },
  },
  additionalEnv: {
    storageKey: '${env:STORAGE_KEY}',
    storageContainer: '${env:STORAGE_CONTAINER}',
  },
  oAuthScopes: {
    view: ['view_products', 'view_orders', 'view_payments'],
    manage: ['manage_products'],
  },
  icon: '${path:@commercetools-frontend/assets/application-icons/export.svg}',
  mainMenuLink: {
    defaultLabel: 'Template starter',
    labelAllLocales: [],
    permissions: [PERMISSIONS.View],
  },
  submenuLinks: [
    {
      uriPath: 'channels',
      defaultLabel: 'Channels',
      labelAllLocales: [],
      permissions: [PERMISSIONS.View],
    },
  ],
};

export default config;
