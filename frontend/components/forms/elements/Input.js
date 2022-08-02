import React from "react";

function Input({
  name,
  type = "text",
  label,
  value = "",
  onChangeCb = () => null,
  placeholder = "",
  containerClass = '',
  required = 'required'
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
        required={required}
      />
    </div>
  );
}

export default Input;
