import React from "react";
import PropTypes from "prop-types";

const TextInputGroup = ({
  label,
  name,
  value,
  placeholder,
  onChange,
  type
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        className="form-control form-control-lg"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

TextInputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

export default TextInputGroup;
