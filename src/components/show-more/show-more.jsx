import React from 'react';
import PropTypes from 'prop-types';

const ITEMS_PER_PAGE = 20;

const ShowMore = ({itemsToShow, onClick}) => {
  const onClickHandler = () => {
    onClick(itemsToShow + ITEMS_PER_PAGE);
  };

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={onClickHandler}
      >
        Show more
      </button>
    </div>
  );
};

ShowMore.propTypes = {
  itemsToShow: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ShowMore;
