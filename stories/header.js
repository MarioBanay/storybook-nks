import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from '../components/Header/index';
import Logo from '../assets/duff.png';

storiesOf('Header', module)
.add('with logo', () => (
  <Header logo={Logo} />
));