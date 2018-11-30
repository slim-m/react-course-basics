import React, { Component } from 'react';
import Welcome from "./components/welcome";
import Hello from "./components/hello";
import Lists from "./components/lists";
import Conditions from "./components/Conditions";

class App extends Component {
  render() {
    return (
      <div className="App">
        Welcome from App.
        <hr />
        <Welcome name="bashir" lastName="shallah">Description</Welcome>
        <hr />
        <Hello name="bashir" />
        <hr />
        <Lists />
        <hr />
        <Conditions />
        <hr />
      </div>
    );
  }
}

export default App;
