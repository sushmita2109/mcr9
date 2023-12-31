import { LandingPage } from "../Components/LandingPage";
import { SideBar } from "../Components/SideBar";
import Grid from "@mui/material/Grid";

export const HomePage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <SideBar />
      </Grid>

      <Grid item xs={10}>
        <LandingPage />
      </Grid>
    </Grid>
  );
};
