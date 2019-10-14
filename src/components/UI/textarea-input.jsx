import React from "react";

const TextareaInput = ({title, placeholder, autoFocus, value, onChange }) => {
  return (
    <textarea
      className="textarea-input"
      title={title}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoFocus={autoFocus} />
  );
}

export default TextareaInput;