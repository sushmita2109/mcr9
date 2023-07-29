import {
  Card,
  Typography,
  CardMedia,
  CardContent,
  Box,
  IconButton,
} from "@mui/material";
import { useVideo } from "../Context/VideoContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { CreatePlaylistModal } from "./CreatePlaylistModal";
import { CreateNotes } from "./CreateNotes";

export const Singlevideo = ({ videoId }) => {
  const { videosState, addToWatchLater, removeNotes } = useVideo();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openNotes, setOpenNotes] = useState(false);
  const handleOpenNotes = () => setOpenNotes(true);
  const handleCloseNotes = () => setOpenNotes(false);
  const filterData = videosState?.allVideos?.find(
    (video) => video._id == videoId
  );

  const notesData = localStorage.getItem("allNotes");
  const parsedAllNotes = JSON.parse(notesData);

  return (
    <Box>
      <Card>
        <CardMedia
          component="iframe"
          src={filterData.src}
          allow="autoPlay"
          height="450px"
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography gutterBottom variant="body1" component="div">
              <AccountCircleIcon fontSize="large"></AccountCircleIcon>
              {filterData.title}
            </Typography>
          </Box>
          <Box>
            <IconButton onClick={() => addToWatchLater(filterData)}>
              <WatchLaterIcon />
            </IconButton>
            <IconButton onClick={() => handleOpen()}>
              <PlaylistAddIcon />
            </IconButton>
            <IconButton onClick={() => handleOpenNotes()}>
              <EditNoteIcon />
            </IconButton>
          </Box>
        </CardContent>
        <CreateNotes
          openNotes={openNotes}
          handleCloseNotes={handleCloseNotes}
        />
        <CreatePlaylistModal open={open} handleClose={handleClose} />
      </Card>
      <Typography variant="h6">Notes</Typography>
      {parsedAllNotes?.map((note, idx) => (
        <Box key={idx}>
          <Typography variant="h6">
            {note.name} {note.notes}
            <IconButton onClick={() => removeNotes(note)}>
              <CloseIcon />
            </IconButton>
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
