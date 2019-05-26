import React, { Component } from 'react';
import { listAll } from "../utils/session";

type WelcomeProps = {
  selectSessionCallback: Function
}

class Welcome extends Component<WelcomeProps, {}> {

  selectSession(sessionName: String) {
    this.props.selectSessionCallback(sessionName);
  }

  listAllSessions(){
    var list = listAll();
    var elements = [];

    for (let i = 0; i < list.length; i++) {
      const sessionRef = list[i];
      elements.push(<a key={i} onClick={(e: any) => {
          this.selectSession(sessionRef.name)
        }}>{sessionRef.name}</a>)
    }

    return elements;
  }

  render() {
    return (
      <div>
        <h1>Welcome to the Orb</h1>
        {this.listAllSessions()}
      </div>
    );
  }

}

export default Welcome;