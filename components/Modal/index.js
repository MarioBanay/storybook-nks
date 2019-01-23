import React from 'react';

import classes from './index.css';
import Aux from '../hoc';
import Backdrop from '../Backdrop/Backdrop';
import Description from '../Description/index';

const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            <Description
                beerName={props.beerName}
                imgUrl={props.beerimgUrl}
                beerDescription={props.beerDescription}
                cancelled={props.cancelled}
                addToCart={props.addToCart}
                addToFavorites={props.addToFavorites}
            />
        </div>
    </Aux>
);

export default modal;