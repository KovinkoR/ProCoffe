import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Menu from '../Menu';
import Panel from '../Panel';
import GuideList from '../GuideList';
import Authorization from '../Authorization';
import OneGuide from '../oneGuide';
import SignIn from '../SignIn';
import Profile from '../Username';
import ListItem from '../CoffeeList';
import Forgot from '../Forgot';
import ReadText from '../ReadText';
import Home from '../Home';
import Favorites from '../Favorites';
import MyCoffee from '../MyCoffee';
import Wishlist from '../WishList';

function App() {
  return (
    <div className="App">
      <>
        <Switch>
          <Route exact path="/guides">
            <GuideList />
          </Route>
          <Route exact path="/guides/:id">
            <OneGuide />
          </Route>
          <Route exact path="/favorites">
            <Favorites />
            <ListItem />
          </Route>
          <Route exact path="/wishlist">
            <Wishlist />
          </Route>
          <Route exact path="/register">
            <Authorization />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/top">
            <ListItem />
          </Route>
          <Route exact path="/search">
            <Panel />
          </Route>
          <Route exact path="/mycoffee">
            <MyCoffee />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/restore">
            <Forgot />
          </Route>
          <Route exact path="/read">
            <ReadText />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Menu />
      </>
    </div>
  );
}

export default App;
