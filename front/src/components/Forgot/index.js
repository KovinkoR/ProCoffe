import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  search: {
    padding: '',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: '#d7d0c3',
  },
}));

export default function Forgot() {
  const history = useHistory();
  const [targetText, setTargetText] = useState('');

  async function allText(event) {
    event.preventDefault();
    const resp = await fetch('http://localhost:3001/restoreApi', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        targetText,
      }),
    });
    const response = await resp.json();
    console.log(response);
    history.push('/signin');
  }

  const classes = useStyles();

  return (
    <>
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="body2">
              <Paper className={classes.paper}>
                <form onChange={(e) => setTargetText(e.target.value)}>
                  <Input
                    name="input"
                    placeholder="Введите Вашу почту"
                    enterbutton="email"
                    size="large"
                  />
                  <Button type="button" onClick={allText} style={{ margin: '8px' }}>find</Button>
                </form>
              </Paper>
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
