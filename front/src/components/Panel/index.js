import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

import OneCoffeeForSearch from '../OneCoffeeForSearch';
import { searchCoffeeForUs } from '../../redux/actions/searchAction';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    backgroundColor: '#d7d0c3',
  },
}));

export default function Panel() {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const classes = useStyles();

  const cofArr = useSelector((state) => state.search.needCoffee);

  async function handleClick() {
    const request = await fetch('/searchCoffee', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        input,
      }),
    });
    const response = await request.json();
    const needCoffee = response.coffeeArr;
    dispatch(searchCoffeeForUs(needCoffee));
  }

  return (
    <>
      <div>
        <Grid container justify="center" alignItems="center" spacing={3}>
          <Grid item xs={12}>
            <Typography variant="body2">
              <Paper className={classes.paper}>
                <Input
                  onChange={(e) => { setInput(e.target.value); }}
                  placeholder="Найти кофе"
                  size="large"
                />
                <IconButton onClick={handleClick}>
                  <SearchIcon />
                </IconButton>
              </Paper>
            </Typography>
          </Grid>
        </Grid>
      </div>

      {
        cofArr.length
          ? cofArr.map((el) => <OneCoffeeForSearch key={el._id} id={el._id} />)
          : null
      }
    </>
  );
}
