import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useVideo } from "../Context/VideoContext";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  const { videosState } = useVideo();

  return (
    <Box>
      <Typography variant="h3">Categories</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          padding: "8px",
          gap: "8px",
        }}
      >
        {videosState?.allCategories?.map((category) => (
          <Card
            key={category._id}
            sx={{
              maxWidth: 345,
            }}
          >
            <Link
              to={`/explore/${category.category}`}
              style={{ color: "black", textDecoration: "none" }}
            >
              <CardMedia>
                <img src={category.thumbnail} alt="cardimage" />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {category.category}
                </Typography>
              </CardContent>
            </Link>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
