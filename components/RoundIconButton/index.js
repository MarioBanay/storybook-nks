import React from 'react';
import classes from './index.css';

export default class RoundIconButton extends React.Component {

    render() {
        return (
            <div className={classes.RoundIconButton} onClick={this.props.clicked}>
                <a target='_blank' className={classes.alink} href={this.props.link}>
                    {this.props.icon}
                </a>
            </div>
        );
    }
}
