import React from 'react';
import classes from './index.css';
import Card from '../Card/index';
//import IcoMoon from 'react-icomoon';

export default class Cards extends React.Component {

    favoriteButtonClickHandler = (id) => {
        this.props.clickedOnFavorites(id);
    }

    toggleFavoriteButton = (id) => {

        let favoriteBeersUpdate = this.props.favoriteBeers.filter((el) => el.id === id);
        if (favoriteBeersUpdate.length > 0) {
            return true;
        } else {
            return false;
        }
    }

    addToCartButtonHandler = (id) => {
        this.props.clickedOnAddToCart(id);
    }

    infoButtonHandler = (id) => {
        this.props.clickedOnInfo(id);
    }

    render() {
        const iconStyle = {
            width: '32px',
            height: '32px'
        };
        let cards = this.props.beers.map((beer, key) =>
            <Card
                key={key}
                imgBeerUrl={beer.image_url}
                name={beer.name}
                description={beer.description}

                favoriteIcon={this.toggleFavoriteButton(beer.id) ? this.props.favoriteIconFull : this.props.favoriteIconEmpty }
                favoriteIconFull={this.props.favoriteIconFull}
                favoriteIconEmpty={this.props.favoriteIconEmpty}
                clickedOnFavorites={() => this.favoriteButtonClickHandler(beer.id)}

                addToCartIcon={this.props.addToCartIcon}
                clickedOnAddToCart={() => this.addToCartButtonHandler(beer.id)}

                infoIcon={this.props.infoIcon}
                description={beer.description}
                clickedOnInfo={() => this.infoButtonHandler(beer.id)}
            />
        );
        return (
            <div className={classes.main}>
                {cards}
            </div>
        );
    }
}