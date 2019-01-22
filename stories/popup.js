import React from 'react';
import { storiesOf } from '@storybook/react';
import Popup from '../components/Popup/index';
import RoundIconButton from '../components/RoundIconButton/index';
import IcoMoon from 'react-icomoon';

const star = {
    width: '32px',
    height: '32px'
};

let gitHubIcon = <IcoMoon icon="github" color="black" style={star} />

storiesOf('Popup', module)
    .add('with sample text', () => (
        <Popup
            pupupText="Sample Text" >
            <RoundIconButton
                icon={gitHubIcon}
            />
        </Popup>
    ));