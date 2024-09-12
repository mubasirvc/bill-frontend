import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import Modal from '../components/Modal'
import Alert from '../components/Alert'

const initialRows = [
  {
    id: 1,
    Number: 1,
    "Item name": "Item 1",
    Category: "Category 1",
  },
  {
    id: 2,
    Number: 2,
    "Item name": "Item 2",
    Category: "Category 2",
  },
  {
    id: 3,
    Number: 3,
    "Item name": "Item 3",
    Category: "Category 3",
  },
  {
    id: 4,
    Number: 4,
    "Item name": "Item 4",
  },
  {
    id: 5,
    Number: 5,
    "Item name": "Item 5",
    Category: "Category 5",
  },
];

const Category = () => {
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

  const columns = [
    {
      field: "Number",
      headerName: "No",
      width: 70,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "Category",
      headerName: "Category name",
      width: 350,
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
      ),
    },
  ];

  const paginationModel = { page: 0, pageSize: 10 };

  return (
    <div>
      <Modal name={'Add Category'} />
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
    </div>
  );
};

export default Category;
