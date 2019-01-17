import React from 'react';
import { storiesOf } from '@storybook/react';
import Hyperlink from '../components/Hyperlink/index';

storiesOf('Hyperlink', module)
    .add('hyperlink', () => (
        <Hyperlink
            link="https://github.com/"
            text="GitHub" />

    ));