import React from 'react';
import {NavLink} from 'react-router-dom';
import './PreviewArticle.css';
import {ARTICLES_URL, ALT_IMAGE} from "../../constants/index";

const PreviewArticle = ({title, text, src, id}) => (
    <div className='article'>
        <NavLink className='article__link' to={`${ARTICLES_URL}/${id}`}>
            <img className='article__image' alt={ALT_IMAGE} src={src} />
            <h3 className='article__title'>{title}</h3>
        </NavLink>
    </div>
);

export default PreviewArticle;