import React from 'react';
import classes from './index.css';
import Card from '../Card/index';

export default class Cards extends React.Component {
    render() {

        let cards = this.props.beers.map((beer, key) =>
            <Card
                key={key}
                imgBeerUrl={beer.image_url}
                name={beer.name}
                description={beer.description}

                favoriteIcon={this.props.favoriteIcon}
                favoriteIconlink={this.props.favoriteIconlink}  
                
                addToCartIcon={this.props.addToCartIcon}
                addToCartIconLink={this.props.addToCartIconLink}
    
                infoIcon={this.props.infoIcon}
                infoIconLink={this.props.infoIconLink}
            />
        );

        return (
            <div className={classes.main}>
                {cards}
            </div>
        );
    }
}