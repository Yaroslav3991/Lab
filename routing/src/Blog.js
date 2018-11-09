import React, { Component } from 'react';
import createBrowserHistory from 'history/createBrowserHistory';

import RouterDom from './components/RouterDom/RouterDom';

import './Blog.css';

import { INITIAL_STATE, ARTICLES_URL, LOGIN_URL } from './constants';

const history = createBrowserHistory();

class Blog extends Component {
    constructor(props) {
        super(props);

        this.state = INITIAL_STATE;
    }

    logIn = () => {
        history.push(ARTICLES_URL);

        this.setState({
            isUserAuthorized: true,
        })
    };

    logOut = () => {
        history.push(LOGIN_URL);

        this.setState({
            isUserAuthorized: false
        })
    };

    updateArticle = (updatedArticle) => {
        const articles = this.state.articles.map(
            (article) => article.id === updatedArticle.id ? updatedArticle : article
        );

        history.push(ARTICLES_URL);

        this.setState({
            articles
        });
    };

    createNewArticle = (article) => {
        history.push(ARTICLES_URL);

      this.setState({
          articles: [...this.state.articles, article]
      })
    };

    render() {
        const {createNewArticle, updateArticle, logIn, logOut} = this;
        const {articles, isUserAuthorized} = this.state;

        return (
            <RouterDom
                history={history}
                articles={articles}
                isUserAuthorized={isUserAuthorized}
                logIn={logIn}
                logOut={logOut}
                updateArticle={updateArticle}
                createNewArticle={createNewArticle}
            />
        );
    }
}

export default Blog;