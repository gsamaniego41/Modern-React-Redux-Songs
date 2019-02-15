import React, {Component} from "react";
import {connect} from "react-redux";
import {selectSong} from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    console.log(this.props);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  // Named 'mapStateToProps' by convention
  // We're gonna take the state from our store,
  // then cause that data to become props inside of this component
  // mapStateToProps re-runs whenever the state updates
  console.log(state);
  return {songs: state.songs}; // this.props === {songs: state.songs} in SongList
};

export default connect(
  mapStateToProps,
  {
    selectSong
  }
)(SongList);
//configures connect and tell it how to get some data from Provider
//we configure it by passing it a function: mapStateToProps

// *Repetitive*
// We're always going to:
// import {connect}
// call connect(mapStateToProps)(OurComponentAs2ndFunctionCall)
// define mapStateToProps, it's always going to:
//    - get a first arg of state
//    - return an object
//        - that is going to show up as props inside of our component

/* 
=== dispatch behind the scenes ===
dispatch automatically gets called inside connect
connect gets the action that gets returned from action creator, 
throws it into the dispatch function for us 
*/
