import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styles from './cofe.module.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    // width: '50',
  },
  flex: {
    display: 'flex',
  },
  media: {
    height: 80,
    width: 80,
    borderRadius: 10,

  },
});

export default function Cofe() {
  const [cofe] = useState([
    {
      id: 1, img: 'https://static3.depositphotos.com/1001651/137/i/450/depositphotos_1376093-stock-photo-cofee-cup.jpg', name: 'Arabica', description: 'asfasfasd sdfhsdjfj dsfhsjdfhjsdhfj',
    },
    {
      id: 2, img: 'https://static3.depositphotos.com/1001651/137/i/450/depositphotos_1376093-stock-photo-cofee-cup.jpg', name: 'Arabica', description: 'asfasfasd sdfhsdjfj dsfhsjdfhjsdhfj',
    },
    {
      id: 3, img: 'https://static3.depositphotos.com/1001651/137/i/450/depositphotos_1376093-stock-photo-cofee-cup.jpg', name: 'Arabicaasd asdasdasddasdfsddsf', description: 'asfasfasd sdfhsdjfj dsfhsjdfhjsdhfj',
    },
    {
      id: 4, img: 'https://static3.depositphotos.com/1001651/137/i/450/depositphotos_1376093-stock-photo-cofee-cup.jpg', name: 'Arabica', description: 'asfasfasd sdfhsdjfj dsfhsjdfhjsdhfj',
    },
    {
      id: 5, img: 'https://us.123rf.com/450wm/foodandmore/foodandmore1710/foodandmore171000104/88449682-cup-of-double-espresso-coffee-with-piece-of-cake-on-wooden-table.jpg?ver=6', name: 'Jack', description: '40tko',
    },
    {
      id: 6, img: 'https://us.123rf.com/450wm/foodandmore/foodandmore1710/foodandmore171000104/88449682-cup-of-double-espresso-coffee-with-piece-of-cake-on-wooden-table.jpg?ver=6', name: 'Jack', description: '40tko',
    },
    {
      id: 7, img: 'https://ae01.alicdn.com/kf/HTB1ka9bSXXXXXX0XFXXq6xXFXXXy/diamond-painting-big-size-rhinestones-embroidery-coffe-decor-decorative-coffee-beans.jpg', name: 'Arabica', description: 'asfasfasd sdfhsdjfj dsfhsj',
    },
    {
      id: 8, img: 'https://static3.depositphotos.com/1001651/137/i/450/depositphotos_1376093-stock-photo-cofee-cup.jpg', name: 'Arabica', description: 'asfasfasd sdfhsdjfj dsfhsjdfhjsdhfj',
    },
  ]);
  const classes = useStyles();

  return (
    <>
      {cofe && cofe.map((el, i) => (
        <div className={styles.margin}>
          <Card className={classes.root}>
            <CardActionArea className={classes.flex}>
              <CardMedia
                className={classes.media}
                image={el.img}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="body1" component="p">
                  Название кофе:
                  {el.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {el.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      ))}
    </>
  );
}
