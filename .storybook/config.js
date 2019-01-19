import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/header');
  require('../stories/roundiconbutton');
  require('../stories/card');
  require('../stories/popup');
  require('../stories/hyperlink');
  require('../stories/navigationmenu');
  require('../stories/footer');
  require('../stories/table');
  
}

configure(loadStories, module);