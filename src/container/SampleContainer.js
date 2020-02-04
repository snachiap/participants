import React, { useState, Fragment } from 'react';
import { makeStyles, Grid, Table, TableBody } from '@material-ui/core';
import SampleAppBar from '../components/appbar/SampleAppBar';
import SampleHeader from '../components/header/SampleHeader';
import ParticipantEdit from '../components/participants/ParticipantEdit';
import ParticipantList from '../components/participants/ParticipantList';
import Signup from '../components/signup/Signup';

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

  const [loggedIn, setloggedIn] = useState(false);

  return (
    <div className={classes.root}>
      {loggedIn ? (
        <Fragment>
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
        </Fragment>
      ) : (
        <Signup onSuccess={() => setloggedIn(true)} />
      )}
    </div>
  );
};

export default SampleContainer;
