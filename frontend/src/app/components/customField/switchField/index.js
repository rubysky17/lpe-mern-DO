import React from "react";
import PropTypes from "prop-types";

import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import { FormControlLabel, FormGroup } from "@mui/material";
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

function SwitchField(props) {
  const { field, label, disabled, className, form } = props;

  const handleChangeSwitch = (value) => {
    const changeEvent = {
      target: {
        name: field.name,
        value: value.target.checked,
      },
    };

    console.log("changeEvent", changeEvent);

    field.onChange(changeEvent);
  };
  return (
    <FormGroup className={className}>
      <FormControlLabel
        control={
          <Switch
            {...field}
            checked={field.value}
            disabled={disabled}
            onChange={handleChangeSwitch}
          />
        }
        label={label}
      />
    </FormGroup>
  );
}

SwitchField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

SwitchField.defaultProps = {
  label: "",
  placeholder: "",
  disabled: false,
};

export default SwitchField;
