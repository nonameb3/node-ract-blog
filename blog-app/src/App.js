import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Modal from '@material-ui/core/Modal';

import AppBar from './components/AppBar';
import BlogCard from './components/BlogCard';
import CardForm from './components/CardForm';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  cardGrid: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const datas = [...Array(9)].map((u, i) => i);

export default function Album() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [modalStyle] = React.useState(getModalStyle);

  const handleOpenModel = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <CardForm onClick={handleClose} />
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {datas.map((item) => (
              <Grid item key={item} xs={12} sm={6} md={4}>
                <BlogCard onClick={handleOpenModel} />
              </Grid>
            ))}
          </Grid>

          {/* add edit modal */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="edit-modal-title"
            aria-describedby="edit-modal-description"
          >
            {body}
          </Modal>
        </Container>
      </main>
    </div>
  );
}
