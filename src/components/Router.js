import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./router.css";

import App from "./App";
import Profile from "./profile";
import Chatlist from "./chatlist";

export default function Routes() {
  return (
    <>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Main Chat</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/chatlist">Chat List</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/chatlist">
              <Chatlist />
            </Route>
            <Route exact path="/">
              <App />
            </Route>
            <Route>
              <div>No such page</div>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}