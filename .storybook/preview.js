/** @type { import('@storybook/html').Preview } */
import '../src/styles/entrypoint.scss';

import '../src/components/globals.scss';
import '../src/components/accordion/index.scss';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
