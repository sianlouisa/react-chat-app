import React from "react";

const CustomButton = ({ children, type }) => {
  return (
    <button type={type} className="custom-button">{children}</button>
  );
}

export default CustomButton;