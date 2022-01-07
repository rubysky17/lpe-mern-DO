import React from "react";
import PropTypes from "prop-types";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { FormControl, FormHelperText, InputLabel } from "@mui/material";
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles(() => ({
//   root: {
//     "& label": {
//       color: "#55b34a",
//     },
//     "& .MuiOutlinedInput-underline:after": {
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
// }));

function SelectField(props) {
  // const classes = useStyles();
  const { field, label, placeholder, disabled, className, options, form } =
    props;

  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  return (
    <>
      <FormControl className={className} error={showError}>
        {label && <InputLabel id={field.name}>{label}</InputLabel>}

        <Select
          {...field}
          id={field.name}
          value={field.value}
          disabled={disabled}
          label={label}
          inputProps={{ "aria-label": "Without label" }}
          placeholder={placeholder}
        >
          {options.map((option, index) => {
            return (
              <MenuItem value={option.value} key={index}>
                {option.name}
              </MenuItem>
            );
          })}
        </Select>

        {showError && <FormHelperText>{errors[name]}</FormHelperText>}
      </FormControl>
    </>
  );
}

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.array,
};

SelectField.defaultProps = {
  label: "",
  placeholder: "",
  disabled: false,
  options: [],
};

export default SelectField;
