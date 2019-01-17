import React from 'react';
import classes from './index.css';

export default class Footer extends React.Component {
    render() {
        let listItems = this.props.data.map((item, index) =>
            <li key={index}>
                <div className={classes.Icon}>
                    {item.icon}
                </div>
                <div>
                    {item.link}
                </div>
            </li>
        );

        return (
            <div className={classes.Footer}>
                <ul>
                    {listItems}
                </ul>
            </div>
        );
    }
}