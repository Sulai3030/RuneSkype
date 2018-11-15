import React, { Component } from 'react'
import './App.css';
import Home from "./Home"
import Play from './play'
import { BrowserRouter as Router, Route } from "react-router-dom"


class App extends Component {

    render() {
        return (
          <Router>
          <div>
            <Route exact path ="/" component={Home} />
            <Route exact path='/play' component={Play} />
          </div>
        </Router>
    
    
      );
      }
 

}

export default App;
