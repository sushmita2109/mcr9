import { List, ListItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const SideBar = () => {
  const dataDetails = [
    {
      name: "HOME",
      routeTo: "/",
    },
    {
      name: "EXPLORE",
      routeTo: "/explore",
    },
    {
      name: "PLAYLIST",
      routeTo: "/playlist",
    },
    {
      name: "WATCH LATER",
      routeTo: "/watchlater",
    },
  ];
  const navigate = useNavigate();

  return (
    <List>
      {dataDetails.map((data, idx) => (
        <ListItem
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          key={idx}
          onClick={() => navigate(data.routeTo)}
        >
          {data.name}
        </ListItem>
      ))}
    </List>
  );
};
