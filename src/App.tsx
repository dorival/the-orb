import React, { Component } from "react";
import * as SessionManager from "./utils/session";
//import logo from "./logo.svg";
import "./App.css";

import Welcome from "./containers/Welcome";
import SelectionHome from "./containers/SelectionHome";

type AppState = {
  text: String,
  activeUI: Number,
}

var session: any = {};

class App extends Component<{}, AppState> {
  
  componentWillMount() {

    this.setState({
      text: "ABC",
      activeUI: 0
    });
  }

  componentDidMount() {
    // setTimeout(() => this.setState({ 
    //   text: "10232183201"
    // }), 3000);
  }

  // var text = "ABC";

  // setTimeout(() => {
  //   text = "12321389128932918301";
  // }, 3000);

  // console.log(fetchSession("fc2020"));
  // const electron = require('electron');
  // remote.app.getPath('documents')

  getActivePage() {
    var activeUI = this.state.activeUI;

    if(activeUI === 0){
      var fn = this.selectSessionCallbackFactory();
      return <Welcome selectSessionCallback={fn} />;
    }
    if(activeUI === 1){
      return <SelectionHome myval="ABC" />
    }

  }

  selectSessionCallbackFactory(): Function {
    var activateUi = (index: Number) => this.setState({ activeUI: index });
    return (sessionId: string) => {
      session = SessionManager.fetchSession(sessionId);
      activateUi(1);
    }
  }

  render() {
    return (
      <div className="App">
        {this.getActivePage()}
      </div>
    )
  }

}

/*
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.tsx</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
*/

export default App;
