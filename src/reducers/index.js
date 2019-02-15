import {combineReducers} from "redux";

const songsReducer = () => {
  return [
    {title: "Forgot About Dre", duration: "4:05"},
    {title: "Guerilla Radio", duration: "4:30"},
    {title: "C.R.E.A.M.", duration: "3:15"},
    {title: "Bonita Applebum", duration: "3:45"}
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
