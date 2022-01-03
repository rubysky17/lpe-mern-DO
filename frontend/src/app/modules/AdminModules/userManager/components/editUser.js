import React, { useState } from "react";
import LPEAvatar from "app/components/avatar";
import TextInput from "app/components/textInput";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { convertFullDate } from "core/utils/dateUtil";
import LPEButton from "app/components/button";
import { styled } from "@mui/material/styles";

import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import emptyAvatar from "assets/images/btnLogin.png";

import "./styles/styles.scss";

const CustomDatePicker = styled(DatePicker)(({ theme }) => ({
  width: "100%!important",
  margin: "20px 0",

  "& > label": {
    fontSize: "17px",
    fontWeight: "bold",
    color: "#333",
    top: "0px",
    fontFamily: "product-sans, sans-serif",
  },

  "& > label + .MuiInput-formControl": {
    border: "1px solid #dbeaf5",
    borderRadius: "5px",
    padding: "10px",
    marginTop: "30px",
    marginBottom: "20px",
  },

  "& > label + .MuiInput-formControl:before": {
    display: "none",
  },

  "&:focus > label + .MuiInput-formControl:before": {
    display: "none",
  },

  "& .MuiInputLabel-shrink": {
    transform: "unset",
    transformOrigin: "unset",
  },
}));

function EditUser({ avatar, onToggleDrawer }) {
  const styles = {
    width: "600px",
    padding: "20px",
  };
  const [birthDay, setBirthDay] = useState("2000-09-20T21:11:54");

  const handleEdit = (e) => {};

  const handleCloseEdit = () => {
    onToggleDrawer && onToggleDrawer();
  };

  const handleDateChange = (date) => {
    setBirthDay(convertFullDate(date));
  };

  return (
    <div className="admin-user-screen">
      <p className="heading-title">Thông tin user</p>

      <div className="row  avatar">
        <img
          src={avatar || emptyAvatar}
          alt={avatar || emptyAvatar}
          className="img-fluid"
        />
      </div>

      <form style={styles}>
        <div className="row">
          <div className="col-6">
            <TextInput
              label="Tên đầy đủ"
              placeHolder="Nhập tên"
              type="text"
              name="email"
              typeInput="text"
            />
          </div>

          <div className="col-6">
            <TextInput
              label="Email"
              placeHolder="Nhập Email"
              type="text"
              name="email"
              typeInput="text"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <TextInput
              label="Số điện thoại"
              placeHolder="Nhập số điện thoại"
              type="phone"
              name="phone"
              typeInput="text"
            />
          </div>

          <div className="col-6">
            <TextInput
              label="Số CMND/CCCD"
              placeHolder="Nhập số chứng minh/căn cước"
              type="ICN"
              name="ICN"
              typeInput="text"
            />
          </div>
        </div>

        <TextInput
          label="Địa chỉ"
          placeHolder="Nhập địa chỉ"
          type="address"
          name="address"
          typeInput="text"
        />

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <CustomDatePicker
            id="date-picker-dialog"
            label="Ngày sinh"
            inputFormat="dd/MM/yyyy"
            value={birthDay}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "Thay đổi ngày",
            }}
            name="birthDay"
            renderInput={(params) => <TextField {...params} />}
            className="date-picker"
          />
        </LocalizationProvider>

        <div className="row">
          <div className="col-6">
            <FormControl component="fieldset">
              <FormLabel component="legend">Giới tính</FormLabel>
              <RadioGroup
                aria-label="gender"
                defaultValue="nu"
                name="radio-buttons-group"
              >
                <FormControlLabel value="nu" control={<Radio />} label="Nữ" />
                <FormControlLabel value="nam" control={<Radio />} label="Nam" />
              </RadioGroup>
            </FormControl>
          </div>

          <div className="col-6">
            <FormControl component="fieldset">
              <FormLabel component="legend">Phân quyền</FormLabel>
              <RadioGroup
                aria-label="role"
                defaultValue="client"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="client"
                  control={<Radio />}
                  label="Người dùng"
                />
                <FormControlLabel
                  value="admin"
                  control={<Radio />}
                  label="Quản lý"
                />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
      </form>

      <div className="wrapper-btn-group">
        <LPEButton
          action={handleEdit}
          name="Xác nhận"
          // loading={loading}
          classStyled="editbtn"
        />

        <LPEButton
          action={handleCloseEdit}
          name="hủy"
          // loading={loading}
          classStyled="cancelbtn"
        />
      </div>
    </div>
  );
}

export default EditUser;
