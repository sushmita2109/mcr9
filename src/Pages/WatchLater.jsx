import Grid from "@mui/material/Grid";
import { SideBar } from "../Components/SideBar";
import { WatchLaterPage } from "../Components/WatchLaterPage";

export const WatchLater = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <SideBar />
      </Grid>

      <Grid item xs={10}>
        <WatchLaterPage />
      </Grid>
    </Grid>
  );
};
