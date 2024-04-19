import React from "react";
import "./Button.css";

const Button = ({ onClick, children, className }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button onClick={handleClick} className={`button ${className}`}>
      {children}
    </button>
  );
};

export default Button;
