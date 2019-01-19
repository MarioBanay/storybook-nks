import React from 'react';
import classes from './index.css';
import RoundIconButton from '../RoundIconButton/index';

export default class Card extends React.Component {
    consoleLog = (poruka) => {
        console.log(poruka);
    }

    render() {
        return (
            <div className={classes.card}>
                <div className={classes.image} >
                    <div className={classes.favoriteIcon}>
                        <RoundIconButton
                            icon={this.props.favoriteIcon}
                            clicked={this.props.favoriteIconlink}
                        />
                    </div>
                    <div className={classes.addToCartIcon}>
                        <RoundIconButton
                            icon={this.props.addToCartIcon}
                            clicked={this.props.addToCartIconLink}
                        />
                    </div>
                    <div className={classes.infoIcon}>
                        <RoundIconButton
                            icon={this.props.infoIcon}
                            clicked={this.props.infoIconLink}
                        />
                    </div>
                    <div className={classes.imageContainer}>
                        <img className={classes.img} src={this.props.imgBeerUrl} alt="image" />
                    </div>
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
