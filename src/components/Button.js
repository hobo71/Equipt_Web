import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import theme from './../theme.js';
import Spinner from "react-svg-spinner";

const Button = ({
  children,
  onClick,
  customStyles = {},
  isLoading = false
}) => (
  <button style={{ ...customStyles, ...styles }} onClick={ onClick }>
  { isLoading ? <Spinner/> : children }
  </button>
);

const styles = {
  ...theme.btn
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  customStyles: PropTypes.object,
  isLoading: PropTypes.bool
}

export default Radium(Button);