import React, { Component } from 'react'
import './App.css';
import Home from "./Home"
import Play from './play'
//import BoardPage from './Boardpage'
import { BrowserRouter as Router, Route } from "react-router-dom"
import FileUpload from './uploadtest';
import Chat from './Chat'
import CanvasTest from './canvastest'
import TextUpload from './textupload'
import DM from './DMplay'
import Player from './Playerplay'




class App extends Component {

    render() {
        return (
          <Router>
          <div>
            <Route exact path ="/" component={Home} />
            <Route exact path='/play' component={Play} />
            {/* <Route exact path='/boardpage' component={BoardPage} /> */}
            <Route exact path ='/uploadtest' component={FileUpload} />
            <Route exact path ='/chat' component={Chat} />
            <Route exact path ='/canvastest' component={CanvasTest} />
            <Route exact path ='./textupload' component={TextUpload} />
            <Route exact path ='/dm' component={DM} />
            <Route exact path ='./player' component={Player} />
          </div>
        </Router>
    
    
      );
      }
 

}
export default App
