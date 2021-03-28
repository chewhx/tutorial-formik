import React from "react";
import { Field, ErrorMessage } from "formik";

const Select = ({ label, name, options, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <Field
        className="form-control"
        as="select"
        id={name}
        name={name}
        {...rest}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.key}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name}>
        {(error) => (
          <small id="name" className="form-text text-muted">
            {error}
          </small>
        )}
      </ErrorMessage>
    </div>
  );
};

export default Select;
