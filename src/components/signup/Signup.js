import React, { useState } from 'react';
import { Grid, TextField, Button, Typography } from '@material-ui/core';

const Signup = ({ onSuccess }) => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const login = () => {
    if (username === 'admin' && password === 'admin123') onSuccess();
    else setError('Invalid Login Credentials');
  };

  return (
    <Grid container direction="column" alignItems="center" justify="center" style={{ height: '100vh' }}>
      <Grid item style={{ padding: 10 }}>
        <TextField
          style={{ width: 300 }}
          variant="outlined"
          size="small"
          label="Username"
          value={username}
          onChange={e => setUserName(e.target.value)}
        ></TextField>
      </Grid>
      <Grid item style={{ padding: 10 }}>
        <TextField
          style={{ width: 300 }}
          variant="outlined"
          size="small"
          type="password"
          label="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        ></TextField>
      </Grid>

      <Grid item style={{ padding: 10 }}>
        <Button style={{ width: 100 }} onClick={login}>
          Login
        </Button>
      </Grid>

      {error.length > 0 ? (
        <Grid item style={{ padding: 10 }}>
          <Typography variant="body2" color="error">
            {error}
          </Typography>
        </Grid>
      ) : null}
    </Grid>
  );
};

export default Signup;
