import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
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
        <Route path="/" component={Home} />
      </BrowserRouter>
    )
  }
}

export default App;
