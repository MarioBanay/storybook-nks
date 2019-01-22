import React from 'react';
import classes from './index.css';
import RoundIconButton from '../RoundIconButton/index';
import Popup from '../Popup/index';

export default class Card extends React.Component {


    render() {
        return (
            <div className={classes.card} >
                <div className={classes.image} >
                    <div className={classes.favoriteIcon} >
                        <RoundIconButton
                            icon={this.props.favoriteIcon}
                            clicked={this.props.clickedOnFavorites}
                        />
                    </div>
                    <div className={classes.addToCartIcon}>
                        <RoundIconButton
                            icon={this.props.addToCartIcon}
                            clicked={this.props.clickedOnAddToCart}
                        />
                    </div>
                    <div className={classes.infoIcon}>
                        <Popup pupupText={this.props.description}>
                            <div className={classes.zindex}>
                                <RoundIconButton
                                    icon={this.props.infoIcon}
                                    clicked={this.props.clickedOnInfo}
                                />
                            </div>
                        </Popup>
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
