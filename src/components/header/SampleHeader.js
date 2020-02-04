import React from 'react';
import Proptypes from 'prop-types';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  titleContainer: {
    marginTop: 30,
    marginBottom: 30
  },
  title: {
    color: '#757575',
    fontSize: 30,
    fontWeight: 500
  }
}));

const SampleHeader = ({ title }) => {
  const classes = useStyles();

  return (
    <div className={classes.titleContainer}>
      <Typography className={classes.title}>{title}</Typography>
    </div>
  );
};

export default SampleHeader;

SampleHeader.propTypes = {
  title: Proptypes.string.isRequired
};
