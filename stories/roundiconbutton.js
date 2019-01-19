import React from 'react';
import { storiesOf } from '@storybook/react';
import RoundIconButton from '../components/RoundIconButton/index';
import gitHubIcon from '../assets/icons/PNG/github.png';
import IcoMoon from 'react-icomoon';

const star = {
    width: '32px',
    height: '32px'
};

let favoriteIcon = <IcoMoon icon="star-empty" color="orange" style={star} />

storiesOf('RoundIconButton', module)
    .add('RoundIconButton', () => (
        <RoundIconButton
            icon={favoriteIcon}
            link="https://github.com/" />
    ));