import React from 'react';
import classes from './index.css';
import Hyperlink from '../Hyperlink/index';
import { Link } from 'react-router-dom';


export default class NavigationMenu extends React.Component {
    render() {
        let tableItems = this.props.data.map((item, index) =>
            <tr key={index}>
                <td>
                    {item.link}
                </td>
            </tr>
        );

        return (
            <div className={classes.NavigationMenu}>
                <table>
                    <tbody>
                        {tableItems}
                    </tbody>
                </table>
            </div>
        );
    }
}