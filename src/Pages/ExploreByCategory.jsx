import Grid from "@mui/material/Grid";
import { SideBar } from "../Components/SideBar";
import { useParams } from "react-router-dom";
import { ExploreCategory } from "../Components/ExploreCategory";

export const ExploreByCategory = () => {
  const { categoryName } = useParams();

  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <SideBar />
      </Grid>

      <Grid item xs={10}>
        <ExploreCategory categoryName={categoryName} />
      </Grid>
    </Grid>
  );
};
