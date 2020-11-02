import React from 'react';
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#d7d0c3',
    margin: '10px',

  },
  media: {
    height: 140,
  },
});

export default function MediaCard({ id }) {
  const { title, preview, img } = useSelector((state) => {
    return state.articles.articles.find((x) => x._id === id);
  });

  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={`https://cocoffee.herokuapp.com/images/${img}`}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {preview}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions />
      </Card>
    </>
  );
}
