import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useQuery } from "react-query";
import service from "../services/apiService";

const fetchCategory = async () => {
  const res = await service.get("/category");
  return res.data.categories;
};

const BasicDropdown = ({ handleVal }) => {
  const[cat, setCat] = React.useState('')
  const {
    data: categories = [],
    isLoading,
    isError,
  } = useQuery("category", fetchCategory);

  const handleChange = (val) => {
    setCat(val)
    handleVal(val)
  }

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <Box sx={{ mr: 2, mt: 3, width: "35ch" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={cat}
          label="Category"
          onChange={(e) => handleChange(e.target.value)}
        >
          {categories?.map((cat) => (
            <MenuItem value={cat._id}>{cat.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default BasicDropdown;
