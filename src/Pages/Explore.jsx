import Grid from "@mui/material/Grid";
import { SideBar } from "../Components/SideBar";
import { ExploreVideos } from "../Components/ExploreVideos";

export const Explore = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <SideBar />
      </Grid>

      <Grid item xs={10}>
        <ExploreVideos />
      </Grid>
    </Grid>
  );
};
