import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import StarRateIcon from '@material-ui/icons/StarRate';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#d7d0c3',
    margin: '25px auto',
    borderRadius: '25px',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  paper: {
    backgroundColor: '#d7d0c3',
  },
}));

export default function NestedList() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        <ListItem component={Link} to="/favorites" button>
          <ListItemIcon>
            <FavoriteBorderIcon />
          </ListItemIcon>
          <ListItemText primary="Избранное" />
        </ListItem>
        <ListItem component={Link} to="/mycoffee" button>
          <ListItemIcon>
            <StarRateIcon />
          </ListItemIcon>
          <ListItemText primary="Оценки" />
        </ListItem>
        <ListItem component={Link} to="/wishlist" button>
          <ListItemIcon>
            <FreeBreakfastIcon />
          </ListItemIcon>
          <ListItemText primary="Список желаний" />
        </ListItem>
      </List>
    </Paper>
  );
}
