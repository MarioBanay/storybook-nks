import React, { Component } from 'react';

import Aux from '../hoc/index';
import Modal from '../Modal/index';



class PopUpComponent extends Component {

    render () {
        return (
            <Aux>
                <Modal show={this.state.purchasing} >
                    {this.props.beer}
                </Modal>
            </Aux>
        );
    }
}

export default PopUpComponent;