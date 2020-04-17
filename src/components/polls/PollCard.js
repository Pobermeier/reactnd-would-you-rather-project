import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PollCard = ({ question }) => {
  return (
    <div className="card mb-3 p-3 mx-auto">
      <h3 className="card-title text-left mb-3">{question.authorName} asks:</h3>
      <div className="row no-gutters">
        <div className="col-md-3 p-3">
          <img
            src={question.authorAvatarURL}
            className="card-img rounded-circle"
            alt={question.authorName}
          />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <h4 className="text-left mb-3">Would you rather</h4>
            <p className="card-text">...{question.optionOne.text}...</p>
            <Link to="/" className="btn btn-outline-primary btn-block">
              View Poll
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

PollCard.propTypes = {
  question: PropTypes.object.isRequired,
};

export default PollCard;
