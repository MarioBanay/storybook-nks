import React from 'react';
import { storiesOf } from '@storybook/react';
import Popup from '../components/Popup/index';
import RoundIconButton from '../components/RoundIconButton/index';
import gitHubIcon from '../assets/icons/PNG/github.png';

storiesOf('Popup', module)
    .add('with sample text', () => (
        <Popup
            popupText="Sample Text" >
            <RoundIconButton
                icon={gitHubIcon}
            />
        </Popup>
    ));