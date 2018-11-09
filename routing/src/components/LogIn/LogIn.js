import React, {Component} from 'react';
import './LogIn.css';

import {
    USER_NAME,
    USER_PASSWORD,
    INITIAL_STATE_FOR_LOGIN,
    INPUT_FIELDS_FOR_LOGIN,
    TYPE_SUBMIT,
    LOGIN
} from "../../constants/index";
import Input from "../Input/Input";
import Button from "../Button/Button";

class LogIn extends Component {
    constructor() {
        super();

        this.state = INITIAL_STATE_FOR_LOGIN;
    }

    updateLoginInputsValues = (value, typeInput) => {
        this.setState({
            [typeInput]: value
        })
    };

    clearUserData = () => {
        this.setState(INITIAL_STATE_FOR_LOGIN)
    };

    checkUserAndLogin = (e) => {
        e.preventDefault();

        const {logIn} = this.props;
        const {name, password} = this.state;

        const isLoginCorrect = name === USER_NAME;
        const isPasswordCorrect = password === USER_PASSWORD;

        if (isLoginCorrect && isPasswordCorrect) {
            logIn();
        } else {
            this.clearUserData();
        }
    };

    render () {
        const {checkUserAndLogin, updateLoginInputsValues, state} = this;

        let inputFieldsForLogin = INPUT_FIELDS_FOR_LOGIN.map((input) => ({...input, value: state[input.typeInput]}));

        return (
            <div className='log-in'>
                <h2 className='log-in__title'>LogIn</h2>
                <form
                    className='authentication-form'
                    onSubmit={checkUserAndLogin}
                >
                    {inputFieldsForLogin.map(({name, type, value, typeInput, id}) => {
                        return (
                            <div key={id} className='login-field'>
                                <span className='login-field__title'>{name}</span>
                                <Input
                                    type={type}
                                    className={'login-field__input'}
                                    value={value}
                                    onChange={({target: {value}}) => updateLoginInputsValues(value, typeInput)}
                                />
                            </div>)
                    })}
                    <Button
                        className={'authentication-form__button'}
                        type={TYPE_SUBMIT}
                        text={LOGIN}
                    />
                </form>
            </div>
        );
    }
}

export default LogIn;