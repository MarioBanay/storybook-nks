import React from 'react';
import classes from './index.css';

export default class Hyperlink extends React.Component {
    render() {
        return (
            <div className={classes.Hyperlink}>
                <a target='_blank' href={this.props.link}>{this.props.text}</a>
            </div>
        );
    }
}
