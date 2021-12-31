import React, { useState } from "react";

import {
  TableBody,
  TableRow,
  TableCell,
  Button,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { convertFullDate, unixToTime } from "core/utils/dateUtil";
import useTable from "./useTable";

const headCells = [
  { id: "date", label: "Ngày tạo", disableSorting: false },
  { id: "name", label: "Tên", disableSorting: false },
  { id: "email", label: "Email", disableSorting: false },
  { id: "phone", label: "Số điện thoại", disableSorting: false },
];

const useStyles = makeStyles(() => ({
  buttonCSV: {
    color: "#fff",
    backgroundColor: "#31be7d",
    "&:hover": { backgroundColor: "#71c49e" },
  },
}));

const headers = [
  { label: "date", key: "date" },
  { label: "name", key: "name" },
  { label: "Email", key: "email" },
  { label: "phone", key: "phone" },
];

function DataTable() {
  const classes = useStyles();
  const [dataTable, setDataTable] = useState([]);

  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(dataTable, headCells, filterFn);

  const handleSearch = (e, type) => {
    let target = e.target;

    setFilterFn({
      fn: (items) => {
        if (target.value === "") return items;
        else {
          switch (type) {
            case "onepayId":
              return items.filter((x) =>
                x.onepayId.toLowerCase().includes(target.value)
              );

            default:
              break;
          }
        }
      },
    });
  };

  return (
    <div className="container-fluid">
      <h2 className="my-4 text-center">Thông tin người dùng</h2>

      {/* <div className="row mb-5">
        <div className="left-box col-12 col-md-8">
          <TextField
            label="Tìm theo onepayID"
            margin="normal"
            InputProps={{ type: "search" }}
            onChange={(e) => {
              handleSearch(e, "onepayId");
            }}
            className="w-50 "
          />

          <CSVLink
            data={dataTable}
            headers={headers}
            filename={`livestream_${Date.now()}.csv`}
            className="mt-4"
          >
            <Button
              variant="contained"
              color="primary"
              size="normal"
              className={classes.buttonCSV}
              startIcon={<i className="fal fa-file-csv"></i>}
            >
              Tải CSV
            </Button>
          </CSVLink>

          <p className="mt-3">
            Lưu ý: Trước khi tải File Excel, vui lòng F5 tải lại trang để dữ
            liệu được cập nhật mới nhất.
          </p>
        </div>
        <div className="col-12 col-md-4 mt-3">
          <p>
            Công thức đổi sang ngày cột Date: (((
            <span className="text-danger">ADDRESS_COLUMN_ID</span>
            /1000/60)/60)/24)+DATE(1970,1,1)+TIME(7,0,0)
          </p>
          <p>thay biến ADDRESS_COLUMN_ID thành ô cần đổi sang ngày</p>
        </div>
      </div> */}

      <TblContainer>
        <TblHead />

        <TableBody>
          {recordsAfterPagingAndSorting().map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                {convertFullDate(unixToTime(item.date), "DD/MM/YYYY hh:mm a")}
              </TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TblContainer>

      <TblPagination />
    </div>
  );
}

export default DataTable;
