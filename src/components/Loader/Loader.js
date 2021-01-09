import React from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader';
import PropTypes from 'prop-types';

export default function Loader({ loading }) {
  return (
    <div className="sweet-loading">
      <PacmanLoader size={20} color="#303f9f" loading={loading} />
    </div>
  );
}

Loader.propTypes = {
  loading: PropTypes.bool,
};
