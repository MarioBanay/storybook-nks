import React from 'react';
import PropTypes from 'prop-types';
import classes from './index.css';

export default class RoundIconButton extends React.Component {
    render() {
        return (
            <div className={classes.RoundIconButton} onClick={this.props.clicked}>
                <a className={classes.alink} href={this.props.link}>
                        {this.props.icon}
{/*                     <img className={classes.img} src={this.props.icon} />
 */}            </a>
            </div>
        );
    }
}
/* 
RoundIconButton.PropTypes = {
    link: PropTypes.string,
    icon: PropTypes.img
}; */