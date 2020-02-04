import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

const ItemEdit = ({ text, label, error, style, onChange }) => (
  <TextField
    error={error}
    label={label}
    value={text}
    variant="filled"
    size="small"
    style={style}
    onChange={e => onChange(e.target.value)}
  />
)

export default ItemEdit;

ItemEdit.propTypes = {
  text: PropTypes.string.isRequired
}