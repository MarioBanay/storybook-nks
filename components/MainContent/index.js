import React from 'react';
import classes from './index.css';
import Header from '../Header/index';
import Cards from '../Cards/index';
import NavigationMenu from '../NavigationMenu/index';
import Footer from '../Footer/index';

export default class MainContent extends React.Component {
    render() {
        return (
            <div className={classes.MainContent}>
                <Header logo={this.props.logo} />
                <div className={classes.Cards}>
                    <Cards
                        beers={this.props.beers}
                        favoriteBeers={this.props.favoriteBeers}

                        favoriteIconFull={this.props.favoriteIconFull}
                        favoriteIconEmpty={this.props.favoriteIconEmpty}
                        clickedOnFavorites={this.props.clickedOnFavorites}


                        addToCartIcon={this.props.addToCartIcon}
                        clickedOnAddToCart={this.props.clickedOnAddToCart}

                        infoIcon={this.props.infoIcon}
                        clickedOnInfo={this.props.clickedOnInfo}
                        clickedOnCancel={this.props.clickedOnCancel}
                        clickedOnSide={this.props.clickedOnSide}
                    />
                </div>
                <div className={classes.NavigationMenu}>
                    <NavigationMenu
                        data={this.props.headerData}
                    />
                </div>
                <div className={classes.Footer}>
                    <Footer
                        data={this.props.footerData}
                    />
                </div>
            </div >
        );
    }
}
