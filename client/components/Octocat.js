//renders either all campuses or all students
import React, {Component} from 'react';
import { connect } from 'react-redux';
import store, {createPic, postPic} from '../store';


export class Octocat extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this)
  }

  onChange(event){
    event.preventDefault();
    this.props.postPic(event.target.value);
  }

  

render(){
  const elements = this.props.information;
  return (
    <div className="box">
      {
        elements.map((pic, i) =>
          <div key={i} className="images">
            <img src = {pic["url"]} className="image"/>
            <h3 className="text-color">Name: {pic["name"]}</h3>
            <button className="button button:hover" onClick={this.onChange} value={pic.url}> favorite </button>
          </div>
        )
      }
    </div>
  );
}
}

const mapStateToProps = function (state, ownProps) {
  let info = state.info;
  const octocat = ownProps.match.params.name;
  if (octocat) var information = info[0].filter(data => data.author === octocat)
  
  return {
    information
  };
};

const mapDispatchToProps = function (dispatch) {
  
  return {
    postPic(data) {
      dispatch(createPic(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Octocat);
