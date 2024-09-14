import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import Dropdown from "./Dropdown";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { toast } from "sonner";
import service from "../services/apiService";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "12px",
  p: 4,
};

const BasicModal = ({ name, refetch }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [cat, setCat] = React.useState("");
  const [title, setTitle] = React.useState("");

  const handleChange = (val) => {
    setCat(val);
  };

  const handleSumbit = async () => {
    if (name === "Add Item") {
      if (!cat.trim() || !title.trim()) {
        toast.error("Invalid inputs!");
        return;
      }
      try {
        const res = await service.post("/item", { name: title, category: cat });
        if (res.status == 201) toast.success("Item created successfuly!");
        handleClose();
        refetch()
      } catch (error) {}

    } else {

      if (!title.trim()) {
        toast.error("Invalid inputs!");
        return;
      }
      try {
        const res = await service.post("/category", { name: title });
        if (res.status == 201) toast.success("Category created successfuly!");
        handleClose();
        refetch()
      } catch (error) {}
    }
  };

  return (
    <div>
      <Box>
        <Button
          sx={{ mt: 4 }}
          variant="contained"
          onClick={handleOpen}
          endIcon={<AddCircleIcon />}
        >
          {name}
        </Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { mr: 2, mt: 3, width: "35ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div style={{ display: "flex" }}>
              <TextField
                id="name"
                label="Name"
                onChange={(e) => setTitle(e.target.value)}
              />
              {name === "Add Item" && <Dropdown handleVal={handleChange} />}
            </div>
          </Box>
          <Button sx={{ mt: 4 }} variant="contained" onClick={handleSumbit}>
            Save
          </Button>
          <Button
            sx={{ mt: 4, ml: 2 }}
            variant="outlined"
            onClick={handleClose}
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
