import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import StatusIcon from '@material-ui/icons/RadioButtonUnchecked';
import { green } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    width: theme.spacing(38),
  },
  cardContent: {
    flexGrow: 1,
  },
  cardFooter: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: theme.spacing(3),
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginRight: theme.spacing(2),
  },
  miniIcon: {
    fontSize: 20,
  },
}));

function BlogCardComponent(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const {
    item: { content, name, author },
  } = props;

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    props.onClick();
    setAnchorEl(null);
  };

  const handleDelete = () => {
    axios.delete(`http://localhost:9000/api/card/delete/${props.item._id}`).then(() => {
      setAnchorEl(null);
      props.dispatch({
        type: 'deletecard',
        payload: props.item._id,
      });
    });
  };

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography
            gutterBottom
            className={classes.cardContent}
            variant="h5"
            component="h2"
            style={{ color: '#7964ad' }}
          >
            {name}
          </Typography>

          <IconButton
            aria-label="edit card"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            onClick={handleMenu}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleEdit}>Edit</MenuItem>
            <MenuItem onClick={handleDelete}>Delete</MenuItem>
          </Menu>

          <StatusIcon className={classes.miniIcon} style={{ color: green[500] }} />
        </div>

        <Typography>{content}</Typography>
        <IconButton>
          <FavoriteIcon className={classes.miniIcon} />
        </IconButton>
      </CardContent>
      <div className={classes.cardFooter}>
        <Avatar
          className={classes.small}
          alt="Remy Sharp"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWIsj-_1ISxb80gHMao9Ob417mWyQQ0ugZ3w&usqp=CAU"
        />
        <Typography variant="subtitle2" style={{ color: 'Gray' }}>
          {author.name}
        </Typography>
      </div>
      <CardActions />
    </Card>
  );
}

export default BlogCardComponent;
