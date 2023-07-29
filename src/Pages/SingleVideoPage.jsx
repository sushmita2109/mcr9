import Grid from "@mui/material/Grid";
import { SideBar } from "../Components/SideBar";
import { useParams } from "react-router-dom";
import { Singlevideo } from "../Components/Singlevideo";
import { RightSideBar } from "../Components/RightSideBar";

export const SingleVideoPage = () => {
  const { videoId } = useParams();

  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <SideBar />
      </Grid>

      <Grid item xs={6}>
        <Singlevideo videoId={videoId} />
      </Grid>
      <Grid item xs={3}>
        <RightSideBar />
      </Grid>
    </Grid>
  );
};
