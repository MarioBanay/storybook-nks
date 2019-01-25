import React from 'react';
import classes from './index.css';
import Modal from '../Modal/index';

export default class Popup extends React.Component {
    constructor(props) {
        super(props);

        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.handleMouseClick = this.handleMouseClick.bind(this);
        
        this.state = {
            isHovering: false,
            isClicked: false
        };
    }


    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    handleMouseClick() {
        this.setState(this.toggleClickState);
    }

    toggleHoverState(state) {
        return {
            isClicked: state.isClicked,
            isHovering: !state.isHovering
        };
    }

    toggleClickState(state) {
        return {
            
            isHovering: state.isHovering,
            isClicked: !state.isClicked
        };
    }

    render() {
        return (
            <div className={classes.Container}>
                <div className={(this.state.isHovering || this.state.isClicked) ? classes.Modal : classes.Hide} >
                <Modal
                        show={true}
                        // modalClosed={() => this.closeModalHandler(beer.id)}
                        beerName={this.props.beerName}
                        beerimgUrl={this.props.beerimgUrl}
                        beerDescription={this.props.beerDescription}
                        cancelled={this.handleMouseClick}
                        //addToCart={() => this.addToCartButtonHandler(beer.id)}
                        //addToFavorites={() => this.favoriteButtonClickHandler(beer.id)}
                    // clickedOnSide={() => this.closeModalHandler(beer.id)}

                    />
                </div>
                <div
                    onMouseEnter={this.handleMouseHover}
                    onMouseLeave={this.handleMouseHover}
                    onClick={this.handleMouseClick}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}