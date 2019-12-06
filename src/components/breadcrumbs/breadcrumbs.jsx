import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Breadcrumbs = ({parentPage, parentPageLink, currentPage}) => {
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link
            to={parentPageLink}
            className="breadcrumbs__link"
          >
            {parentPage}
          </Link>
        </li>
        <li className="breadcrumbs__item">
          <span className="breadcrumbs__link">
            {currentPage}
          </span>
        </li>
      </ul>
    </nav>
  );
};

Breadcrumbs.propTypes = {
  currentPage: PropTypes.string,
  parentPage: PropTypes.string,
  parentPageLink: PropTypes.string,
};

export default Breadcrumbs;
