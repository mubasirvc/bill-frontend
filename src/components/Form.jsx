import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MyDatePicker from "./MyDatePicker";

const Form = () => {
  return (
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 1, width: "35ch" }, mt: 2, py: 5, pl: 4, mb: 0 , borderRadius: 2, backgroundColor: '#F1F8F6'}}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField id="Technician Name" label="Technician Name" />
        <TextField id="Client Name" label="Client Name" />
        <TextField id="Place" label="Place" />
        <MyDatePicker />
      </div>
    </Box>
  );
};

export default Form;
