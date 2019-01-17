import React from 'react';
import PropTypes from 'prop-types';
import classes from './index.css';

export default class Card extends React.Component {
    render() {
        return (
            <div className={classes.card}>
                <div className={classes.image} >
                    <img className={classes.img} src={this.props.imgBeerUrl} alt="image" />
                </div>
                <div className={classes.title}>
                    <h3>{this.props.name}</h3>
                </div>
                <div className={classes.description} >
                    <p>{this.props.description}</p>
                </div>
            </div>
        );
    }
}

Card.PropTypes = {
    imgBeerUrl: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
};
