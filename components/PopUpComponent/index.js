import React, { Component } from 'react';

import Aux from '../hoc/index';
import Modal from '../Modal/index';



class PopUpComponent extends Component {
    state = {
        purchasing: true
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        alert('You continue!');
    }

    render () {
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {this.props.beer}
                </Modal>
            </Aux>
        );
    }
}

export default PopUpComponent;