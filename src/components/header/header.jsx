import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {UserType} from '../../types';

const BASE_URL = `https://htmlacademy-react-2.appspot.com`;

const Header = (props) => {
  const {user, isHideUserBlock} = props;

  const getUserBlock = () => {
    if (user) {
      return (
        <div className="user-block__avatar">
          <Link to="/my-list">
            <img
              src={`${BASE_URL}${user.avatarUrl}`}
              alt="User avatar"
              width="63"
              height="63"
            />
          </Link>
        </div>
      );
    }

    return (
      <Link
        to="/login"
        className="user-block__link"
      >
        Sign in
      </Link>
    );
  };

  return (
    <header className={`page-header ${props.className ? props.className : ``}`}>
      <h1 className="visually-hidden">WTW</h1>
      <div className="logo">
        <Link
          to="/"
          className="logo__link"
        >
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      {props.children}

      {!isHideUserBlock && <div className="user-block">
        {getUserBlock()}
      </div>}
    </header>
  );
};

Header.propTypes = {
  user: UserType,
  isHideUserBlock: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.element,
};

const mapStateToProps = (state) => Object.assign({}, {
  user: state.user,
});

export {Header};

export default connect(mapStateToProps)(Header);
