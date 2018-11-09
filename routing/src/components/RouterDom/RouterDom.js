import React from 'react';
import { Router } from 'react-router-dom';

import './RouterDom.css';

import Navigation from '../Navigation/Navigation';
import SwitchWithRoutes from '../SwitchWithRoutes';

const RouterDom = ({isUserAuthorized, logOut, articles, createNewArticle, updateArticle, logIn, history}) => (
    <Router history={history}>
        <div className='routing'>
            <Navigation
                isUserAuthorized={isUserAuthorized}
                logOut={logOut}
            />
            <SwitchWithRoutes
                articles={articles}
                isUserAuthorized={isUserAuthorized}
                createNewArticle={createNewArticle}
                updateArticle={updateArticle}
                logIn={logIn}
            />
        </div>
    </Router>
);

export default RouterDom;