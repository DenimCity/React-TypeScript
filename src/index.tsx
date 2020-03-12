import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router, RouteComponentProps } from '@reach/router'
import { StoreProvider } from './context/Store'
import HomePage from './components/Home/HomePage';
import FavEpisode from './components/Episodes/FavEpisode';

const RouterPage = (props: { pageComponent: JSX.Element } & RouteComponentProps) => props.pageComponent

ReactDOM.render(
    <StoreProvider>
        <Router>
            <App path="/" >
                <RouterPage pageComponent={<HomePage />} path="/" />
                <RouterPage pageComponent={<FavEpisode />} path="/fav" />
            </App>
        </Router>

    </StoreProvider>
    , document.getElementById('root'));


