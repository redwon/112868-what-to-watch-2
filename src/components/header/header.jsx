import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {UserType} from '../../types';
import {ActionCreator} from '../../reducer/authorization/authorization';

const Header = ({user, onSignIn}) => {
  const getUserBlock = () => {
    if (user) {
      return (
        <div className="user-block__avatar">
          <img
            src={user.avatarUrl}
            alt="User avatar"
            width="63"
            height="63"
          />
        </div>
      );
    }

    return (
      <a
        className="user-block__link"
        href="#"
        onClick={onSignInHandler}
      >
        Sign in
      </a>
    );
  };

  const onSignInHandler = (evt) => {
    evt.preventDefault();
    onSignIn();
  };

  return (
    <header className="page-header movie-card__head">
      <div className="logo">
        <a className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <div className="user-block">
        {getUserBlock()}
      </div>
    </header>
  );
};

Header.propTypes = {
  user: UserType,
  onSignIn: PropTypes.func,
};

const mapStateToProps = (state) => Object.assign({}, {
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  onSignIn: () => {
    dispatch(ActionCreator.requireAuthorization(true));
  }
});

export {Header};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
