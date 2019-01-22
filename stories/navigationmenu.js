import React from 'react';
import { storiesOf } from '@storybook/react';
import NavigationMenu from '../components/NavigationMenu/index';
import Hyperlink from '../components/Hyperlink/index';


let data = [
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

storiesOf('NavigationMenu', module)
    .add('with Hyperlinks', () => (
        <NavigationMenu
            data={data}
        />
    ));