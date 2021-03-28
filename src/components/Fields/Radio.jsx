import React from "react";
import { Field, ErrorMessage } from "formik";

const Radio = ({ label, name, options, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <Field className="form-control" name={name} {...rest}>
        {({ field }) =>
          options.map((option) => (
            <div key={option.key} className="custom-control custom-radio">
              <input
                className="custom-control-input"
                type="radio"
                id={option.value}
                {...field}
                value={option.value}
                checked={field.value === option.value}
              />
              <label className="custom-control-label" htmlFor={option.value}>
                {option.key}
              </label>
            </div>
          ))
        }
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

export default Radio;
