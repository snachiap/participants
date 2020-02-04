import React from 'react';
import PropTypes from 'prop-types';
import { InputBase } from '@material-ui/core';

const ItemView = ({ text, style }) => (<InputBase value={text} style={style || {}} />)

export default ItemView;

ItemView.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.object
}