import React, { Component } from 'react'
import './App.css';
import Home from "./Home"
import Play from './play'
<<<<<<< HEAD
// import BoardPage from './Boardpage'
=======
//import BoardPage from './Boardpage'
>>>>>>> cbcad8c9e2864ae2935bd7684b0ce8e50d43fa66
import { BrowserRouter as Router, Route } from "react-router-dom"
import VideoTest from './videotest'



class App extends Component {

    render() {
        return (
          <Router>
          <div>
            <Route exact path ="/" component={Home} />
            <Route exact path='/play' component={Play} />
            {/* <Route exact path='/boardpage' component={BoardPage} /> */}
<<<<<<< HEAD
            <Route exact path ='/videotest' component={VideoTest} />
=======
>>>>>>> cbcad8c9e2864ae2935bd7684b0ce8e50d43fa66
          </div>
        </Router>
    
    
      );
      }
 

}

export default App;
