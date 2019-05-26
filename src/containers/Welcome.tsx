import React, { Component } from 'react';

type WelcomeProps = {
  myval: String
}

class Welcome extends Component<WelcomeProps, {}> {

  render() {
    return <h1>{this.props.myval}</h1>;
  }

}

export default Welcome;