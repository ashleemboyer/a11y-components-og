import React, { useRef } from "react";
import PropTypes from "prop-types";

import "./Button.css";

const Button = ({ children, onClick }) => {
  const buttonRef = useRef(null);

  return (
    <button
      ref={buttonRef}
      onClick={() => {
        onClick();
        buttonRef.current.blur();
      }}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
