module.exports = {
  typescript: {
    reactDocgen: false,
  },
  stories: ["../components/**/*.stories.@(tsx)"],
  refs: {
    "@chakra-ui/react": {
      disable: true,
    },
  },
  addons: ["@storybook/addon-docs", "@storybook/addon-essentials"],
  core: { builder: "webpack5" },
  webpackFinal: async (config) => {
    // the Chakra UI-critical part
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": "@emotion/react",
          "@emotion/styled": "@emotion/styled",
          "emotion-theming": "@emotion/react",
        },
      },
    };
  },
};
