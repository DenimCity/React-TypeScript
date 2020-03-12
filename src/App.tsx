import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';
import Header from './components/Header'
import HomePage from "./HomePage";
import FavEpisode from "./FavEpisode";


export default function App(): JSX.Element {
  return (
    <Fragment >
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/favs" component={FavEpisode} />
        </Switch>
      </Router>
    </Fragment>
  );
}
