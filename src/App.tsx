import React, { Component } from "react";
import { fetchSession } from "./utils/session";
import logo from "./logo.svg";
import "./App.css";

import Welcome from "./containers/Welcome";

type AppState = {
  text: String
}

class App extends Component<{}, AppState> {
  
  componentWillMount() {
    this.setState({
      text: "ABC"
    });
  }

  componentDidMount() {
    setTimeout(() => this.setState({ text: "10232183201" }), 3000);
  }

  // var text = "ABC";

  // setTimeout(() => {
  //   text = "12321389128932918301";
  // }, 3000);

  // console.log(fetchSession("fc2020"));
  //const electron = require('electron');   remote.app.getPath('documents')

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Welcome myval={this.state.text} />

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
        </header>
      </div>
    );
  }
}

export default App;
