import React, { Component } from 'react'
import './App.css';
import Home from "./Home"
import Play from './play'
//import BoardPage from './Boardpage'
import { BrowserRouter as Router, Route } from "react-router-dom"
import MapComponent from './Mapcomponent';
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'



class App extends Component {

    render() {
        return (
          <Router>
          <div>
            <Route exact path ="/" component={Home} />
            <Route exact path='/play' component={Play} />
            {/* <Route exact path='/boardpage' component={BoardPage} /> */}
            <Route exact path ='/maptest' component={MapComponent} />
          </div>
        </Router>
    
    
      );
      }
 

}
export default DragDropContext(HTML5Backend)(App);
