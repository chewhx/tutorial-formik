import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const FormikContainer = () => {
  const dropDownOptions = [
    { key: "Select an option", value: "" },
    { key: "Option 1", value: "option1" },
    { key: "Option 2", value: "option2" },
    { key: "Option 3", value: "option3" },
    { key: "Option 4", value: "option4" },
    { key: "Option 5", value: "option5" },
  ];
  const checkBoxOptions = [
    { key: "cOption 1", value: "coption1" },
    { key: "cOption 2", value: "coption2" },
    { key: "cOption 3", value: "coption3" },
    { key: "cOption 4", value: "coption4" },
    { key: "cOption 5", value: "coption5" },
  ];
  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
    checkOption: [],
    dateOption: null,
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
    checkOption: Yup.array().required("Required"),
    dateOption: Yup.date().required("Required").nullable(),
  });
  const onSubmit = (values) => console.log("Form data", values);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form className="container py-5">
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
          />
          <FormikControl
            control="textarea"
            type="description"
            label="Description"
            name="description"
          />
          <FormikControl
            control="select"
            label="Select Option"
            name="selectOption"
            options={dropDownOptions}
          />
          <FormikControl
            control="radio"
            label="Select Radio Option"
            name="radioOption"
            options={dropDownOptions}
          />
          <FormikControl
            control="checkbox"
            label="Select Checkbox Option"
            name="checkOption"
            options={checkBoxOptions}
          />
          <FormikControl control="date" label="Pick a date" name="dateOption" />

          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
