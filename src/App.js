import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AboutMe from "./AboutMe";
import Home from "./Home";
import SideBar from "./SideBar";


class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <BrowserRouter>
      <SideBar/>
        <Route exact path="/" component={AboutMe} />
        <Route exact path="/archive" component={Home} />
      </BrowserRouter>
    )
  }
}

export default App;
