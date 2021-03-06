import React from 'react';
import '../styles/ComparisonCard.css';
import PropTypes from 'prop-types';

const ComparisonCard = ({ loc1, avg1, loc2, avg2, compare }) => {

  return (
    <div className="comparison-center">
      <img className="arrow-left" src="assets/arrow-left.svg" />
      <div className="compare-top">
        <h5>{loc1}</h5>
        <h4>Average: {avg1}</h4>
      </div>
      <div className="avg-diff">
        <h3>{compare}</h3>
      </div>
      <div className="compare-bottom">
        <h4>Average: {avg2}</h4>
        <h5>{loc2}</h5>
      </div>
    </div>
  );
};

ComparisonCard.propTypes = {
  children: PropTypes.object,
  className: PropTypes.string
};

export default ComparisonCard;
