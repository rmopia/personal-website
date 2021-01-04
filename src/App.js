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
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={AboutMe} />
      </BrowserRouter>
    )
  }
}

export default App;
