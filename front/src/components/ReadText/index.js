import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createWorker } from 'tesseract.js';

import { Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';

import { startGoogleAuthenticateSaga } from '../../redux/actions/authActions';

const useStyles = makeStyles((theme) => ({
  roots: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  root: {
    backgroundColor: '#d7d0c3',
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  search: {
    padding: '',
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    backgroundColor: '#d7d0c3',
  },
}));

export default function ReadText() {
  const dispatch = useDispatch();
  const [resultFetch, setResultFetch] = useState('');
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  const worker = createWorker({
    logger: (data) => console.log(data),
  });

  useEffect(() => {
    const fetchData = () => {
      dispatch(startGoogleAuthenticateSaga());
      setLoading((state) => !state);
    };
    fetchData();
  }, [dispatch, resultFetch]);

  async function recognize(file, lang, worker) {
    await worker.load();
    await worker.loadLanguage(lang);
    await worker.initialize(lang);
    const { data: { text } } = await worker.recognize(file);
    await worker.terminate();
    const resp = await fetch('/readText', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text,
      }),
    });
    const response = await resp.json();
    return setResultFetch(response.newArray);
  }
  function result(event) {
    event.preventDefault();
    recognize(event.target.inputFile.files[0], 'rus', worker);
  }
  return (
    <div>
      <form onSubmit={result}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="body2">
              <Paper className={classes.paper}>
                <Input
                  type="file"
                  name="inputFile"
                  size="large"
                />
                <IconButton type="submit" onClick={() => setLoading(!loading)}>
                  <PlayArrowIcon />
                </IconButton>
              </Paper>
            </Typography>
          </Grid>
        </Grid>
      </form>
      <br />
      <div>
        {!loading ? (
          <div className={classes.roots}>
            <CircularProgress className={classes.roots} color="secondary" />
          </div>
        ) : ''}
      </div>
      {resultFetch && resultFetch.map((el) => (
        <>
          <Card key={el.id} className={classes.root}>
            <CardContent>
              <Typography variant="h5" component="h2">
                Название кофе:
                &nbsp;
                {el.title}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Регион:
                &nbsp;
                {el.region}
              </Typography>
              <Typography variant="body2" component="p">
                Описание:
                &nbsp;
                {el.description}
                <br />
              </Typography>
            </CardContent>
          </Card>
        </>
      ))}
    </div>
  );
}
