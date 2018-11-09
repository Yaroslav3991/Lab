import React from 'react';
import './Article.css';
import { NavLink } from 'react-router-dom';
import {ARTICLES_URL, EDIT_URL, ALT_IMAGE} from '../../constants/';

const Article = ({article: {title, body, src, id}, isUserAuthorized}) => (
    <div className='full-article'>
        <header className='full-article-header'>
            <h3 className='full-article-header__title'>{title}</h3>
            <img className='full-article-header__image' alt={ALT_IMAGE} src={src} />
        </header>
        <p className='full-article__text'>{body}</p>
        {isUserAuthorized &&
        <NavLink
            className='full-article__link'
            to={`${ARTICLES_URL}/${id}${EDIT_URL}`}
        >Edit</NavLink>}
    </div>
);

export default Article;