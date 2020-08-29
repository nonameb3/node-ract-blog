import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import AppBar from './components/AppBar';
import BlogCard from './components/BlogCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  cardGrid: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
}));

const datas = [...Array(9)].map((u, i) => i);

export default function Album() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {datas.map((item) => (
              <Grid item key={item} xs={12} sm={6} md={4}>
                <BlogCard />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </div>
  );
}
