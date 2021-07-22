import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export const Button = ({ primary, disabled, type, progression, size, label, ...props }) => {
  const disabledMode = disabled ? '--disabled' : '';
  const mode = primary ? `storybook-button--primary${disabledMode}` : `storybook-button--secondary${disabledMode}`;
  const progressionMode = progression === 'normal' ? mode : progression;
   return (
    <button
      type={type}
      className={['storybook-button', `storybook-button--${size}`, progressionMode].join(' ')}
      disabled={disabled}
      {...props}
    >
      {progression === 'loading' ? progression : label}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['button', 'type', 'reset']),
  progression: PropTypes.oneOf(['normal', 'loading', 'success', 'failure']),
  label: PropTypes.string.isRequired,
};

Button.defaultProps = {
  primary: false,
  type: 'button',
  size: 'medium',
  disabled: false,
  progression: 'normal',
};
