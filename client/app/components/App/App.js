import React, { Component } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HeaderM from "../HeaderM";
import Slider, { SlideM } from "../SlideM";
import PopularM from "../PopularM";
import Testimonials from "../Testimonials";
import FooterX from "../FooterX";


const App = ({ children }) => (
  <>
    
     <div>
        <div class="super_container">
          <Route exact path="/" component={HeaderM}></Route>
          <Route exact path="/" component={SlideM}></Route>
          <Route exact path="/" component={PopularM}></Route>
          <Route exact path="/" component={Testimonials}></Route>
          <Route exact path="/" component={FooterX}></Route>

          <Route exact path="/" component={Header}></Route>
          <main> {children}</main>
          <Route exact path="/" component={Footer}></Route>
          
        </div>
      </div>
  </>
);

export default App;
