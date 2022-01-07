import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Button } from "@mui/material";

function FilterUser({ onHandleFilter, onClosePopOver }) {
  const [dataFilter, setDataFilter] = useState();

  const handleClosePopOver = () => {
    onClosePopOver && onClosePopOver();
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    if (name === "gender") {
      setDataFilter({ ...dataFilter, gender: value });
    }

    if (name === "role") {
      setDataFilter({ ...dataFilter, role: value });
    }
  };

  const handleCancelFilter = () => {
    // Close Popover
    handleClosePopOver();
    // SetState empty filter
    setDataFilter({});
  };

  const handleFilter = () => {
    onHandleFilter && onHandleFilter(dataFilter);
    handleClosePopOver();
  };

  return (
    <form
      onChange={handleChange}
      style={{
        padding: "15px 20px",
      }}
    >
      <div>
        <FormControl component="fieldset">
          <FormLabel component="legend">Giới tính</FormLabel>
          <RadioGroup aria-label="gender" name="gender">
            <FormControlLabel value="nam" control={<Radio />} label="Nam" />
            <FormControlLabel value="nu" control={<Radio />} label="Nữ" />
          </RadioGroup>
        </FormControl>
      </div>

      <div>
        <FormControl component="fieldset">
          <FormLabel component="legend">Phân quyền</FormLabel>
          <RadioGroup aria-label="role" name="role">
            <FormControlLabel value="admin" control={<Radio />} label="Admin" />
            <FormControlLabel
              value="client"
              control={<Radio />}
              label="Client"
            />
          </RadioGroup>
        </FormControl>
      </div>

      <div
        style={{
          display: "block",
        }}
      >
        <Button
          variant="contained"
          style={{
            marginRight: "10px",
          }}
          onClick={handleFilter}
        >
          Lưu
        </Button>
        <Button variant="text" onClick={handleCancelFilter}>
          Hủy bỏ
        </Button>
      </div>
    </form>
  );
}

export default FilterUser;
