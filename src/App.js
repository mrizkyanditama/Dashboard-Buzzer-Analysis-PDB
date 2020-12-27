import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./dashboard";
import "./scss/style.scss";

// Containers

class App extends Component {
  render() {
    return <Dashboard />;
  }
}

export default App;
