import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Button } from "@mui/material";

function TableFilter({ onFilter }) {
  const [dataFilter, setDataFilter] = useState({});

  const handleFilter = () => {
    onFilter && onFilter(dataFilter);
  };

  const handleChangeFilter = () => {};

  const handleCancelFilter = () => {
    setDataFilter({});
  };
  return (
    <form
      onChange={handleChangeFilter}
      style={{
        padding: "15px 20px",
      }}
    >
      <FormGroup>
        <FormLabel component="legend">Giới tính</FormLabel>
        <FormControlLabel control={<Checkbox />} label="Nam" />
        <FormControlLabel control={<Checkbox />} label="Nữ" />
      </FormGroup>

      <FormControl component="fieldset">
        <FormLabel component="legend">Phân quyền</FormLabel>
        <RadioGroup aria-label="role" name="radio-buttons-group">
          <FormControlLabel value="admin" control={<Radio />} label="Admin" />
          <FormControlLabel value="client" control={<Radio />} label="Client" />
        </RadioGroup>
      </FormControl>

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
        >
          Lưu
        </Button>
        <Button variant="text">Hủy bỏ</Button>
      </div>
    </form>
  );
}

export default TableFilter;
