import {
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useVideo } from "../Context/VideoContext";
import { useEffect, useState } from "react";
import { CreatePlaylistModal } from "./CreatePlaylistModal";

export const PlaylistVideo = () => {
  const { videosState, videoDispatch, deletePlaylist } = useVideo();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    videoDispatch({
      type: "SAVE_PLAYLIST_TO_LOCAL_STORAGE",
      payload: videosState.allPlaylists,
    });
  }, [videosState?.allPlaylists, videoDispatch]);

  const playlistData = localStorage.getItem("allPlaylist");
  const parsedAllPlaylist = JSON.parse(playlistData);

  return (
    <Box>
      <Box>
        <Typography variant="h3">Playlist</Typography>
      </Box>
      <IconButton onClick={() => handleOpen()}>
        <AddIcon />
      </IconButton>
      {videosState?.allPlaylists ? (
        parsedAllPlaylist?.map((playlist, idx) => (
          <Card key={idx} sx={{ maxWidth: "350px" }}>
            <CardMedia sx={{}}>
              <img
                src={playlist.image}
                alt="cardimage"
                style={{ height: "200px", width: "200px" }}
              />
            </CardMedia>
            <Typography variant="h5"> {playlist.name}</Typography>
            <Typography variant="h6">{playlist.desc}</Typography>
            <CardActions>
              <Button onClick={() => deletePlaylist(playlist)}>
                Delete Playlist
              </Button>
            </CardActions>
          </Card>
        ))
      ) : (
        <Typography>No Playlist Created</Typography>
      )}

      <CreatePlaylistModal open={open} handleClose={handleClose} />
    </Box>
  );
};
