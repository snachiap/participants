import React from 'react';
import { makeStyles, Grid, Table, TableBody } from '@material-ui/core';
import SampleAppBar from '../components/appbar/SampleAppBar';
import SampleHeader from '../components/header/SampleHeader';
import ParticipantEdit from '../components/participants/ParticipantEdit';
import ParticipantList from '../components/participants/ParticipantList';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#F1F1F1'
  },
  bodyContainer: {
    width: 912
  },
  participantAddBlock: {
    marginBottom: 20
  }
}));

const SampleContainer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SampleAppBar />
      <Grid container alignItems="center" justify="center">
        <Grid item className={classes.bodyContainer}>
          <SampleHeader title="List of participants" />
          <Table className={classes.participantAddBlock}>
            <TableBody style={{ background: '#ffffff' }}>
              <ParticipantEdit selected={{ name: '', email: '', phoneNumber: '' }} />
            </TableBody>
          </Table>

          <ParticipantList />
        </Grid>
      </Grid>
    </div>
  );
};

export default SampleContainer;
