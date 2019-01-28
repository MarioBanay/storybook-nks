import React from 'react';
import { storiesOf } from '@storybook/react';
import Popup from '../components/Popup/index';
import RoundIconButton from '../components/RoundIconButton/index';
import IcoMoon from 'react-icomoon';
import Modal from '../components/Modal/index';
import beersJson from './beers.json';
import { action } from '@storybook/addon-actions';

let beer = beersJson.filter((beer) => beer.id == 4);

const star = {
    width: '32px',
    height: '32px'
};

let gitHubIcon = <IcoMoon icon="github" color="black" style={star} />

let modal = <Modal
    show={true}
    modalClosed={action('Clicked to close modal')}

    beerName={beer[0].name}
    beerimgUrl={beer[0].image_url}
    beerDescription={beer[0].description}
    cancelled={action('clicked on cancel')}
    addToCart={action('clicked on add to cart')}
    addToFavorites={action('clicked on add to favorites')}
/>

storiesOf('Popup', module)
    .add('with sample text', () => (
        <Popup
            pupupText={modal} >
            <RoundIconButton
                icon={gitHubIcon}
            />
        </Popup>
    ));