import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import SampleAppBar from '../components/appbar/SampleAppBar';
import SampleHeader from '../components/header/SampleHeader';
import ParticipantAdd from '../components/participants/ParticipantAdd';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#F1F1F1'
  },
  bodyContainer: {
    width: 912
  }
}));

const SampleContainer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SampleAppBar />
      <Grid container alignItems="center" justify="center">
        <Grid item className={classes.bodyContainer}>
          <SampleHeader title="List of participants"/>
          <ParticipantAdd />
        </Grid>
      </Grid>
    </div>
  )
}

export default SampleContainer;