import React from 'react';
import { makeStyles, AppBar, Toolbar, Typography } from '@material-ui/core';
import logo from '../../logo.svg';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#ACB5BC',
    boxShadow: 'none'
  },
  toolBar: {
    padding: 32
  },
  icon: {
    paddingRight: 32
  }
}));

const SampleAppBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.toolBar}>
        <img src={logo} className={classes.icon} alt="logo" width="32" height="32" />
        <Typography variant="h4">Nord Software</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default SampleAppBar;
