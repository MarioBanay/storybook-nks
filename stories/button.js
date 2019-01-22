import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../components/Button/index';
import { action } from '@storybook/addon-actions';

storiesOf('Button', module)
.add('with text and OnClick handler', () => (
    <Button btnType="Danger" clicked={action('button clicked!')}>Click me!</Button>
));

storiesOf('Button', module)
.add('disabled', () => (
  <Button disabled={true}>Can't Press me!</Button>
));

