import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/header');
}

configure(loadStories, module);