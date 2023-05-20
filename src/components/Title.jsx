import React from 'react';
import PropTypes from 'prop-types';

export default function Title({ title }) {
  return (
    <h1 className='text-3xl font-bold text-gray-900 mb-6'>{title}</h1>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};


