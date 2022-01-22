import React, { useState } from "react";
import PropTypes from "prop-types";

import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  customInputLabel: {
    "& legend": {
      visibility: "visible",
    },
  },
});

function InputField(props) {
  const classes = useStyles();
  const { field, type, label, placeholder, disabled, className, form } = props;
  const [showPassword, setShowPassword] = useState(false);

  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      {type === "text" && (
        <TextField
          placeholder={placeholder}
          variant="outlined"
          label={label}
          type={type}
          disabled={disabled}
          className={className}
          error={showError}
          helperText={showError && errors[name]}
          autoComplete="off"
          aria-autocomplete="none"
          spellCheck={false}
          // field of Formik have 4 important props
          {...field}
        />
      )}

      {type === "password" && (
        <OutlinedInput
          classes={{ notchedOutline: classes.customInputLabel }}
          placeholder={placeholder}
          variant="outlined"
          label={label}
          disabled={disabled}
          className={className}
          error={showError}
          helperText={showError && errors[name]}
          type={showPassword ? "text" : "password"}
          // field of Formik have 4 important props
          {...field}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      )}
    </>
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
