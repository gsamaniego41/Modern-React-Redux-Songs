import React from "react";
import {connect} from "react-redux";

const SongDetail = ({song}) => {
  // ({song}) same as taking in props
  // then doing props.song.title, props.song.duration
  console.log(song);
  if (!song) {
    return <div>Select a song</div>;
  }

  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  // state aka reducers
  // pull out the property we care about
  // and return it as an object
  return {song: state.selectedSong}; // selectedSong is a reducer
  // if you ever want to customize the key that
  // shows up inside the props object, do it here
  // return {mySelectedSong: state.selectedSong};
};

export default connect(mapStateToProps)(SongDetail);
// we want to wrap SongDetail in connect()
// so we can get information from our Redux store
