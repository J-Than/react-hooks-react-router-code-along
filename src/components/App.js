import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import About from "./About";
import Login from "./Login";
import Signup from "./Signup";
import Messages from "./Messages";
import Home from "./Home";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/messages">
          <Messages />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;