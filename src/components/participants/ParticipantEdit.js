import React, { useState } from 'react';
import { makeStyles, TableRow, TableCell, TextField, Grid, Button } from '@material-ui/core';
import { isValidName, isValidEmail, isValidPhone, isValidParticipant } from '../../services/participant.service';
import { useDispatch } from 'react-redux';
import { setEditing, update, add } from '../../store/actions/participant.actions';

const useStyles = makeStyles(theme => ({
  rowContainer: {
    height: 72
  },
  cellContainer: {
    padding: 16,
    paddingRight: 0,
    '& .MuiFilledInput-root': {
      height: 40,
      fontSize: 14,
      borderRadius: 0
    },
    '& .MuiInputLabel-filled': {
      fontSize: 14,
      transform: 'translate(17px, 13px) scale(1)'
    }
  },
  actionCellContainer: {
    width: '100%'
  },
  saveButton: {
    background: '#07f',
    borderRadius: 0,
    boxShadow: 'none',
    color: '#ffffff',
    height: 40
  },
  cancelButton: {
    color: '#07f',
    background: '#EDEDED',
    borderRadius: 0,
    boxShadow: 'none',
    marginRight: 5,
    height: 40
  },
  addButton: {
    borderRadius: 0,
    boxShadow: 'none',
    height: 40
  }
}));

const ParticipantEdit = ({ selected }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [participant, setParticipant] = useState(selected);
  const [touched, setTouched] = useState({});

  const onChange = (key, value) => {
    setParticipant({ ...participant, [key]: value });
  };

  const addParticipant = () => {
    dispatch(add(participant));
    setTouched({});
    setParticipant({ name: '', email: '', phoneNumber: '' });
  };

  const { name, email, phoneNumber, id } = participant;
  return (
    <TableRow className={classes.rowContainer}>
      <TableCell className={classes.cellContainer}>
        <TextField
          error={touched.name && !isValidName(name)}
          style={{ width: 180 }}
          variant="filled"
          size="small"
          label="Full Name"
          value={name}
          onBlur={() => setTouched({ ...touched, name: true })}
          onChange={e => onChange('name', e.target.value)}
        ></TextField>
      </TableCell>
      <TableCell className={classes.cellContainer}>
        <TextField
          error={touched.email && !isValidEmail(email)}
          style={{ width: 300 }}
          variant="filled"
          size="small"
          label="E-mail address"
          value={email}
          onBlur={() => setTouched({ ...touched, email: true })}
          onChange={e => onChange('email', e.target.value)}
        ></TextField>
      </TableCell>
      <TableCell className={classes.cellContainer}>
        <TextField
          error={touched.phoneNumber && !isValidPhone(phoneNumber)}
          style={{ width: 180 }}
          variant="filled"
          size="small"
          type="number"
          label="Phone Number"
          value={phoneNumber}
          onBlur={() => setTouched({ ...touched, phoneNumber: true })}
          onChange={e => onChange('phoneNumber', e.target.value)}
        ></TextField>
      </TableCell>
      {id ? (
        <TableCell className={classes.actionCellContainer}>
          <Grid container direction="row-reverse">
            <Grid item>
              <Button
                disabled={!isValidParticipant(participant)}
                className={classes.saveButton}
                onClick={() => dispatch(update(participant))}
                variant="contained"
              >
                Save
              </Button>
            </Grid>
            <Grid item>
              <Button className={classes.cancelButton} onClick={() => dispatch(setEditing(''))}>
                Cancel
              </Button>
            </Grid>
          </Grid>
        </TableCell>
      ) : (
        <TableCell className={classes.actionCellContainer}>
          <Grid container direction="row-reverse">
            <Grid item>
              <Button
                disabled={!isValidParticipant(participant)}
                className={classes.addButton}
                onClick={addParticipant}
                variant="contained"
              >
                ADD NEW
              </Button>
            </Grid>
          </Grid>
        </TableCell>
      )}
    </TableRow>
  );
};

export default ParticipantEdit;
