import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import { convertFullDate, timeToUnix } from "core/utils/dateUtil";
import { phoneValidate } from "core/utils/phoneUtil";
import TextInput from "app/components/textInput";
import LPEButton from "app/components/button";

// import {
//   KeyboardDatePicker,
//   MuiPickersUtilsProvider,
// } from "@material-ui/pickers";

import {
  deleteAvatarAction,
  updateAvatarAction,
  updateUserAction,
} from "core/redux/actions/userAction";

import "./styles/styles.scss";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  btnSave: {
    marginTop: "10px",
    marginBottom: "10px",
    backgroundColor: "#3777BC",
    color: "#fff",
    textTransform: "capitalize",
    fontSize: "16px",
    "&:hover": {
      backgroundColor: "#6499e7",
    },
  },
  // datePicker: {
  //   width: "100%",
  //   "& > label": {
  //     fontSize: "17px",
  //     fontWeight: "bold",
  //     color: "#333",
  //     marginBottom: "0",
  //     top: "17px",
  //     fontFamily: "product-sans, sans-serif",
  //   },
  //   "& > label + .MuiInput-formControl": {
  //     border: "1px solid #dbeaf5",
  //     borderRadius: "5px",
  //     padding: "10px",
  //     marginTop: "3rem",
  //   },
  //   "& > label + .MuiInput-formControl:before": {
  //     display: "none",
  //   },
  //   "&:focus > label + .MuiInput-formControl:before": {
  //     display: "none",
  //   },
  //   "& .MuiInputLabel-shrink": {
  //     transform: "unset",
  //     transformOrigin: "unset",
  //   },
  // },
}));

