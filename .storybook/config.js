import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/header');
  require('../stories/card');
  require('../stories/roundiconbutton');
  require('../stories/popup');
}

configure(loadStories, module);