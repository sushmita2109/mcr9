import { createContext, useContext, useEffect, useReducer } from "react";
import { videoReducer, initialState } from "../Reducers/videoReducer";
import { categories, videos } from "../data/videoData";

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videosState, videoDispatch] = useReducer(videoReducer, initialState);

  const getVideoDetail = () => {
    videoDispatch({ type: "GET_CATEGORY", payload: categories });
    videoDispatch({ type: "GET_VIDEOS", payload: videos });
  };

  const addToWatchLater = (video) => {
    const filterData = videosState?.allVideos?.find(
      (videos) => videos._id == video._id
    );
    const dataCheck = videosState?.allWatchLater?.find(
      (videos) => videos._id == video._id
    );

    if (dataCheck) {
      removeWatchLater();
    } else {
      videoDispatch({ type: "ADD_WATCH_LATER", payload: filterData });
    }
  };

  const removeWatchLater = (video) => {
    const filterData = videosState?.allWatchLater?.filter(
      (videos) => videos._id !== video._id
    );
    videoDispatch({ type: "REMOVE_WATCH_LATER", payload: filterData });
  };
  const createPlaylist = (name, desc, handleClose) => {
    videoDispatch({
      type: "CREATE_PLAYLIST",
      payload: {
        name: name,
        desc: desc,
        image:
          "https://daily.jstor.org/wp-content/uploads/2023/01/good_times_with_bad_music_1050x700.jpg",
      },
    });
    handleClose();
  };
  const deletePlaylist = (playlistDetail) => {
    const filterdata = videosState?.allPlaylists?.filter(
      (playlist) => playlist.name !== playlistDetail.name
    );
    videoDispatch({ type: "REMOVE_PLAYLIST", payload: filterdata });
  };

  const createNotes = (notes, handleClose) => {
    videoDispatch({
      type: "ADD_NEW_NOTES",
      payload: { notes: notes, name: "sush" },
    });
    handleClose();
  };

  const removeNotes = (note) => {
    const filterData = videosState?.allnotes?.filter(
      (notes) => notes.notes !== note.notes
    );
    videoDispatch({ type: "REMOVE_NOTES", payload: filterData });
  };

  useEffect(() => {
    getVideoDetail();
  }, []);
  useEffect(() => {
    videoDispatch({
      type: "SAVE_PLAYLIST_TO_LOCAL_STORAGE",
      payload: videosState.allPlaylists,
    });
  }, [videosState?.allPlaylists, videoDispatch]);
  useEffect(() => {
    videoDispatch({
      type: "SAVE_NOTES_TO_LOCAL_STORAGE",
      payload: videosState.allnotes,
    });
  }, [videosState?.allnotes, videoDispatch]);
  return (
    <VideoContext.Provider
      value={{
        videosState,
        videoDispatch,
        addToWatchLater,
        removeWatchLater,
        createPlaylist,
        deletePlaylist,
        createNotes,
        removeNotes,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export const useVideo = () => useContext(VideoContext);
