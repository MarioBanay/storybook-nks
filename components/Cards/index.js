import React from 'react';
import classes from './index.css';
import Card from '../Card/index';

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

    cancelButtonHandler = (id) => {
        this.props.clickedOnCancel(id);
    }

    closeModalHandler = (id) => {
        this.props.clickedOnSide(id);
    }

    render() {

        let cards = this.props.beers.map((beer, key) =>
            <Card
                key={key}
                imgBeerUrl={beer.image_url}
                name={beer.name}
                description={beer.description}

                favoriteIcon={this.toggleFavoriteButton(beer.id) ? this.props.favoriteIconFull : this.props.favoriteIconEmpty}

                clickedOnFavorites={() => this.favoriteButtonClickHandler(beer.id)}

                addToCartIcon={this.props.addToCartIcon}
                clickedOnAddToCart={() => this.addToCartButtonHandler(beer.id)}

                infoIcon={this.props.infoIcon}

                beerName={beer.name}
                beerimgUrl={beer.image_url}
                beerDescription={beer.description}

                addToCart={() => this.addToCartButtonHandler(beer.id)}
                addToFavorites={() => this.favoriteButtonClickHandler(beer.id)}

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