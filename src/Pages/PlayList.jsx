import Grid from "@mui/material/Grid";
import { SideBar } from "../Components/SideBar";
import { PlaylistVideo } from "../Components/PlaylistVideo";

export const PlayList = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <SideBar />
      </Grid>

      <Grid item xs={10}>
        <PlaylistVideo />
      </Grid>
    </Grid>
  );
};
