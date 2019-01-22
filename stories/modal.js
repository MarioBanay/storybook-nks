import React from 'react';
import { storiesOf } from '@storybook/react';
import Modal from '../components/Modal/index';
import { action } from '@storybook/addon-actions';
import Description from '../components/Description/index';
import beersJson from './beers.json';

let beer = beersJson.filter((beer) => beer.id == 4);

storiesOf('Modal', module)
    .add('with beer description', () => (
        <Modal
            show={true}
            modalClosed={action('Clicked to close modal')}
        >
            <Description
                beerName={beer[0].name}
                imgUrl={beer[0].image_url}
                beerDescription={beer[0].description}
                cancelled={action('clicked on cancel')}
                addToCart={action('clicked on add to cart')}
                addToFavorites={action('clicked on add to favorites')}
            />
        </Modal>

    ));