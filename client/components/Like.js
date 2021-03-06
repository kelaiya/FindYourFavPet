//Renders all the favoritized pets

import React, {Component} from 'react';
import { connect } from 'react-redux';
import store, {fetchPic} from '../store';


export class Like extends Component {
  constructor() {
    super();
  }
//Will give list of all the octocats from previous task
componentDidMount() {
    const picThunk = fetchPic();
    store.dispatch(picThunk);
}
  

render(){
  const like = this.props.octocat;
  return (
    <div className="container">
      {
        like.map((pic, i) =>
          <div key={i}>
            <img className="image" src = {pic["name"]}/>
          </div>
        )
      }
    </div>
  );
  }
}

const mapStateToProps = function (state, ownProps) {
  let octocat = state.octocat;
  return {
    octocat
  };
};

export default connect(mapStateToProps)(Like);
