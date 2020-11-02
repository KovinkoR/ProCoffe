import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import BarChartIcon from '@material-ui/icons/BarChart';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: '0px',
    backgroundColor: '#d7d0c3',
    boxSizing: 'content-box',
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const user = useSelector((state) => state.auth);

  return (
    <BottomNavigation
      style={{
        marginBottom: '0px',
        marginLeft: '-10px',
        boxShadow: '3px 3px 5px 6px rgba(0, 0, 0, 0.2)',
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction style={{ margin: '-12px' }} component={Link} to="/guides" label="Статьи" icon={<LibraryBooksIcon />} />
      <BottomNavigationAction style={{ margin: '-12px' }} component={Link} to="/search" label="Поиск" icon={<SearchIcon />} />
      <BottomNavigationAction style={{ margin: '-12px' }} component={Link} to="/read" label="Камера" icon={<CameraAltIcon />} />
      <BottomNavigationAction style={{ margin: '-12px' }} component={Link} to="/top" label="Лучшее" icon={<BarChartIcon />} />

      { user ? <BottomNavigationAction style={{ margin: '-12px' }} component={Link} to="/profile" label="Профиль" icon={<PersonOutlineIcon />} />
        : <BottomNavigationAction style={{ margin: '-12px' }} component={Link} to="/signin" label="Войти" icon={<MeetingRoomIcon />} />}

    </BottomNavigation>
  );
}
