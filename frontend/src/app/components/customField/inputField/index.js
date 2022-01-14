import React from "react";
import PropTypes from "prop-types";

import TextField from "@mui/material/TextField";
// import { withStyles } from "@mui/styles";

// const CustomField = withStyles({
//   root: {
//     "& label.Mui-focused": {
//       color: "#55b34a",
//     },
//     "& .MuiInput-underline:after": {
//       borderBottomColor: "#55b34a",
//     },
//     "& .MuiOutlinedInput-root": {
//       "& fieldset": {
//         borderColor: "#55b34a",
//       },
//       "&:hover fieldset": {
//         borderColor: "#55b34a",
//       },
//       "&.Mui-focused fieldset": {
//         borderColor: "#55b34a",
//       },
//     },
//   },
// })(TextField);

function InputField(props) {
  const { field, type, label, placeholder, disabled, className, form } = props;

  const { name } = field;
  const { errors } = form;
  const showError = errors[name];

  return (
    <TextField
      placeholder={placeholder}
      variant="outlined"
      label={label}
      type={type}
      disabled={disabled}
      className={className}
      error={showError}
      helperText={errors[name]}
      autoComplete="off"
      aria-autocomplete="none"
      spellCheck={false}
      // field of Formik have 4 important props
      {...field}
    />
  );
}

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  disabled: false,
};

export default InputField;
