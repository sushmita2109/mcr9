import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Button, IconButton, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useVideo } from "../Context/VideoContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const CreateNotes = ({ openNotes, handleCloseNotes }) => {
  const [notes, setNotes] = useState("");
  const { createNotes } = useVideo();

  return (
    <Box>
      <Modal
        open={openNotes}
        onClose={handleCloseNotes}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create New Notes
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <TextField
              id="outlined-basic"
              label="Add New Notes"
              variant="outlined"
              onChange={(e) => setNotes(e.target.value)}
            />
          </Box>
          <Button onClick={() => createNotes(notes, handleCloseNotes)}>
            Create New Notes
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};
