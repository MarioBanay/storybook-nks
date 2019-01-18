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
        name: 'Remove'
    }
];

const tableData = [
    {
        id: '#',
        image: 'Image',
        name: 'Beer name',
        button: <Button icon={CrossIcon} link="https://github.com/" />
    }
];

storiesOf('Table', module)
    .add('simple table', () => (
        <Table
            tableHeader={tableItems}
            tableData={tableData}
        />
    ))