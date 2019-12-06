import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {Operations} from '../../reducer/user/user';

import Header from '../header/header';
import Footer from '../footer/footer';

const SignIn = ({onLogin}) => {
  let email = ``;
  let password = ``;

  const emailHandler = (evt) => {
    email = evt.target.value;
  };

  const passwordHandler = (evt) => {
    password = evt.target.value;
  };

  const submitHandler = (evt) => {
    evt.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="user-page">
      <Header className="user-page__head" isHideUserBlock={true}>
        <h1 className="page-title user-page__title">Sign in</h1>
      </Header>
      <div className="sign-in user-page__content">
        <form className="sign-in__form" onSubmit={submitHandler}>
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                onChange={emailHandler}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">
                Email address
              </label>
            </div>

            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                onChange={passwordHandler}
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
  onLogin: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  onLogin: (email, password) => {
    dispatch(Operations.login(email, password));
  }
});

export {SignIn};

export default connect(null, mapDispatchToProps)(SignIn);
