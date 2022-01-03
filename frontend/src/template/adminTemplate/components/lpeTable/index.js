import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";

import LPETableHead from "./components/tableHead";
import LPETableBody from "./components/tableBody";
import TableToolbar from "./components/tableToolbar";
import TableFilter from "./components/tableFilter";
import LPEPopover from "app/components/popover";
import LPEDrawer from "app/components/drawer";

export default function LPETable({
  tableName,
  tableHead,
  tableData,
  view,
  sideComponent,
  isOpenDrawer,
  onToggleDrawer,
  onHandleEdit,
}) {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");
  const [selected, setSelected] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const anchor = { vertical: "bottom", horizontal: "right" };
  const transfrom = { vertical: "top", horizontal: "right" };
  const refFilter = useRef();

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleToggleDrawer = () => {
    onToggleDrawer && onToggleDrawer();
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = tableData.map((n) => n._id);

      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.findIndex((item) => item === id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleDelete = () => {
    console.log("deleted!!!", selected);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableToolbar
          numSelected={selected.length}
          tableName={tableName}
          onHandleDelete={handleDelete}
          onHandleToggleFillterPanel={(e) => {
            refFilter.current.handleClick(e);
          }}
        />

        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"medium"}
          >
            <LPETableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={tableData.length}
              tableHead={tableHead}
            />

            <LPETableBody
              selected={selected}
              order={order}
              orderBy={orderBy}
              rowsPerPage={rowsPerPage}
              page={page}
              dataTable={tableData}
              onHandleClick={handleClick}
              view={view}
              onHandleToggleDrawer={handleToggleDrawer}
            />
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={tableData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Số dòng"
        />

        {sideComponent && (
          <LPEDrawer
            anchor="left"
            isOpen={isOpenDrawer}
            onToggle={handleToggleDrawer}
            disableScrollLock
          >
            {sideComponent}
          </LPEDrawer>
        )}

        <LPEPopover
          ref={refFilter}
          anchor={anchor}
          transfrom={transfrom}
          content={<TableFilter />}
        />
      </Paper>
    </Box>
  );
}
