import React, {Component} from "react";
import {connect} from "react-redux";

class SongList extends Component {
  render() {
    console.log(this.props);

    return <div>SongList</div>;
  }
}

const mapStateToProps = state => {
  // Named 'mapStateToProps' by convention
  // We're gonna take the state from our store,
  // then cause that data to become props inside of this component
  console.log(state);
  return {songs: state.songs}; // this.props === {songs: state.songs} in SongList
};

export default connect(mapStateToProps)(SongList);
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
