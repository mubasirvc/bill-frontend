import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import Modal from "../components/Modal";
import { useQuery } from "react-query";
import service from "../services/apiService";
import { Box } from "@mui/material";

const fetchCategory = async () => {
  const res = await service.get("/category");

  return res.data.categories.map((item, index) => ({
    id: index + 1,
    name: item.name,
  }));
};

const columns = [
  {
    field: "id",
    headerName: "No",
    width: 70,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "name",
    headerName: "Category name",
    width: 350,
    headerAlign: "center",
    align: "center",
  },
];

const Category = () => {
  const handleProcessRowUpdate = React.useCallback((newRow) => {
    console.log("Row updated:", newRow);
    return newRow;
  }, []);

  const paginationModel = { page: 0, pageSize: 10 };
  const {
    data: categories = [],
    isLoading,
    isError,
    refetch
  } = useQuery("category", fetchCategory);

  console.log(categories);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Modal refetch={refetch} name={"Add Category"} />
      </Box>
      <Paper sx={{ height: "auto", width: "100%", marginTop: 10 }}>
        <DataGrid
          rows={categories}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[10, 20]}
          sx={{ border: 0 }}
          processRowUpdate={handleProcessRowUpdate}
        />
      </Paper>
    </div>
  );
};

export default Category;
