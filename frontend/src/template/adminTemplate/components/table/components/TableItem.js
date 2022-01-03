import React from "react";
import { TableCell, TableRow } from "@material-ui/core";
import { convertFullDate, unixToTime } from "core/utils/dateUtil";
import LPEAvatar from "app/components/avatar";

function RenderTableItem({ type, item }) {
  return (
    <>
      {type === "user-manager" && (
        <>
          {item?.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <LPEAvatar avatar={item.avatar} name={item.name} />
              </TableCell>
              <TableCell>{item.email || "trống"}</TableCell>
              <TableCell>{item.phone || "trống"}</TableCell>
              <TableCell>{item.gender || "trống"}</TableCell>
              <TableCell>{item.ICN || "trống"}</TableCell>
              <TableCell>{item.address || "trống"}</TableCell>
              <TableCell>
                {convertFullDate(unixToTime(item.birthDay), "DD/MM/YYYY") ||
                  "trống"}
              </TableCell>
              <TableCell>{item.role || "trống"}</TableCell>
            </TableRow>
          ))}
        </>
      )}
    </>
  );
}

export default RenderTableItem;
