import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '../components/Card/index';
// import favoriteIcon from '../assets/icons/PNG/star-empty.png';
// import addToCartIcon from '../assets/icons/PNG/plus.png';
// import infoIcon from '../assets/icons/PNG/info.png';
import beersJson from '../assets/beers.json';
import Cards from '../components/Cards/index';
import IcoMoon from 'react-icomoon';
import { action } from '@storybook/addon-actions';
import Modal from '../components/Modal/index';

let beer = beersJson.filter((beer) => beer.id == 4);

const iconStyle = {
    width: '32px',
    height: '32px'
};

storiesOf('Card', module)
    .add('card', () => (
        <Card
            imgBeerUrl="https://images.punkapi.com/v2/48.png"
            name="Goldings - IPA Is Dead"
            description="This is East Kent Goldings re- invented and re-imagined and shows just what can be done with English hops if you use enough of them. In this amped up Goldings reincarnation expect to be slammed with floral lavender, a fruity riot of blackberries and spiced pears, bubblegum, plums and the illusion of thyme."
        />
    ))
    .add('card with buttons', () => (
        <Card
            imgBeerUrl="https://images.punkapi.com/v2/48.png"
            name="Goldings - IPA Is Dead"
            description="This is East Kent Goldings re- invented and re-imagined and shows just what can be done with English hops if you use enough of them. In this amped up Goldings reincarnation expect to be slammed with floral lavender, a fruity riot of blackberries and spiced pears, bubblegum, plums and the illusion of thyme."

            favoriteIcon={<IcoMoon icon="star-full" color="orange" style={iconStyle} />}
            clickedOnFavorites={action('clicked on favorite button')}

            addToCartIcon={<IcoMoon icon="plus" color="black" style={iconStyle} />}
            clickedOnAddToCart={action('clicked on add to cart button')}

            infoIcon={<IcoMoon icon="info" color="black" style={iconStyle} />}
            beerName="Goldings - IPA Is Dead"
            beerimgUrl="https://images.punkapi.com/v2/48.png"
            beerDescription="This is East Kent Goldings re- invented and re-imagined and shows just what can be done with English hops if you use enough of them. In this amped up Goldings reincarnation expect to be slammed with floral lavender, a fruity riot of blackberries and spiced pears, bubblegum, plums and the illusion of thyme."

/*             modalContent={
                <Modal
                    show={true}
                    //modalClosed={action('Clicked to close modal')}
                    beerName={beer[0].name}
                    beerimgUrl={beer[0].image_url}
                    beerDescription={beer[0].description}
                    addToCart={action('clicked on add to cart button')}
                    clickedOnInfo={action('clicked on info button')}
                    cancelled={action('clicked on cancel button')}
                    clickedOnSide={action('clicked on side')}
                    addToFavorites={action('clicked on add to favorites button')}
                />} */
            clickedOnInfo={action('clicked on info cart button')}

        />

    ))
    .add('all cards', () => (
        <Cards
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
        />
    ))