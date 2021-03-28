import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: [""],
  phNumbers: [""],
};

const savedValues = {
  name: "Sherlock Holme",
  email: "sherlock@baker.com",
  channel: "Baker Street",
  comments: "Great",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: [""],
  phNumbers: [""],
};

const onSubmit = (values, onSubmitProps) => {
  console.log(values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("Required"),
});

const validateComment = (value) => {
  let error;
  if (!value) {
    error = "required";
  }
  return error;
};

const YouTubeForm = () => {
  const [formValues, setFormValues] = useState();
  return (
    <div className="container py-5">
      <Formik
        initialValues={formValues || initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {(formik) => {
          console.log(formik);
          return (
            <Form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <Field
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                />
                <ErrorMessage name="name">
                  {(ErrorMessage) => (
                    <small id="name" className="form-text text-muted">
                      {ErrorMessage}
                    </small>
                  )}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                />
                <ErrorMessage name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="channel">Channel</label>
                <Field
                  type="text"
                  className="form-control"
                  id="channel"
                  name="channel"
                />
                <ErrorMessage name="channel" />
              </div>
              <div className="form-group">
                <label htmlFor="comments">comments</label>
                <Field
                  type="text"
                  className="form-control"
                  id="comments"
                  name="comments"
                  validate={validateComment}
                />
                <ErrorMessage name="comments" />
              </div>

              <div className="form-group">
                <label htmlFor="address">Address</label>
                <Field name="address">
                  {({ field, form, meta }) => {
                    return (
                      <div>
                        <input type="text" id="address" {...field} />
                        {meta.touched && meta.error && <div>{meta.error}</div>}
                      </div>
                    );
                  }}
                </Field>
              </div>
              <div className="form-group">
                <label htmlFor="social.facebook">social.facebook</label>
                <Field
                  as="input"
                  className="form-control"
                  id="social.facebook"
                  name="social.facebook"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phoneNumbers[0]">phoneNumbers[0]</label>
                <Field
                  as="input"
                  className="form-control"
                  id="phoneNumbers[0]"
                  name="phoneNumbers[0]"
                />
              </div>

              <div className="form-group">
                <label>List of phone numbers</label>
                <FieldArray name="phNumbers">
                  {(fieldArrayProps) => {
                    const { push, remove, form } = fieldArrayProps;
                    const { values } = form;
                    const { phNumbers } = values;
                    return (
                      <div>
                        {phNumbers.map((phNumber, index) => (
                          <div key={index}>
                            <Field name={`phNumber[${index}]`} />
                            {index > 0 && (
                              <button
                                type="button"
                                onClick={() => remove(index)}
                              >
                                -
                              </button>
                            )}
                            <button type="button" onClick={() => push("")}>
                              +
                            </button>
                          </div>
                        ))}
                      </div>
                    );
                  }}
                </FieldArray>
              </div>
              <button type="button" onClick={() => setFormValues(savedValues)}>
                Load saved data
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!formik.isValid || formik.isSubmitting}
              >
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default YouTubeForm;
