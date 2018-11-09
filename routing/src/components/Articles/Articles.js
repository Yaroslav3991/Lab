import React from 'react';
import PreviewArticle from "../PreviewArticle/PreviewArticle";
import {NavLink} from 'react-router-dom';
import {ARTICLES_URL, CREATE_URL} from '../../constants/';
import './Articles.css';

const Articles = ({articles, isUserAuthorized}) => (
    <div className='articles'>
        {articles.map((article) => (
            <PreviewArticle key={article.id}
                {...article}
            />
        ))}
        {isUserAuthorized && <NavLink className='navigation__link articles__add-new-article' to={`${ARTICLES_URL}${CREATE_URL}`}>Create article</NavLink>}
    </div>
);

export default Articles;