import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Popular from "./Pages/Popular";
import HeaderM from "./MainPage/HeaderM";
import Slider, { SlideM } from "./MainPage/SlideM";
import PopularM from "./MainPage/PopularM";
import ServiceX from "./MainPage/ServiceX";
import Testimonials from "./MainPage/Testimonials";

import FooterX from "./MainPage/FooterX";

export class App extends Component {
  render() {
    return (
      <div>
        <div class="super_container">
          <Route exact path="/" component={HeaderM}></Route>
          <Route exact path="/" component={SlideM}></Route>
          <Route exact path="/" component={FooterX}></Route>
          <Route exact path="/Popular.js" component={Popular}></Route>
        </div>
      </div>
    );
  }
}

export default App;
