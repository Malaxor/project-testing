
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Feed from "./pages/Feed";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Playlist from "./pages/Playlist";
import SignUp from "./pages/SignUp";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Navbar";




const App = () =>

  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      	<Route exact path="/home" component={Home} />
      	<Route exact path="/sign-up" component={SignUp} />
      	<Route exact path="/feed" component={Feed} />
      	<Route exact path="/learn" component={Learn} />
      	<Route exact path="/playlist" component={Playlist} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
