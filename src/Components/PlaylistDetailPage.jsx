import { Box } from "@mui/material";
import { useVideo } from "../Context/VideoContext";

export const PlayListDetailPage = ({ playlistName }) => {
  const { videosState } = useVideo();
  const filterPlaylist = videosState?.allPlaylists?.filter(
    (playlist) => playlist.name == playlistName
  );
  console.log(
    "🚀 ~ file: PlaylistDetailPage.jsx:7 ~ PlayListDetailPage ~ filterPlaylist:",
    filterPlaylist
  );

  return <Box>{}</Box>;
};
