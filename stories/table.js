import React from 'react';
import { storiesOf } from '@storybook/react';
import Table from '../components/Table/index';
import RoundIconButton from '../components/RoundIconButton/index';
import IcoMoon from 'react-icomoon';
import { action } from '@storybook/addon-actions';
import beersJson from './beers.json';

let beer = beersJson.filter((beer) => beer.id < 4);

const star = {
    width: '16px',
    height: '16px'
};

let favoriteIcon = <IcoMoon icon="cross" color="grey" style={star} />

const tableItems = [
    {
        name: 'No.'
    },
    {
        name: 'Image'
    },
    {
        name: 'Beer name'
    },
    {
        name: 'Description'
    },
    {
        name: 'Remove'
    }
];

const tableData = [
    {
        id: beer[0].id,
        image: beer[0].image_url,
        name: beer[0].name,
        description: beer[0].description,
        button:favoriteIcon
    },
    {
        id: beer[1].id,
        image: beer[1].image_url,
        name: beer[1].name,
        description: beer[1].description,
        button:favoriteIcon
    },
    {
        id: beer[2].id,
        image: beer[2].image_url,
        name: beer[2].name,
        description: beer[2].description,
        button:favoriteIcon
    },
];

storiesOf('Table', module)
    .add('simple table', () => (
        <Table
            tableHeader={tableItems}
            tableData={tableData}
            clickedOnDeleteFavorite={action('clicked on delete favorite')}
        />
    ))