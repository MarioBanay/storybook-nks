import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '../components/Card/index';
import favoriteIcon from '../assets/icons/PNG/star-empty.png';
import addToCartIcon from '../assets/icons/PNG/plus.png';
import infoIcon from '../assets/icons/PNG/info.png';



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
            
            favoriteIcon={favoriteIcon}
            favoriteIconlink="https://google.com"  
            
            addToCartIcon={addToCartIcon}
            addToCartIconLink={"https://amazon.com"}

            infoIcon={infoIcon}
            infoIconLink={"https://facebook.com"}
        />
    ))