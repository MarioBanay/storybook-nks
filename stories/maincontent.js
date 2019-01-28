import React from 'react';
import { storiesOf } from '@storybook/react';
import MainContent from '../components/MainContent/index';
import Logo from '../assets/duff.png';
import IcoMoon from 'react-icomoon';
import { action } from '@storybook/addon-actions';
import beersJson from '../assets/beers.json';
import Hyperlink from '../components/Hyperlink/index';
import RoundIconButton from '../components/RoundIconButton/index';

const iconStyle = {
    width: '32px',
    height: '32px'
};

let dataHeader = [
    {
        link: <Hyperlink link="https://google.com/" text="Google" />,
        text: "Google"
    },
    {
        link: <Hyperlink link="https://github.com/" text="GitHub" />,
        text: "GitHub"
    },
    {
        link: <Hyperlink link="https://algebra.hr/" text="Algebra" />,
        text: "Algebra"
    },
    {
        link: <Hyperlink link="https://linkedin.com/" text="LinkedIn" />,
        text: "LinkedIn"
    }
];

let dataFooter = [
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

storiesOf('Main Content', module)
    .add('with navigation', () => (
        <MainContent
            logo={Logo}
            beers={beersJson}
            favoriteBeers={[]}

            favoriteIconFull={<IcoMoon icon="star-full" color="orange" style={iconStyle} />}
            favoriteIconEmpty={<IcoMoon icon="star-empty" color="orange" style={iconStyle} />}
            clickedOnFavorites={action('clicked on favorite button')}

            addToCartIcon={<IcoMoon icon="plus" color="black" style={iconStyle} />}
            clickedOnAddToCart={action('clicked on add to cart button')}

            infoIcon={<IcoMoon icon="info" color="black" style={iconStyle} />}
            clickedOnInfo={action('clicked on info button')}
            clickedOnCancel={action('clicked on cancel button')}
            clickedOnSide={action('clicked on side')}
            headerData={dataHeader}
            footerData={dataFooter}
        />
    ));