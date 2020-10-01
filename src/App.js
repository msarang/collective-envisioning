import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Sections  from "./Sections.js";
import { Component } from "react";

class App extends Component {
  render() {   
  return (
    <Router basename="/">
         <Route exact path="/" component={Sections}/>
   </Router>
  );
}
}

export default App;
