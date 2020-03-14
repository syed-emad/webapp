import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../LS/Login";
import Home from "../Home/Home";
import TM from "../Teachers/TM";

import UpperSection from "../HomePage/UpperSection";
import footer from "../HomePage/footer";
import BecomeTeacher from "../HomePage/BecomeTeacher";
import HowitWorks from "../HomePage/HowitWorks";

const App = ({ children }) => (
  <>
    <Route exact path="/" component={UpperSection}></Route>
    <Route exact path="/" component={HowitWorks}></Route>
    <Route exact path="/" component={BecomeTeacher}></Route>
    <Route exact path="/" component={footer}></Route>
    <Route exact path="/Login" component={Login}></Route>
    <Route exact path="/Home" component={Home}></Route>
  
    <Route exact path="/TM" component={TM}></Route>
  </>
);

export default App;