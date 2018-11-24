import React, { Component } from "react";
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './videoteststyle.css';
import VideoComponent from './VideoComponent';



export default class VideoTest extends Component {
    constructor(props) {
      super();
    }
   
    render() {
      return (
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div>
            <AppBar title="React Twilio Video" />
            <VideoComponent />
        </div>
    </MuiThemeProvider>
      );
    }
   }