import React, { Fragment } from 'react';

import './App.css';
import Header from './components/Header/Header'



export default function App(props: any): JSX.Element {
  return (
    <Fragment >
      <Header />
      {props.children}
    </Fragment>
  );
}
