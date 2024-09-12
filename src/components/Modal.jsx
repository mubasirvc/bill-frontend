import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import Dropdown from "./Dropdown";
import AddCircleIcon from '@mui/icons-material/AddCircle';


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

const handleSumbit = () => {};

const BasicModal = ({ name }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Box sx={{display: 'flex', justifyContent: 'end'}}>
      <Button sx={{ mt: 4 }} variant="contained" onClick={handleOpen} endIcon={<AddCircleIcon />}>
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
              <TextField id="name" label="Name" />
              {name === "Add Item" && <Dropdown />}
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
