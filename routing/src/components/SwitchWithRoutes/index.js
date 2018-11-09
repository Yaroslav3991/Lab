import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import Main from '../Main/Main';
import LogIn from '../LogIn/LogIn';
import Articles from '../Articles/Articles';
import Error from '../Error/Error';
import ArticleForm from '../ArticleForm/ArticleForm';
import Article from '../Article/Article';
import {EMPTY_URL, MAIN_URL, ARTICLES_URL, CREATE_URL, LOGIN_URL, ID_URL, EDIT_URL, ERROR_URL} from '../../constants/';

const SwitchWithRoutes = ({
                    articles,
                    isUserAuthorized,
                    createNewArticle,
                    updateArticle,
                    logIn
                }) => (
    <Switch>
        <Route exact path={EMPTY_URL} render={() => <Redirect to={MAIN_URL} />}/>
        <Route exact path={MAIN_URL} component={Main} />
        <Route exact path={ARTICLES_URL} render={() => (
            <Articles
                articles={articles}
                isUserAuthorized={isUserAuthorized}
            />
        )}/>
        <Route exact path={`${ARTICLES_URL}${CREATE_URL}`} render={() => (
            isUserAuthorized ? (
                <ArticleForm
                    createOrUpdateNewArticle={createNewArticle}
                />
            ) : (
                <Redirect to={LOGIN_URL} />
            ))}/>

        <Route path={`${ARTICLES_URL}${ID_URL}${EDIT_URL}`} render={({match: {params: {id: idFromUrl}}}) => {
            const article = articles.find(({id}) => id === idFromUrl);

            return (isUserAuthorized ?
                <ArticleForm
                    createOrUpdateNewArticle={updateArticle}
                    article={article}
                /> : <Redirect to={LOGIN_URL} />)
        }}/>

        <Route path={`${ARTICLES_URL}${ID_URL}`} render={({match: {params: {id: idFromUrl}}}) => {
            const article = articles.find(({id}) => id === idFromUrl);

            return (article ?
                <Article
                    article={article}
                    isUserAuthorized={isUserAuthorized}
                /> : <Redirect to={ERROR_URL} />)
        }}/>

        <Route path={LOGIN_URL} render={() => (
            <LogIn
                logIn={logIn}
            />
        )}/>
        <Route exact path={ERROR_URL} component={Error} />
        <Route exact render={() => (<Redirect to={ERROR_URL}/>)} />
    </Switch>
);

export default SwitchWithRoutes;