function AccountInfo({ id, userInfo }) {
  const classes = useStyles();
  const [birthDay, setBirthDay] = useState();
  const dispatch = useDispatch();
  const [loadingImage, setLoadingImage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  const refForm = useRef();
  const hiddenRef = useRef(null);
  const [error, setError] = useState("");

  useEffect(() => {
    userInfo && setBirthDay(convertFullDate(userInfo?.birthDay));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDataSubmit = () => {
    setErrorMessage({});
    setIsLoading(true);

    const dataSubmit = {};
    const errorMsg = {};

    const name = refForm.current["name"].value;
    const email = refForm.current["email"].value;
    const phone = refForm.current["phone"].value;
    const identityCard = refForm.current["identityCard"].value;
    const address = refForm.current["address"].value;

    // Checking Name
    if (!name.trim().length) {
      errorMsg["name"] = "Không bỏ trống trường này";
    }

    if (name.length > 30) {
      errorMsg["name"] = "Tên không vượt quá 30 ký tự";
      refForm.current["name"].focus();
    } else {
      dataSubmit["name"] = name;
    }

    dataSubmit["email"] = email;
    dataSubmit["ICN"] = identityCard;
    dataSubmit["address"] = address;
    dataSubmit["birthDay"] = timeToUnix(birthDay);

    // Checking Phone
    if (phone.trim().length) {
      if (!phoneValidate(phone)) {
        errorMsg["phone"] = "Số điện thoại không hợp lệ";
        refForm.current["phone"].focus();
      }
    } else {
      errorMsg["phone"] = "Số điện thoại không được bỏ trớng";
    }

    dataSubmit["phone"] = phone;

    setErrorMessage(errorMsg);

    if (Object.keys(errorMsg).length === 0) {
      handleSubmit(dataSubmit);
    } else {
      setIsLoading(false);
    }
  };

  const handleSubmit = (dataSubmit) => {
    dispatch(updateUserAction(id, dataSubmit, setIsLoading));
    setError({});
  };

  const handleChangeImage = (e) => {
    setError("");
    setLoadingImage(true);

    const file = e.target.files[0];

    if (!file) {
      return;
    }

    if (!file.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      setLoadingImage(false);
      return setError("Chỉ hỗ trợ file hình ảnh");
    }

    if (file.size / 1024 / 1024 < 1) {
      const formData = new FormData();

      if (file) {
        formData.append("avatar", file);

        dispatch(updateAvatarAction(formData, setLoadingImage));
      }
    } else {
      setLoadingImage(false);

      setError("Chỉ hỗ trợ file ảnh tối đa 3MB");
    }
  };

  const handleDeleteImage = (path) => {
    setLoadingImage(true);
    const filename = path.replace(/^.*[\\/]/, "");

    dispatch(deleteAvatarAction(filename, setLoadingImage));
  };

  return (
    <>
      {userInfo && (
        <div className="profileBox">
          <form ref={refForm}>
            <div className="profileMainInfo">
              <div className="row">
                <div
                  className="col-12 col-md-6"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div className="profileMedia">
                    {!loadingImage ? (
                      <>
                        {userInfo.avatar !== "" ? (
                          <div className="wrapperUpload">
                            <img
                              src={userInfo.avatar}
                              alt="icon-has-uploaded"
                              className="avatarHasUpload"
                            ></img>

                            <div
                              className="buttonDeleteImage"
                              onClick={() => {
                                handleDeleteImage(userInfo.avatar);
                              }}
                            >
                              <i className="fas fa-trash"></i>
                            </div>
                          </div>
                        ) : (
                          <label className="labelAvatar">
                            <input
                              type="file"
                              id="avatarundefined"
                              name="avatar"
                              ref={hiddenRef}
                              onChange={handleChangeImage}
                            />
                            {
                              <img
                                src="https://kt.city/static/icon-upload.png"
                                alt="icon-upload"
                              ></img>
                            }
                          </label>
                        )}
                      </>
                    ) : (
                      <div className="loader image"></div>
                    )}

                    {!!error.length && <p className="text-danger">{error}</p>}
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <TextInput
                    placeHolder="Nguyễn Văn A"
                    type="text"
                    name="name"
                    typeInput="text"
                    defaultValue={userInfo.name}
                    error={errorMessage.name}
                  />
                  <TextInput
                    placeHolder="JohnDoe@gmail.com"
                    type="email"
                    name="email"
                    defaultValue={userInfo.email}
                    typeInput="text"
                    disabled
                  />
                </div>
              </div>
            </div>

            <div className="profileOther">
              <h5>Các thông tin khác</h5>
              <div className="row">
                <div className="col-12 col-lg-6 mt-4">
                  <TextInput
                    label="Số điện thoại"
                    placeHolder="09XXXXXXXX"
                    type="phone"
                    name="phone"
                    typeInput="text"
                    defaultValue={userInfo.phone}
                    error={errorMessage.phone}
                  />
                </div>

                <div className="col-12 col-lg-6 mt-4">
                  <TextInput
                    label="CMND/CCCD"
                    placeHolder="Điền CMND/CCCD của bạn"
                    type="text"
                    name="identityCard"
                    defaultValue={userInfo.ICN}
                    typeInput="text"
                  />
                </div>

                <div className="col-12 col-lg-6 mt-4">
                  <TextInput
                    label="Địa chỉ giao hàng COD"
                    placeHolder="Địa chỉ COD"
                    type="text"
                    name="address"
                    defaultValue={userInfo.address}
                    typeInput="text"
                  />
                </div>

                <div className="col-12 col-lg-6 mt-4">
                  {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      className={classes.datePicker}
                      id="date-picker-dialog"
                      label="Ngày sinh"
                      format="dd/MM/yyyy"
                      value={birthDay}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                      name="birthDay"
                    />
                  </MuiPickersUtilsProvider> */}
                </div>

                <div className="col-12 col-lg-6 mt-4">
                  <LPEButton
                    action={handleDataSubmit}
                    name="Lưu lại"
                    loading={isLoading}
                    fullWidth
                    sizeButton="large"
                    classStyled={classes.btnSave}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default AccountInfo;
