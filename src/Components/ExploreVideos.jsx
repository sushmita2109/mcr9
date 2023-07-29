import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { useVideo } from "../Context/VideoContext";
import { useState } from "react";
import { Link } from "react-router-dom";

export const ExploreVideos = () => {
  const { videosState, addToWatchLater } = useVideo();

  const [searchTerm, setSearchTerm] = useState(" ");
  const filterdata = videosState?.allVideos?.filter((video) => {
    if (searchTerm === " ") {
      return video;
    } else {
      return video.title.toLowerCase().includes(searchTerm);
    }
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        padding: "8px",
      }}
    >
      <Typography variant="h3">Explore</Typography>
      <TextField
        id="outlined-basic"
        label="Search by title"
        variant="outlined"
        onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          padding: "8px",
          gap: "8px",
        }}
      >
        {filterdata?.map((videos) => (
          <Card
            key={videos._id}
            sx={{
              maxWidth: 345,
              padding: "5px",
            }}
          >
            <Link
              to={`/video/${videos._id}`}
              style={{ color: "black", textDecoration: "none" }}
            >
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <CardMedia>
                  <img src={videos.thumbnail} alt="cardimage" />
                </CardMedia>
                <IconButton
                  sx={{ alignSelf: "flex-start" }}
                  onClick={() => addToWatchLater(videos)}
                >
                  <WatchLaterIcon />
                </IconButton>
              </Box>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <AccountCircleIcon fontSize="large"></AccountCircleIcon>
                  {videos.title}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {videos.category}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {videos.views}|{videos.creator}
                </Typography>
              </CardContent>
            </Link>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
