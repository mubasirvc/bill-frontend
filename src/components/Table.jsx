// import * as React from "react";
// import { useQuery } from "react-query";
// import { DataGrid } from "@mui/x-data-grid";
// import Paper from "@mui/material/Paper";
// import Alert from "./Alert";
// import service from "../services/apiService";

// const fetchItems = async () => {
//   const res = await service.get("/item");

//   return res.data.items.map((item, index) => ({
//     no: index + 1,
//     name: item.name,
//     category: item.category,
//     qty: "",
//     notes: "",
//     id:item._id
//   }));
// };

// const paginationModel = { page: 0, pageSize: 10 };

// const Table = ({setSelectedRows, selectedRow}) => {

//   // const handleProcessRowUpdate = React.useCallback((newRow) => {
//   //   console.log("Row updated:", newRow);

//   //   setSelectedRows((prevRows) => {
//   //     console.log(prevRows, "Previous rows");

//   //     // Map over the previous rows to update only the row that matches newRow.no
//   //     return prevRows.map((item) => {
//   //       console.log(item, "Row item");

//   //       // If the 'no' matches, update the row with newRow, otherwise keep the same row
//   //       return item.no === newRow.no ? newRow : item;
//   //     });
//   //   });

//   //   return newRow;
//   // }, []);

//   const handleProcessRowUpdate = React.useCallback(
//     (newRow) => {
//       console.log("Row updated:", newRow);

//       // Merge updated row with previous values
//       setItems((prevItems) =>
//         prevItems.map((item) =>
//           item.id === newRow.id
//             ? { ...item, ...newRow } // Merge new row with the existing row
//             : item
//         )
//       );

//       return { ...newRow }; // Return the updated row
//     },
//     []
//   );

//   const {
//     data: items = [],
//     isLoading,
//     isError,
//     refetch
//   } = useQuery("items", fetchItems);

//   const columns = [
//     {
//       field: "no",
//       headerName: "No",
//       width: 70,
//       headerAlign: "center",
//       align: "center",
//     },
//     {
//       field: "name",
//       headerName: "Name",
//       width: 300,
//       headerAlign: "center",
//       align: "center",
//     },
//     {
//       field: "category",
//       headerName: "Category",
//       width: 230,
//       headerAlign: "center",
//       align: "center",
//     },
//     {
//       field: "qty",
//       headerName: "Qty",
//       type: "number",
//       width: 90,
//       editable: true,
//       headerAlign: "center",
//       align: "center",
//     },
//     {
//       field: "notes",
//       headerName: "Notes",
//       description: "This column has a value getter and is not sortable.",
//       sortable: false,
//       width: 360,
//       editable: true,
//       headerAlign: "center",
//       align: "center",
//     },
//     {
//       field: "delete",
//       headerName: "Action",
//       width: 100,
//       headerAlign: "center",
//       align: "center",
//       renderCell: (params) => <Alert id={params.id} refetch={refetch} />,
//     },
//   ];

//   const handleSelectionChange = (selectionModel) => {
//     const selectedData = selectionModel.map((id) => items.find((item) => item.id === id));
//     console.log(selectedData);

//     setSelectedRows(selectedData);
//   };

//   if (isLoading) return <div>Loading...</div>;
//   if (isError) return <div>Error fetching data</div>;

//   return (
//     <Paper sx={{ height: "auto", width: "100%", marginTop: 10 }}>
//       <DataGrid
//         rows={items}
//         columns={columns}
//         initialState={{ pagination: { paginationModel } }}
//         pageSizeOptions={[10, 20]}
//         checkboxSelection
//         sx={{ border: 0 }}
//         processRowUpdate={handleProcessRowUpdate}
//         onRowSelectionModelChange={handleSelectionChange}
//       />
//     </Paper>
//   );
// };

// export default Table;

import * as React from "react";
import { useQuery } from "react-query";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import Alert from "./Alert";
import service from "../services/apiService";
import Modal from "./Modal";
import GenerateBill from "./GenerateBill";
import { Box } from "@mui/material";

// Fetch items from API and prepare the row data
const fetchItems = async () => {
  const res = await service.get("/item");
  return res.data.items.map((item, index) => ({
    no: index + 1,
    name: item.name,
    category: item.category,
    qty: "",
    notes: "",
    id: item._id,
  }));
};

const paginationModel = { page: 0, pageSize: 10 };

const Table = ({ setSelectedRows, details, datas }) => {
  // State to store rows (items)
  const [items, setItems] = React.useState([]);

  // Query to fetch items with controlled refetching
  const { data, isLoading, isError, refetch } = useQuery("items", fetchItems, {
    enabled: false, // Disable automatic refetching
    onSuccess: (data) => setItems(data), // Set items on success
  });

  // Fetch data on initial load
  React.useEffect(() => {
    refetch(); // Fetch data when component mounts
  }, [refetch]);

  // Handle inline row edits
  const handleProcessRowUpdate = React.useCallback(
    (newRow) => {
      console.log("Row updated:", newRow);

      // Merge updated row with previous values
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === newRow.id
            ? { ...item, ...newRow } // Merge new row with the existing row
            : item
        )
      );

      return { ...newRow }; // Return the updated row
    },
    [setItems]
  );

  // Handle row selection changes (checkbox selection)
  const handleSelectionChange = (selectionModel) => {
    const selectedData = selectionModel.map((id) =>
      items.find((item) => item.id === id)
    );
    setSelectedRows(selectedData);
  };

  // Columns definition
  const columns = [
    {
      field: "no",
      headerName: "No",
      width: 70,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "name",
      headerName: "Name",
      width: 300,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "category",
      headerName: "Category",
      width: 230,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "qty",
      headerName: "Qty",
      type: "number",
      width: 90,
      editable: true,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "notes",
      headerName: "Notes",
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
      renderCell: (params) => <Alert id={params.id} refetch={refetch} />,
    },
  ];

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "end", gap: 3 }}>
        <GenerateBill datas={datas} details={details} />
        <Modal refetch={refetch} name="Add Item" />
      </Box>

      <Paper sx={{ height: "auto", width: "100%", marginTop: 10 }}>
        <DataGrid
          rows={items}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[10, 20]}
          checkboxSelection
          sx={{ border: 0 }}
          processRowUpdate={handleProcessRowUpdate}
          onRowSelectionModelChange={handleSelectionChange}
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Paper>
    </>
  );
};

export default Table;
