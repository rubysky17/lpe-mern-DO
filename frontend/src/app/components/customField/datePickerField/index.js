import React from "react";
import PropTypes from "prop-types";

import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { convertFullDate } from "core/utils/dateUtil";

function DatePickerField(props) {
  const { field, label, placeholder, disabled, className } = props;

  const handleChangeDate = (value) => {
    const changeEvent = {
      target: {
        name: field.name,
        value: convertFullDate(value),
      },
    };

    field.onChange(changeEvent);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        {...field}
        label={label}
        disabled={disabled}
        placeholder={placeholder}
        className={className}
        onChange={handleChangeDate}
        format="DD/MM/yyyy"
        views={["day", "month", "year"]}
        renderInput={(params) => (
          <TextField
            {...params}
            helperText={null}
            style={{
              width: "100%",
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
}

DatePickerField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

DatePickerField.defaultProps = {
  label: "",
  placeholder: "",
  disabled: false,
  className: "",
};

export default DatePickerField;
