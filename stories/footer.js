import React from 'react';
import { storiesOf } from '@storybook/react';
import Footer from '../components/Footer/index';
import Hyperlink from '../components/Hyperlink/index';
import RoundIconButton from '../components/RoundIconButton/index';
import twitterIcon from '../assets/icons/PNG/twitter.png';
import facebookIcon from '../assets/icons/PNG/facebook.png';
import gitHubIcon from '../assets/icons/PNG/github.png';
import instagramIcon from '../assets/icons/PNG/instagram.png';
import IcoMoon from 'react-icomoon';

const iconStyle = {
    width: '32px',
    height: '32px'
};

let data = [
    {
        link: <Hyperlink
            link="https://twitter.com/"
            text="twitter" />,
        icon: <RoundIconButton
            icon={<IcoMoon icon="twitter" color="black" style={iconStyle} />}
            link="https://twitter.com/" />
    },
    {
        link: <Hyperlink
            link="https://facebook.com/"
            text="facebook" />,
        icon: <RoundIconButton
            icon={<IcoMoon icon="facebook" color="black" style={iconStyle} />}
            link="https://facebook.com/" />
    },
    {
        link: <Hyperlink
            link="https://github.com/"
            text="GitHub" />,
        icon: <RoundIconButton
            icon={<IcoMoon icon="github" color="black" style={iconStyle} />}
            link="https://github.com/" />
    },
    {
        link: <Hyperlink
            link="https://instagram.com/"
            text="instagram" />,
        icon: <RoundIconButton
            icon={<IcoMoon icon="instagram" color="black" style={iconStyle} />}
            link="https://instagram.com/" />
    }

];

storiesOf('Footer', module)
    .add('with RoundIconButton links', () => (
        <Footer
            data={data}
        />
    ));