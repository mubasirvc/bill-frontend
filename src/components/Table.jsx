import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Alert from './Alert'

const columns = [
  { field: "Number", headerName: "No", width: 70, headerAlign: "center", align: "center",},
  { field: "Item name", headerName: "Item name", width: 300, headerAlign: "center", align: "center", },
  { field: "Category", headerName: "Category", width: 230, headerAlign: "center", align: "center", },
  {
    field: "Qty",
    headerName: "Qty",
    type: "number",
    width: 90,
    editable: true,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Notes",
    headerName: "Notes",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 360,
    editable: true,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "delete",
    headerName: "Action",
    width: 100,
    headerAlign: "center",
    align: "center",
    renderCell: (params) => (
      <Alert />
      // <IconButton
      //   onClick={() => handleDelete(params.row.id)}
      //   aria-label="delete"
      //   color="error"
      // >
      //   <DeleteIcon />
      // </IconButton>
    ),
  },
];

const initialRows = [
  {
    id: 1,
    Number: 1,
    "Item name": "Item 1",
    Category: "Category 1",
    Qty: 10,
    Notes: "Note 1",
  },
  {
    id: 2,
    Number: 2,
    "Item name": "Item 2",
    Category: "Category 2",
    Qty: 20,
    Notes: "Note 2",
  },
  {
    id: 3,
    Number: 3,
    "Item name": "Item 3",
    Category: "Category 3",
    Qty: 30,
    Notes: "Note 3",
  },
  {
    id: 4,
    Number: 4,
    "Item name": "Item 4",
    Category: "Category 4",
    Qty: 40,
    Notes: "Note 4",
  },
  {
    id: 5,
    Number: 5,
    "Item name": "Item 5",
    Category: "Category 5",
    Qty: 50,
    Notes: "Note 5",
  },
];

const paginationModel = { page: 0, pageSize: 10 };

const Table = () => {
  const [rows, setRows] = React.useState(initialRows);

  const handleDelete = (id) => {
    // Remove the row with the matching id
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };

  const handleProcessRowUpdate = React.useCallback((newRow) => {
    // Handle row update here, e.g., update state or call API
    console.log("Row updated:", newRow);
    return newRow;
  }, []);

  return (
    <Paper sx={{ height: "auto", width: "100%", marginTop: 10 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[10, 20]}
        checkboxSelection
        sx={{ border: 0 }}
        processRowUpdate={handleProcessRowUpdate}
      />
    </Paper>
  );
};

export default Table;
