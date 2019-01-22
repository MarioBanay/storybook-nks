import React from 'react';
import classes from './index.css';
import Aux from '../hoc';
import Button from '../Button/index';

const description = (props) => {

    console.log('beer:' + ' ' + props.beerName);

    return (
        <Aux>
            <h3>{props.beerName}</h3>
            <hr />
            <img className={classes.image} src={props.imgUrl} alt="new" />
            <p className={classes.description}>{props.beerDescription}</p>
            <hr className={classes.hr} />
            <div className={classes.buttons}>
                <Button btnType="Danger" clicked={props.cancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={props.addToCart}>ADD TO CART</Button>
                <Button btnType="Success" clicked={props.addToFavorites}>ADD TO FAVORITES</Button>
            </div>
        </Aux>
    );
};

export default description;