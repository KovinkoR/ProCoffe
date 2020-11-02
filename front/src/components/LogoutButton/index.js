import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';

import { startLogoutUserSaga } from '../../redux/actions/authActions';

function LogoutButton() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.auth);

  if (!user) {
    history.push('/signin');
  }

  function handleClick() {
    dispatch(startLogoutUserSaga());
  }

  return (
    <>
      <Button variant="outlined" onClick={handleClick}>Выйти</Button>
    </>
  );
}

export default LogoutButton;
