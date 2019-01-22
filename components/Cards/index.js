import React from 'react';
import classes from './index.css';
import Card from '../Card/index';

export default class Cards extends React.Component {

    toogleFavoriteButtonHandler = (id) => {
        this.props.clickedOnFavorites(id);
        // this.state.fav ? this.setState({ fav: false }) : this.setState({ fav: true });
        // console.log(this.state.fav);
    }

    addToCartButtonHandler = (id) => {
        this.props.clickedOnAddToCart(id);
    }

    infoButtonHandler = (id) => {
        this.props.clickedOnInfo(id);
    }
    
    render() {

        let cards = this.props.beers.map((beer, key) =>
            <Card
                key={key}
                imgBeerUrl={beer.image_url}
                name={beer.name}
                description={beer.description}

                favoriteIcon={this.props.favoriteIconEmpty}
                favoriteIconFull={this.props.favoriteIconFull}
                favoriteIconEmpty={this.props.favoriteIconEmpty}
                clickedOnFavorites={() => this.toogleFavoriteButtonHandler(beer.id)}

                addToCartIcon={this.props.addToCartIcon}
                clickedOnAddToCart={() => this.addToCartButtonHandler(beer.id)}

                infoIcon={this.props.infoIcon}
                infoIconLink={this.props.infoIconLink}
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