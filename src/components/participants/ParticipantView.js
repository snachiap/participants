import React from 'react';
import { makeStyles, TableRow, TableCell, Grid, IconButton, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import { useDispatch } from 'react-redux';
import { remove, setEditing } from '../../store/actions/participant.actions';

const useStyles = makeStyles(theme => ({
  rowContainer: {
    height: 72
  },
  cellContainer: {
    padding: 24,
    paddingRight: 0,
    fontSize: 16,
    height: 24,
    color: '#505050',
    fontWeight: 400
  },
  iconButton: {
    padding: 0,
    marginRight: 15
  }
}));

const ParticipantView = ({ selected }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { name, email, phoneNumber, id } = selected;
  return (
    <TableRow className={classes.rowContainer}>
      <TableCell className={classes.cellContainer} style={{ width: 180 }}>
        <Typography>{name}</Typography>
      </TableCell>
      <TableCell className={classes.cellContainer} style={{ width: 300 }}>
        <Typography>{email}</Typography>
      </TableCell>
      <TableCell className={classes.cellContainer} style={{ width: 180 }}>
        <Typography>{phoneNumber}</Typography>
      </TableCell>
      <TableCell>
        <Grid container direction="row-reverse">
          <Grid item>
            <IconButton className={classes.iconButton} onClick={() => dispatch(remove(id))}>
              <DeleteIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton className={classes.iconButton} onClick={() => dispatch(setEditing(id))}>
              <CreateIcon />
            </IconButton>
          </Grid>
        </Grid>
      </TableCell>
    </TableRow>
  );
};

export default ParticipantView;
