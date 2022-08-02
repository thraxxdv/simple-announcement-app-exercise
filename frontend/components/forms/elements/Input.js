import React from "react";

function Input({
  name,
  type = "text",
  label,
  value = "",
  onChangeCb = () => null,
  placeholder = "",
  containerClass = ''
}) {
  return (
    <div className={containerClass}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChangeCb}
        placeholder={placeholder ? placeholder : name}
        className="form-control"
      />
    </div>
  );
}

export default Input;
