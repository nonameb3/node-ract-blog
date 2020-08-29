import React from 'react';
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

function BlogCardComponent() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
            Header
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
            <MenuItem onClick={handleClose}>Edit</MenuItem>
            <MenuItem onClick={handleClose}>Delete</MenuItem>
          </Menu>

          <StatusIcon className={classes.miniIcon} style={{ color: green[500] }} />
        </div>

        <Typography>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry standard dummy text ever since the 1500s, when an unknown printer took a
          galley of type and scrambled it to make a type
        </Typography>
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
          Waraphon Roonnapai
        </Typography>
      </div>
      <CardActions />
    </Card>
  );
}

export default BlogCardComponent;
