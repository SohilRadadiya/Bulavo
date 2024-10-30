import React from 'react';
import PropTypes from 'prop-types';
import '../../assimox-icons/style.css'

const Icon = ({ name, className, ...props }) => {
  return (
    <span className={`icon-${name} ${className}`} {...props}></span>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Icon.defaultProps = {
  className: '',
};

export default Icon;
