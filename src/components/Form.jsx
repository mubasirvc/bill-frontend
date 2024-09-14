import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const Form = ({ formData, setFormData, setSelectedDate }) => {
  const today = dayjs();

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "35ch" },
        mt: 2,
        py: 5,
        mb: 0,
        borderRadius: 2,
        backgroundColor: "#F1F8F6",
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          value={formData.technicianName}
          onChange={(e) =>
            setFormData({ ...formData, technicianName: e.target.value })
          }
          id="Technician Name"
          label="Technician Name"
        />
        <TextField
          value={formData.mobile}
          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
          id="Technician Mobile"
          label="Technician Mobile"
        />
        <TextField
          value={formData.clientName}
          onChange={(e) =>
            setFormData({ ...formData, clientName: e.target.value })
          }
          id="Client Name"
          label="Client Name"
        />
        <TextField
          value={formData.place}
          onChange={(e) => setFormData({ ...formData, place: e.target.value })}
          id="Place"
          label="Place"
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            onChange={(d) => setSelectedDate(d.format("MM-DD-YYYY"))}
            minDate={today}
            label="Date"
          />
        </LocalizationProvider>
      </div>
    </Box>
  );
};

export default Form;
