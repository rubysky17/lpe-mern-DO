import React, { useState } from "react";
import useTable from "./useTable";
import RenderTableItem from "./components/TableItem";
import { TableBody } from "@mui/material";

function DataTable({ header, dataTable, type }) {
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(dataTable, header, filterFn);

  // const handleSearch = (e, type) => {
  //   let target = e.target;

  //   setFilterFn({
  //     fn: (items) => {
  //       if (target.value === "") return items;
  //       else {
  //         switch (type) {
  //           case "onepayId":
  //             return items.filter((x) =>
  //               x.onepayId.toLowerCase().includes(target.value)
  //             );

  //           default:
  //             break;
  //         }
  //       }
  //     },
  //   });
  // };

  return (
    <div className="container-fluid">
      <h2 className="my-4 text-center">Thông tin người dùng</h2>

      <TblContainer>
        <TblHead />

        <TableBody>
          <RenderTableItem
            type="user-manager"
            item={recordsAfterPagingAndSorting()}
          />
        </TableBody>
      </TblContainer>

      <TblPagination />
    </div>
  );
}

export default DataTable;
