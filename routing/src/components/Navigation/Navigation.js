import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navigation.css';
import {MAIN_URL, ARTICLES_URL, LOGIN_URL} from '../../constants/';

import Button from '../Button/Button';

const Navigation = ({isUserAuthorized, logOut}) => (
    <div className='navigation'>
        <NavLink className='navigation__link' to={MAIN_URL}>Main</NavLink>
        <NavLink className='navigation__link' to={ARTICLES_URL}>Articles</NavLink>
        {isUserAuthorized ?
            <Button
                callback={logOut}
                text={'LogOut'}
                className={'navigation__button'}
            />
            :
            <NavLink
                className='navigation__link navigation__link--login-out'
                to={LOGIN_URL}
                activeClassName='navigation__link--invisible'
            >LogIn</NavLink>
        }
    </div>
);

export default Navigation;