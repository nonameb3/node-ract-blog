import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

function CardForm({ dispatch }) {
  const classes = useStyles();

  function onSubmit() {
    dispatch({ type: 'setauth', payload: true });
  }

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Sign In
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="username" label="Username" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="password" label="Password" type="password" fullWidth />
        </Grid>
        <Button variant="contained" color="primary" className={classes.button} onClick={onSubmit}>
          Submit
        </Button>
      </Grid>
    </>
  );
}

export default CardForm;
