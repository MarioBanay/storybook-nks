import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/button');
  require('../stories/roundiconbutton');
  require('../stories/hyperlink');
  require('../stories/card');
  require('../stories/header');
  require('../stories/navigationmenu');
  require('../stories/maincontent');
  require('../stories/footer');
  require('../stories/popup');
  require('../stories/table');
  require('../stories/modal');
}

configure(loadStories, module);