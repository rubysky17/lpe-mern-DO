import React, { useEffect, useState } from "react";
import LPELoading from "app/components/loading";
import { useSelector } from "react-redux";
import { TextField } from "@mui/material";

import LPETable from "template/adminTemplate/components/lpeTable";
import EditUser from "./components/editUser";

import "./styles/styles.scss";

const headCells = [
  { id: "id", label: "ID", disableSorting: false, numeric: false },
  { id: "name", label: "Tên", disableSorting: false, numeric: false },
  { id: "email", label: "Email", disableSorting: false, numeric: false },
  { id: "phone", label: "Số điện thoại", disableSorting: true, numeric: false },
  { id: "gender", label: "Giới tính", disableSorting: true, numeric: false },
  { id: "ICN", label: "CMND/CCCD", disableSorting: true, numeric: false },
  { id: "address", label: "Địa chỉ", disableSorting: true, numeric: false },
  { id: "birthDay", label: "Ngày sinh", disableSorting: false, numeric: false },
  { id: "role", label: "Quyền", disableSorting: true, numeric: false },
  { id: "action", label: "Thao tác", disableSorting: true, numeric: false },
];
function UserManager() {
  const { userList } = useSelector((state) => state.user);

  const [isLoading, setIsLoading] = useState(true);
  const [dataTable, setDataTable] = useState([]);
  const [openDrawer, setOpenDrawer] = useState(false);

  // Loading Data
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    userList && setDataTable(userList);
  }, [userList]);

  const handleSearch = (e) => {
    let target = e.target;

    if (target.value === "") return setDataTable(userList);

    const dataSearchEmail = userList.filter((x) =>
      x.email.toLowerCase().includes(target.value.toLowerCase())
    );

    const dataSearchName = userList.filter((x) =>
      x.name.toLowerCase().includes(target.value.toLowerCase())
    );

    if (dataSearchEmail.length) {
      return setDataTable(dataSearchEmail);
    }

    if (dataSearchName.length) {
      return setDataTable(dataSearchName);
    }
  };

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <>
      {isLoading ? (
        <LPELoading />
      ) : (
        <div className="container-fluid">
          <TextField
            label="Tìm theo tên/email"
            margin="normal"
            InputProps={{ type: "search" }}
            onChange={(e) => {
              handleSearch(e);
            }}
            className="w-50 "
          />

          <LPETable
            tableName={"Quản lý user"}
            tableHead={headCells}
            tableData={dataTable}
            view="user"
            sideComponent={<EditUser onToggleDrawer={toggleDrawer} />}
            isOpenDrawer={openDrawer}
            onToggleDrawer={toggleDrawer}
          />
        </div>
      )}
    </>
  );
}

export default UserManager;
