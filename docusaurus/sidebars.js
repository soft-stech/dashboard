/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],

  // But you can create a sidebar manually
  // Items name and page should be same.
  // For eg. if you rename a page you should also change that page name in item attribute under the tutorialSidebar.

  mainSidebar: [
    'home',
    {
      type:  'category',
      label: 'Getting Started',
      items: [
        'getting-started/quickstart',
        'getting-started/concepts',
        'getting-started/development_environment',
        'getting-started/ui-walkthrough'
      ],
    },
    {
      type:  'category',
      label: 'Guide',
      items: [
        'guide/package-management',
        'guide/auth-providers',
        'guide/custom-dev-build'
      ],
    },
    {
      type:  'category',
      label: 'How the Code Base Works',
      items: [
        'code-base-works/api-resources-and-schemas',
        'code-base-works/auth-sessions-and-tokens',
        'code-base-works/cluster-management-resources',
        'code-base-works/customising-how-k8s-resources-are-presented',
        'code-base-works/directory-structure',
        'code-base-works/products-and-navigation',
        'code-base-works/forms-and-validation',
        'code-base-works/helm-chart-apps',
        'code-base-works/keyboard-shortcuts',
        'code-base-works/kubernetes-resources-data-load',
        'code-base-works/routes',
        'code-base-works/middleware',
        'code-base-works/stores',
        'code-base-works/nuxt-plugins',
        'code-base-works/machine-drivers',
        'code-base-works/performance',
        'code-base-works/sortable-table',
        'code-base-works/on-screen-text-and-translations',
        'code-base-works/style',
      ],
    },
    {
      type:  'category',
      label: 'Extensions',
      link:  {
        type: 'doc',
        id:   'extensions/home',
      },
      items: [
        'extensions/introduction',
        'extensions/extensions-getting-started',
        'extensions/extensions-configuration',
        {
          type:  'category',
          label: 'Extensions API',
          link:  {
            type: 'doc',
            id:   'extensions/api/overview',
          },
          items: [
            'extensions/api/concepts',
            'extensions/api/metadata',
            {
              type:  'category',
              label: 'Navigation & Pages',
              items: [
                'extensions/api/nav/products',
                'extensions/api/nav/custom-page',
                'extensions/api/nav/resource-page',
                'extensions/api/nav/side-menu',
                'extensions/api/nav/routing',
              ]
            },
            'extensions/api/actions',
            'extensions/api/cards',
            'extensions/api/panels',
            'extensions/api/tabs',
            'extensions/api/table-columns',
            {
              type:  'category',
              label: 'Components',
              link:  {
                type: 'doc',
                id:   'extensions/api/components/components',
              },
              items: [
                'extensions/api/components/resources',
                'extensions/api/components/node-drivers',
                'extensions/api/components/auto-import',
              ]
            },
            'extensions/api/common',
          ]
        },
        {
          type:  'category',
          label: 'Advanced',
          items: [
            'extensions/advanced/air-gapped-environments',
            'extensions/advanced/provisioning',
            'extensions/advanced/localization',
            'extensions/advanced/hooks',
            'extensions/advanced/stores',
            'extensions/advanced/version-compatibility',
            'extensions/advanced/safe-mode',
            'extensions/advanced/yarn-link'
          ]
        },
        'extensions/publishing',
        {
          type:  'category',
          label: 'Use cases/Examples',
          link:  {
            type: 'doc',
            id:   'extensions/usecases/overview',
          },
          items: [
            'extensions/usecases/top-level-product',
            'extensions/usecases/cluster-level-product',
            {
              type:  'category',
              label: 'Node Driver',
              link:  {
                type: 'doc',
                id:   'extensions/usecases/node-driver/overview',
              },
              items: [
                'extensions/usecases/node-driver/about-drivers',
                'extensions/usecases/node-driver/cloud-credential',
                'extensions/usecases/node-driver/machine-config',
                'extensions/usecases/node-driver/advanced',
                'extensions/usecases/node-driver/proxying',
                'extensions/usecases/node-driver/about-example',
              ]
            }
          ]
        }
      ]
    },
    'storybook',
    {
      type:  'category',
      label: 'Testing',
      items: [
        'testing/unit-test',
        'testing/e2e-test',
        'testing/stress-test',
      ],
    },
    'terminology',
  ],
};

module.exports = sidebars;
