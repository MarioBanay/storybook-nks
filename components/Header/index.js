import React from 'react';
import PropTypes from 'prop-types';
import classes from './index.css';

export default class Header extends React.Component {
  render() {
    return (
      <header className={classes.Header}>
        <img className={classes.Logo} src={this.props.logo} alt="logo" />
      </header>
    );
  }
}

Header.PropTypes = {
  logo: PropTypes.string
};
