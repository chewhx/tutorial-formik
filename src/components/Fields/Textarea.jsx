import React from "react";
import { Field, ErrorMessage } from "formik";

const Textarea = ({ label, name, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <Field
        className="form-control"
        as="textarea"
        id={name}
        name={name}
        {...rest}
      />
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

export default Textarea;
