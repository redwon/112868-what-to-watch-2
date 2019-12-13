import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {ActionCreator} from '../../reducer/user/user';
import {ActionCreator as AuthActionCreator} from '../../reducer/authorization/authorization';
import history from '../../history';

import Header from '../header/header';
import Footer from '../footer/footer';

const SignIn = (props) => {
  const {
    onLogin,
    isLoading,
    error,
    onPost,
    email,
    isEmailValid,
    passwordErrorMessage,
    password,
    isPasswordValid,
    emailErrorMessage,
    isFormValid,
    isShowError,
    onShowError,
    onUserInput,
  } = props;

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    onShowError(true);

    if (isFormValid && !isLoading) {
      onShowError(false);
      onPost(`/login`, {email, password}, (data) => {
        onLogin(data);
        history.push(`/`);
      });
    }
  };

  return (
    <div className="user-page">
      <Header className="user-page__head" isHideUserBlock={true}>
        <h1 className="page-title user-page__title">Sign in</h1>
      </Header>
      <div className="sign-in user-page__content">
        <form className="sign-in__form" onSubmit={handleFormSubmit}>
          {isShowError && (
            <div className="sign-in__message">
              {!isEmailValid && (
                <p>{emailErrorMessage}</p>
              )}
              {!isPasswordValid && (
                <p>{passwordErrorMessage}</p>
              )}
              {error && (
                <p>{error.message}</p>
              )}
            </div>
          )}

          <div className="sign-in__fields">
            <div className={`sign-in__field ${isShowError && !isEmailValid ? `sign-in__field--error` : ``}`}>
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="email"
                id="user-email"
                value={email}
                onChange={onUserInput}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">
                Email address
              </label>
            </div>

            <div className={`sign-in__field ${isShowError && !isPasswordValid ? `sign-in__field--error` : ``}`}>
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="password"
                id="user-password"
                value={password}
                onChange={onUserInput}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">
                Password
              </label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">
              Sign in
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

SignIn.propTypes = {
  onLogin: PropTypes.func,
  isLoading: PropTypes.bool,
  error: PropTypes.object,
  onPost: PropTypes.func,
  email: PropTypes.string,
  isEmailValid: PropTypes.bool,
  passwordErrorMessage: PropTypes.string,
  password: PropTypes.string,
  isPasswordValid: PropTypes.bool,
  emailErrorMessage: PropTypes.string,
  isFormValid: PropTypes.bool,
  isShowError: PropTypes.bool,
  onShowError: PropTypes.func,
  onUserInput: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  onLogin: (user) => {
    dispatch(ActionCreator.login(user));
    dispatch(AuthActionCreator.requireAuthorization(false));
  }
});

export {SignIn};

export default connect(null, mapDispatchToProps)(SignIn);
