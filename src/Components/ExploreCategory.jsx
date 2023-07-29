import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { useVideo } from "../Context/VideoContext";

export const ExploreCategory = ({ categoryName }) => {
  const { videosState, addToWatchLater } = useVideo();
  const exploreCategory = videosState?.allVideos?.filter(
    (video) => video.category == categoryName
  );
  return (
    <Box>
      <Typography variant="h3">{categoryName}</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          padding: "8px",
          gap: "8px",
        }}
      >
        {exploreCategory.map((explore) => (
          <Card
            key={explore._id}
            sx={{
              maxWidth: 345,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <CardMedia>
                <img src={explore.thumbnail} alt="cardimage" />
              </CardMedia>
              <IconButton
                sx={{ alignSelf: "flex-start" }}
                onClick={() => addToWatchLater(explore)}
              >
                <WatchLaterIcon />
              </IconButton>
            </Box>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <AccountCircleIcon fontSize="large"></AccountCircleIcon>
                {explore.title}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {explore.category}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {explore.views}|{explore.creator}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
