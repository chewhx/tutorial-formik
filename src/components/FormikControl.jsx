import React from "react";
import Check from "./Fields/Check";
import Date from "./Fields/Date";
import Input from "./Fields/Input";
import Radio from "./Fields/Radio";
import Select from "./Fields/Select";
import Textarea from "./Fields/Textarea";

const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <Radio {...rest} />;
    case "checkbox":
      return <Check {...rest} />;
    case "date":
      return <Date {...rest} />;

    default:
      return null;
  }
};
export default FormikControl;
