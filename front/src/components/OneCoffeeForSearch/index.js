import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';

import { startRewriteUser } from '../../redux/actions/authActions';
import { startCoffeeItemsSaga } from '../../redux/actions/allItemsActions';
import Raiting from '../Rating';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '10px',
    backgroundColor: '#d7d0c3',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function OneCoffeeForSearch({ id }) {
  const dispatch = useDispatch();

  const searchArr = useSelector((state) => state.search);

  const picArr = searchArr.needCoffee.find((x) => x._id === id);

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClick = async () => {
    await fetch('/favoriteApi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
      }),
    });

    const resave = await fetch('/user');
    const res1 = await resave.json();
    dispatch(startRewriteUser(res1));
    dispatch(startCoffeeItemsSaga());
  };

  const addToWishList = async () => {
    await fetch('/wishlistApi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
      }),
    });
    const resave = await fetch('/user');
    const res1 = await resave.json();
    dispatch(startRewriteUser(res1));
  };

  return (
    <>
      {
        picArr
          ? (
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image={`https://cocoffee.herokuapp.com/img/${picArr.image}`}
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="body1" component="p">
                  {picArr.title}
                </Typography>
                <Typography variant="body1" component="p">
                  {picArr.av}
                </Typography>
                <Typography style={{ color: 'gray' }} variant="body2" component="p">
                  Оценки:
                  {' '}
                  {picArr.raiting.length}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon onClick={handleClick} />
                </IconButton>
                <IconButton>
                  <FreeBreakfastIcon onClick={addToWishList} />
                </IconButton>
                <Raiting id={id} />
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                    Регион:
                    {' '}
                    {picArr.region}
                  </Typography>
                  <Typography paragraph>
                    Обработка:
                    {' '}
                    {picArr.process}
                  </Typography>
                  <Typography paragraph>
                    Описание:
                    {' '}
                    {picArr.description}
                  </Typography>
                </CardContent>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </Collapse>
            </Card>
          )
          : ''
  }
    </>
  );
}
