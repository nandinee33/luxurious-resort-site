import React from "react";
import './App.css';

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Team from "./pages/Team";
import Testimonial from "./pages/Testimonial";

import Navbar from "./components/Navbar";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:single" component={SingleRoom} />
        <Route exact path="/team/" component={Team} />
        <Route exact path="/testimonial/" component={Testimonial} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
