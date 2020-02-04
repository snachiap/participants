import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles, Paper, Button, TextField } from '@material-ui/core';
import { add } from '../../store/actions/participant.actions';

const useStyles = makeStyles(theme => ({
  container: {
    marginBottom: 20,
    borderRadius: 0,
    boxShadow: 'unset',
    padding: 16,
    '& .MuiFilledInput-root': {
      height: 40,
      fontSize: 14,
      borderRadius: 0,
      marginRight: 16
    },
    '& .MuiInputLabel-filled': {
      fontSize: 14,
      transform: 'translate(17px, 13px) scale(1)'
    }
  },
  button: {
    marginLeft: 79,
    borderRadius: 0,
    boxShadow: 'none',
    height: 40,
  }
}));

const initialParticipant = { name: '', email: '', phone: '' }

const ParticipantAdd = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({})
  const [participant, setParticipant] = useState(initialParticipant);

  const onChange = (key, value) => 
    setParticipant({ ...participant, [key]: value })
  

  const save = () => {
    dispatch(add(participant));
    setParticipant(initialParticipant);
    setErrors({});
  }

  const isValidName = () => {
    const { name } = participant;
    setErrors({ ...errors, name: name.length === 0 })
  }

  const isValidEmail = () => {
    const { email } = participant;
    setErrors({
      ...errors,
      email: !(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
    })
  }

  const isValidPhone = () => {
    const { phone } = participant;
    setErrors({ ...errors, phone: phone.length === 0 })
  }

  const { name, email, phone } = participant;
  const valid = name.length > 0 && email.length > 0 && phone.length > 0;
  return (
    <Paper className={classes.container}>
      <TextField
        error={errors.name}
        label={'Full Name'}
        value={name}
        variant="filled"
        size="small"
        style={{ width: 200 }}
        onBlur={isValidName}
        onChange={e => onChange('name', e.target.value)}
      />
      <TextField
        error={errors.email}
        label={'E-mail address'}
        value={email}
        variant="filled"
        size="small"
        style={{ width: 300 }}
        onBlur={isValidEmail}
        onChange={e => onChange('email', e.target.value)}
      />
      <TextField
        error={errors.phone}
        label={'Phone Number'}
        value={phone}
        variant="filled"
        size="small"
        type="number"
        style={{ width: 200 }}
        onBlur={isValidPhone}
        onChange={e => onChange('phone', e.target.value)}
      />
      <Button disabled={!valid}
        variant="contained" className={classes.button} onClick={save}>
        Add New
      </Button>
    </Paper>
  )
}

export default ParticipantAdd;
