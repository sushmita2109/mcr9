export const initialState = {
  allCategories: [],
  allVideos: [],
  allWatchLater: [],
  allPlaylists: [],
  allnotes: [],
};
export const videoReducer = (state, action) => {
  switch (action.type) {
    case "GET_CATEGORY":
      return {
        ...state,
        allCategories: action.payload,
      };
    case "GET_VIDEOS":
      return {
        ...state,
        allVideos: action.payload,
      };
    case "ADD_WATCH_LATER":
      return {
        ...state,
        allWatchLater: [...state.allWatchLater, action.payload],
      };
    case "SAVE_WATCH_LATER_TO_LOCAL_STORAGE":
      localStorage.setItem("allWatchLater", JSON.stringify(action.payload));
      return state;
    case "REMOVE_WATCH_LATER":
      return {
        ...state,
        allWatchLater: action.payload,
      };
    case "SAVE_PLAYLIST_TO_LOCAL_STORAGE":
      localStorage.setItem("allPlaylist", JSON.stringify(action.payload));
      return state;
    case "CREATE_PLAYLIST":
      return {
        ...state,
        allPlaylists: [...state.allPlaylists, action.payload],
      };
    case "REMOVE_PLAYLIST":
      return {
        ...state,
        allPlaylists: action.payload,
      };
    case "ADD_NEW_NOTES":
      return {
        ...state,
        allnotes: [...state.allnotes, action.payload],
      };
    case "SAVE_NOTES_TO_LOCAL_STORAGE":
      localStorage.setItem("allNotes", JSON.stringify(action.payload));
      return state;
    case "REMOVE_NOTES":
      return {
        ...state,
        allnotes: action.payload,
      };
    default:
      return state;
  }
};
