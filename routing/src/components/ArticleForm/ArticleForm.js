import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';

import './ArticleForm.css';

import {
    ARTICLE_TITLE,
    ARTICLE_BODY,
    DEFAULT_IMAGE_URL,
    EMPTY_STRING,
    ALT_IMAGE,
    TYPE_TEXT,
    TYPE_FILE,
    ACCEPT_FOR_FILE_INPUT,
    UPDATE,
    CREATE,
    ARTICLE,
    TITLE,
    TEXT
} from "../../constants/";
import Input from "../Input/Input";
import Button from "../Button/Button";

class ArticleForm extends Component {
    constructor(props) {
        super(props);

        this.state = this.props.article;
    }

    static defaultProps = {
        article: {
            title:  EMPTY_STRING,
            body:  EMPTY_STRING,
            src: DEFAULT_IMAGE_URL,
            id:  uuidv4()
        }
    };

    createArticle = (e) => {
        e.preventDefault();

        let {title, body, src, id} = this.state;
        const {createOrUpdateNewArticle} = this.props;

        title = title.trim();
        body = body.trim();

        if (title.length) {
            createOrUpdateNewArticle({title, body, src, id});
        }
    };

    updateValueInArticleByType = (value, typeInput) => {
        this.setState({
            [typeInput]: value
        })
    };

    handleImageChange = (e) => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.readAsDataURL(file);

        reader.onloadend = (e) => {
            this.setState({
                file,
                src: reader.result
            });
        };
    };

    render () {
        const {title, body, src} = this.state;
        const {article} = this.props;
        const {createArticle, updateValueInArticleByType, handleImageChange} = this;

        return (
            <form
                className='create-article'
                onSubmit={createArticle}
            >
                <div className='create-article__title'>Title</div>
                <Input
                    required
                    type={TYPE_TEXT}
                    placeholder={TITLE}
                    className={'create-article__input-fields'}
                    value={title}
                    onChange={({target:{value}}) => updateValueInArticleByType(value, ARTICLE_TITLE)}
                />
                <div className='create-article__title'>Description</div>
                <textarea
                    required
                    type={TYPE_TEXT}
                    placeholder={TEXT}
                    className='create-article__input-fields'
                    value={body}
                    onChange={({target:{value}}) => updateValueInArticleByType(value, ARTICLE_BODY)}
                />
                <div className='create-article__title'>Image</div>
                <div className="create-article__img-preview">
                    <Input
                        type={TYPE_FILE}
                        accept={ACCEPT_FOR_FILE_INPUT}
                        className={'create-article__choose-file'}
                        onChange={handleImageChange}
                    />
                    <img src={src} alt={ALT_IMAGE}/>
                </div>
                <Button
                    className='create-article__button'
                    text={`${article ? UPDATE : CREATE} ${ARTICLE}`}
                />
            </form>
        );
    }
}

export default ArticleForm;