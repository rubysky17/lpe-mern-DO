import React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import { TableRow } from "@mui/material";
import TableList from "./tableList";

function LPETableBody({
  selected,
  order,
  orderBy,
  rowsPerPage,
  view,
  page,
  dataTable,
  onHandleClick,
  onHandleEdit,
  onOpenDrawer,
}) {
  const [selectedItem, setSelectedItem] = React.useState();

  React.useEffect(() => {
    selected && setSelectedItem(selected);
  }, [selected]);

  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  const isSelected = (id) => {
    const itemIndex = selectedItem?.findIndex((item) => item === id);

    return itemIndex !== -1;
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - dataTable.length) : 0;
  return (
    <TableBody>
      {/* if you don't need to support IE11, you can replace the `stableSort` call with:
       rows.slice().sort(getComparator(order, orderBy)) */}
      {stableSort(dataTable, getComparator(order, orderBy))
        ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        ?.map((item, index) => {
          const isItemSelected = isSelected(item._id);
          const labelId = `table-checkbox-${index}`;

          return (
            <TableRow
              hover
              role="checkbox"
              aria-checked={isItemSelected}
              tabIndex={-1}
              key={item.name}
              selected={isItemSelected}
            >
              <TableList
                view={view}
                isItemSelected={isItemSelected}
                onHandleClick={onHandleClick}
                onHandleEdit={onHandleEdit}
                onOpenDrawer={onOpenDrawer}
                dataItem={item}
                labelId={labelId}
              />
            </TableRow>
          );
        })}

      {emptyRows > 0 && (
        <TableRow
          style={{
            height: 53 * emptyRows,
          }}
        >
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </TableBody>
  );
}

export default LPETableBody;
