import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Home() {
  const user = useSelector((state) => state.auth);

  const history = useHistory();

  if (!user) {
    history.push('/signin');
  } else {
    history.push('/top');
  }
  return (
    <div style={{ display: 'none' }}>home</div>
  );
}

export default Home;
