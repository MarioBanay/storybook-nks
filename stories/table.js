import React from 'react';
import { storiesOf } from '@storybook/react';
import Table from '../components/Table/index';
import RoundIconButton from '../components/RoundIconButton/index';
import IcoMoon from 'react-icomoon';
import { action } from '@storybook/addon-actions';


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
        name: 'Remove'
    }
];

const tableData = [
    {
        id: '#',
        image: 'Image',
        name: 'Beer name',
        button:
            <RoundIconButton
                icon={favoriteIcon}
                clicked={action('clicked on delete')}
            />
    }
];

storiesOf('Table', module)
    .add('simple table', () => (
        <Table
            tableHeader={tableItems}
            tableData={tableData}
        />
    ))