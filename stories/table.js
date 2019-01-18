import React from 'react';
import { storiesOf } from '@storybook/react';
import Table from '../components/Table/index';
import Button from '../components/RoundIconButton/index';
import CrossIcon from '../assets/icons/PNG/cross.png';

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
        name: 'Quantity'
    },
    {
        name: ' '
    }
];

var imgStyle = {
    height: '20px'
  };
const tableData = [
    {
        id: '#',
        image: 'Image',
        name: 'Beer name',
        quantity: '11',
        button: <Button style={imgStyle} icon={CrossIcon} link="https://github.com/" />
    }
];

storiesOf('Table', module)
    .add('simple table', () => (
        <Table
            tableHeader={tableItems}
            tableData={tableData}
        />
    ))