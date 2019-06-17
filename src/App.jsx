import React, { Component } from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Index from "./components/Index";
import Blank from "./components/Blank";
import Grid from "./components/Grid";
import List from "./components/List";
//TODO Web Template Studio: Add routes for your new pages here.
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <BrowserRouter>
          <Switch>
            <Redirect exact path = "/" to = "/Index" />
            <Route path = "/Index" component = { Index } />
            <Route path = "/Blank" component = { Blank } />
            <Route path = "/Grid" component = { Grid } />
            <Route path = "/List" component = { List } />
          </Switch>
        </BrowserRouter>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
