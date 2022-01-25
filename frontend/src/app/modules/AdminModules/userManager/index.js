import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { TextField } from "@mui/material";

import LPELoading from "app/components/loading";
import LPETable from "template/adminTemplate/components/lpeTable";
import EditUser from "./components/editUser/index.js.js";
import FilterUser from "./components/filerUser/index.js";
import LPEPopover from "app/components/popover/index.js";
import LPEDrawer from "app/components/drawer/index.js";

import { API_ENDPOINT, USERS_SEARCH } from "app/const/Api.js";
import { KEY_TOKEN } from "app/const/App.js";

import "./styles/styles.scss";

const headCells = [
  { id: "id", label: "ID", disableSorting: false, numeric: false },
  { id: "name", label: "Tên", disableSorting: false, numeric: false },
  { id: "email", label: "Email", disableSorting: false, numeric: false },
  { id: "phone", label: "Số điện thoại", disableSorting: true, numeric: false },
  { id: "role", label: "Quyền", disableSorting: true, numeric: false },
  { id: "action", label: "Thao tác", disableSorting: true, numeric: false },
];

const anchor = { vertical: "bottom", horizontal: "right" };
const transfrom = { vertical: "top", horizontal: "right" };

function UserManager() {
  const { userList } = useSelector((state) => state.user);
  const { userInfo } = useSelector((state) => state.auth);
  const refFilter = useRef(null);

  const [isLoading, setIsLoading] = useState(true);
  const [dataTable, setDataTable] = useState([]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [userEdit, setUserEdit] = useState({});

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
    const dataTable = userList.filter((y) => y._id !== userInfo._id);

    userList && setDataTable(dataTable);
  }, [userInfo._id, userList]);

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

  const handleOpenDrawer = (itemEditing) => {
    setUserEdit(itemEditing);
    setOpenDrawer(true);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  const handleFilter = (filterData) => {
    const token = localStorage.getItem(KEY_TOKEN);
    console.log("filterData", filterData);

    try {
      axios({
        url: API_ENDPOINT + USERS_SEARCH,
        method: "get",
        data: filterData,
        headers: {
          token: `${token}`,
        },
      })
        .then((res) => {
          console.log("data", res.data);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err.response.data);
    }
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
            onOpenPopover={(e) => {
              refFilter.current.handleClick(e);
            }}
            onOpenDrawer={handleOpenDrawer}
          />
        </div>
      )}

      {/* Popover filter here */}
      <LPEPopover
        ref={refFilter}
        anchor={anchor}
        transfrom={transfrom}
        content={
          <FilterUser
            onClosePopOver={(e) => {
              refFilter.current.handleCloseClick(e);
            }}
            onHandleFilter={handleFilter}
          />
        }
      />

      {/* Drawer edit screen here */}

      <LPEDrawer
        anchor="left"
        isOpen={openDrawer}
        onToggle={handleCloseDrawer}
        disableScrollLock
      >
        <EditUser onToggleDrawer={toggleDrawer} userEdit={userEdit} />
      </LPEDrawer>
    </>
  );
}

export default UserManager;
