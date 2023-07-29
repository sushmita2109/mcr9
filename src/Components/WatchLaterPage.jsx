import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { useVideo } from "../Context/VideoContext";
import { useEffect } from "react";

export const WatchLaterPage = () => {
  const { videosState, addToWatchLater, videoDispatch, removeWatchLater } =
    useVideo();

  useEffect(() => {
    // Dispatch the action to save the updated allWatchLater data to localStorage
    videoDispatch({
      type: "SAVE_WATCH_LATER_TO_LOCAL_STORAGE",
      payload: videosState.allWatchLater,
    });
  }, [videosState?.allWatchLater, videoDispatch]);
  const videoData = localStorage.getItem("allWatchLater");
  const parsedAllWatchLaterData = JSON.parse(videoData);

  return (
    <Box>
      <Typography variant="h3">Watch Later</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          padding: "8px",
          gap: "8px",
        }}
      >
        {parsedAllWatchLaterData?.map((video) => (
          <Card
            key={video._id}
            sx={{
              maxWidth: 345,
              padding: "5px",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <CardMedia>
                <img src={video.thumbnail} alt="cardimage" />
              </CardMedia>
              <IconButton
                sx={{ alignSelf: "flex-start" }}
                onClick={() => addToWatchLater(video)}
              >
                <WatchLaterIcon sx={{ color: "blue" }} />
              </IconButton>
            </Box>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <AccountCircleIcon fontSize="large"></AccountCircleIcon>
                {video.title}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {video.category}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {video.views}|{video.creator}
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => removeWatchLater(video)}>Remove</Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
