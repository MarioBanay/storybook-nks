import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/header');
  require('../stories/card');
  require('../stories/roundiconbutton');
}

configure(loadStories, module);