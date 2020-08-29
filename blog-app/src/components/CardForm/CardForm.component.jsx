import React from 'react';
import axios from 'axios';
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

function CardForm({ item, onClick, dispatch }) {
  const classes = useStyles();
  const [content, setContent] = React.useState(item.content);
  const [name, setName] = React.useState(item.name);
  const [category, setCategory] = React.useState(item.category);
  const [status, setStatus] = React.useState(item.status);

  function onSubmit() {
    const request = { content, name, category, status };
    axios
      .put('http://localhost:9000/api/card/edit/5f4a3c2a6f3288732fd2f67d', request)
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: 'updatecard',
          payload: res.data.card,
        });
        onClick();
      });
  }

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Edit Card
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Card Name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardCategory"
            label="Category"
            fullWidth
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="status"
            label="Status"
            fullWidth
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="content"
            label="Content"
            fullWidth
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} />
      </Grid>
      <Button variant="contained" color="primary" className={classes.button} onClick={onSubmit}>
        Submit
      </Button>
    </>
  );
}

export default CardForm;
