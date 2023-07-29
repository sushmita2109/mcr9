import { Card, CardContent, CardMedia, List, Typography } from "@mui/material";
import { useVideo } from "../Context/VideoContext";

export const RightSideBar = () => {
  const { videosState } = useVideo();
  return (
    <List>
      <Typography variant="h6">More Videos</Typography>
      {videosState?.allVideos?.map((videos) => (
        <Card
          key={videos._id}
          sx={{
            maxWidth: 355,
            padding: "5px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardMedia sx={{ width: "60px" }}>
            <img src={videos.thumbnail} alt="imagecard" />
          </CardMedia>
          <CardContent>
            <Typography variant="boby1">{videos.title}</Typography>
            <Typography variant="body1">{videos.creator}</Typography>
          </CardContent>
        </Card>
      ))}
    </List>
  );
};
