import { Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./Pages/HomePage";
import { Explore } from "./Pages/Explore";
import { ExploreByCategory } from "./Pages/ExploreByCategory";
import { WatchLater } from "./Pages/WatchLater";
import { PlayList } from "./Pages/PlayList";
import { SingleVideoPage } from "./Pages/SingleVideoPage";
import { PlayListDetail } from "./Pages/PlayListDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<Explore />} />
        <Route
          exact
          path="/explore/:categoryName"
          element={<ExploreByCategory />}
        />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/playlist" element={<PlayList />} />
        <Route path="/video/:videoId" element={<SingleVideoPage />} />
        <Route path="/playlist/:playlistName" element={<PlayListDetail />} />
      </Routes>
    </div>
  );
}

export default App;
