import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/header');
  require('../stories/card');
}

configure(loadStories, module);