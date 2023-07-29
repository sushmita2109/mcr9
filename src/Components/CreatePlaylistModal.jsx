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

export const CreatePlaylistModal = ({ open, handleClose }) => {
  const { createPlaylist, deletePlaylist } = useVideo();
  const [playlistName, setPlaylistName] = useState("");
  const [playlistDesc, setPlaylistDesc] = useState("");

  const playlistData = localStorage.getItem("allPlaylist");
  const parsedAllPlaylist = JSON.parse(playlistData);

  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create New Playlist
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <TextField
              id="outlined-basic"
              label="Add Playlist Name"
              variant="outlined"
              onChange={(e) => setPlaylistName(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Add Playlist Description"
              variant="outlined"
              onChange={(e) => setPlaylistDesc(e.target.value)}
            />
          </Box>
          <Button
            onClick={() =>
              createPlaylist(playlistName, playlistDesc, handleClose)
            }
          >
            Create New Playlist
          </Button>
          {parsedAllPlaylist?.map((playlist, idx) => (
            <Box key={idx}>
              <Typography>
                {playlist.name}
                <IconButton onClick={() => deletePlaylist(playlist)}>
                  <CloseIcon />
                </IconButton>
              </Typography>
            </Box>
          ))}
        </Box>
      </Modal>
    </Box>
  );
};
