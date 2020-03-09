import React, { Component } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HeaderM from "../MainPage/HeaderM";
import Slider, { SlideM } from "../MainPage/SlideM";
import PopularM from "../MainPage/PopularM";
import ServiceX from "../MainPage/ServiceX";
import Testimonials from "../MainPage/Testimonials";
import FooterX from "../MainPage/FooterX";
import Home from "../Home/Home";
const App = ({ children }) => (
  <>
    <Route exact path="/" component={HeaderM}></Route>
    <Route exact path="/" component={SlideM}></Route>
    <Route exact path="/" component={PopularM}></Route>
    <Route exact path="/" component={Testimonials}></Route>
    <Route exact path="/" component={FooterX}></Route>
    <Route exact path="/Home" component={Home}></Route>
  </>
);

export default App;
