import React, {Component} from 'react'
import Search from './Search';


// Home component is the initial page displayed by default 

export default class Home extends Component {

   render() {

        return (
            <div className="main">
              <div id="home">
                <h1> Search Your favorite Pets </h1>
              </div>
              <Search />
            </div>
        )
    }
}