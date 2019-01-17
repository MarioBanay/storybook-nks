import React from 'react';
import { storiesOf } from '@storybook/react';
import NavigationMenu from '../components/NavigationMenu/index';

let data = [
    {
        link: "https://google.com/",
        text: "Google"
    },
    {
        link: "https://github.com/",
        text: "GitHub"
    },
    {
        link: "https://algebra.hr/",
        text: "Algebra"
    },
    {
        link: "https://linkedin.com/",
        text: "LinkedIn"
    }
    
];

storiesOf('NavigationMenu', module)
    .add('with Hyperlinks', () => (
        <NavigationMenu
            data={data}
        />
    ));