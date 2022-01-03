import React from "react";
import TableCell from "@mui/material/TableCell";
import Checkbox from "@mui/material/Checkbox";
import LPEAvatar from "app/components/avatar";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";

import { convertFullDate, unixToTime } from "core/utils/dateUtil";
import { Button } from "@mui/material";

function TableList({
  view,
  isItemSelected,
  onHandleClick,
  dataItem,
  labelId,
  onHandleToggleDrawer,
}) {
  const duedates = (time) => {
    return convertFullDate(unixToTime(time), "DD-MM-yyyy");
  };

  const handleChoiceItem = (e, id) => {
    onHandleClick && onHandleClick(e, id);
  };
  const handleToggleDrawer = () => {
    onHandleToggleDrawer && onHandleToggleDrawer();
  };

  return (
    <>
      {view === "user" && (
        <>
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              checked={isItemSelected}
              inputProps={{
                "aria-labelledby": labelId,
              }}
              onClick={(event) => handleChoiceItem(event, dataItem._id)}
            />
          </TableCell>
          <TableCell component="th" id={labelId} scope="row" padding="none">
            {dataItem._id}
          </TableCell>
          <TableCell component="th" id={labelId} scope="row" padding="none">
            <LPEAvatar avatar={dataItem.avatar} name={dataItem.name} />
          </TableCell>
          <TableCell align="left">{dataItem.email}</TableCell>
          <TableCell align="left">{dataItem.phone}</TableCell>
          <TableCell align="left">{dataItem.gender}</TableCell>
          <TableCell align="left">{dataItem.ICN || "không"}</TableCell>
          <TableCell align="left">{dataItem.address || "không"}</TableCell>
          <TableCell align="left">
            {duedates(dataItem.birthDay) || "không"}
          </TableCell>
          <TableCell align="left">{dataItem.role || "không"}</TableCell>

          <TableCell align="left">
            <Button
              variant="outlined"
              startIcon={<ModeEditOutlinedIcon />}
              onClick={handleToggleDrawer}
            >
              Chỉnh sửa
            </Button>
          </TableCell>
        </>
      )}
    </>
  );
}

export default TableList;
