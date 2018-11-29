import React, { Component } from 'react'
import './App.css';
import Home from "./Home"
import Play from './play'
//import BoardPage from './Boardpage'
import { BrowserRouter as Router, Route } from "react-router-dom"
import FileUpload from './uploadtest';
import CanvasTest from './canvastest'



class App extends Component {

    render() {
        return (
          <Router>
          <div>
            <Route exact path ="/" component={Home} />
            <Route exact path='/play' component={Play} />
            {/* <Route exact path='/boardpage' component={BoardPage} /> */}
            <Route exact path ='/uploadtest' component={FileUpload} />
            <Route exact path ='/canvastest' component={CanvasTest} />
          </div>
        </Router>
    
    
      );
      }
 

}
export default App
