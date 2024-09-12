import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";


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

const BasicModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
        <IconButton
          onClick={() => handleOpen()}
          aria-label="delete"
          color="error"
        >
          <DeleteIcon />
        </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure want to delete?
          </Typography>
          <Button
            sx={{ mt: 4 }}
            color="error"
            variant="contained"
            onClick={handleSumbit}
          >
            Ok
          </Button>
          <Button sx={{ mt: 4, ml: 2 }} variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
