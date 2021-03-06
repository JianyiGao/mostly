import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

export function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={`${styles.button} ${props.className}`}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: null,
  className: '',
  onClick() {},
};

export function Input(props) {
  return (
    <React.Fragment>
      <label
        htmlFor={props.label}
        className={`${styles.label} ${props.className}`}
      >
        {props.label}

        <input
          id={props.label}
          type="text"
          placeholder="Username"
          onChange={props.onChange}
          className={`${styles.input} ${props.error ? styles.error : ''}`}
        />
      </label>
    </React.Fragment>
  );
}

Input.propTypes = {
  className: PropTypes.string,
  error: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  className: '',
  error: false,
  label: '',
  onChange() {},
};
