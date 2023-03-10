import React from 'react';
import PropTypes from 'prop-types';
import './input_box.css'

export default function Input (props) {
    const { size, label, ...rest } = props
    return (
      <input className={`input ${size}`} {...rest}>
        {label}
      </input>
    )
  }

  Input.propTypes = {
      size: PropTypes.oneOf(['small', 'medium', 'large']),
      label: PropTypes.string.isRequired,
  }

  Input.defaultProps = {
      size: 'medium',
      label: 'search',
  }