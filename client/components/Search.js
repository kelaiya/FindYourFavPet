//Renders the list of all the authors.

import React, {Component} from 'react';
import { connect } from 'react-redux';
import store, {fetchInfo, getInfo} from '../store';
import { Link } from 'react-router-dom';

export class Search extends Component {
  constructor() {
    super();
  }

  //Gives list of all the authors.
  componentDidMount() {
    const infoThunk = fetchInfo();
    store.dispatch(infoThunk);
  }

  

render(){
  const elements = this.props.info;
  return (
    <div>
      <div className="container">
        {
          Array.isArray(elements[0]) ? elements[0].map((el, index) =>
          (
          <div key = {index} className="data Search-box">
            
            <Link to={`/${el.author}`} >
              <h3 className="text-color">Author: {el.name}</h3>
            </Link>
             
            <div>
                <img src = {el.authorProfilePicture} className="image"/>
            </div>
            
            <Link to={`/like/${el.name}`} className="text-color">
              <h3> See your favorites </h3>
            </Link>
          
          </div>
          )) : ""
        }
      </div>
    </div>
  );
}
}

const mapStateToProps = function (state) {
  return {
    info: state.info
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    getInfo(info) {
      dispatch(fetchInfo(info));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
