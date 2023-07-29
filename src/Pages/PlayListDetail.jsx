import Grid from "@mui/material/Grid";
import { SideBar } from "../Components/SideBar";
import { useParams } from "react-router-dom";
import { PlayListDetailPage } from "../Components/PlaylistDetailPage";

export const PlayListDetail = () => {
  const { playlistName } = useParams();
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <SideBar />
      </Grid>

      <Grid item xs={10}>
        <PlayListDetailPage playlistName={playlistName} />
      </Grid>
    </Grid>
  );
};
