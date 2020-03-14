import React, { Component } from "react";

export default class category extends Component {
  render() {
    return (
      <div>
        <div className="menu">
          <div className="menu_container text-right">
            <div className="menu_close">close</div>
            <nav className="menu_nav">
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
              </ul>
            </nav>
            <div className="menu_link">
              <a href="#">+Add Listing</a>
            </div>
          </div>
        </div>
        <div className="super_container">
          {/* Header */}
          <header className="header">
            <div className="header_overlay" />
            <div className="header_content d-flex flex-row align-items-center justify-content-start">
              {/* Logo */}
              <div className="logo">
                <img src="images/logo.png" alt="" />
                <a
                  href="#"
                  style={{ fontFamily: "Montserrat", marginLeft: "5px" }}
                >
                  PROFESSOR
                </a>
              </div>
              {/* Header Nav */}
              <div className="header_right d-flex flex-row align-items-center justify-content-start ml-auto">
                <nav className="main_nav">
                  <ul className="d-flex flex-row align-items-center justify-content-start">
                    <li className="active">
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="#aboutus">About us</a>
                    </li>
                    <li>
                      <a href="#howitworks">How it works?</a>
                    </li>
                    <li>
                      <a href="#">Find a Tutor</a>
                    </li>
                    <li>
                      <a href="#becomeatutor">Become a Tutor</a>
                    </li>
                  </ul>
                </nav>
                <div className="log_reg">
                  <ul className="d-flex flex-row align-items-center justify-content-start">
                    <li>
                      <a href="\Home">Login</a>
                    </li>
                    <li>
                      <a href="#">Register</a>
                    </li>
                  </ul>
                </div>
                <div className="hamburger">
                  <i className="fa fa-bars trans_200" />
                </div>
              </div>
            </div>
          </header>
          <div className="super_container_inner">
            <div className="super_overlay" />
            {/* Home */}
            <div className="home">
              {/* Home Slider */}
              <div className="home_slider_container">
                <div className="owl-carousel owl-theme home_slider">
                  {/* Slide */}
                  <div className="slide">
                    <div
                      className="background_image"
                      style={{ backgroundImage: "url(images/Tpic4.jpg)" }}
                    />
                    <div className="home_container">
                      <div className="container">
                        <div className="row">
                          <div className="col-xl-9 offset-xl-2">
                            <div className="home_content text-center">
                              <div className="home_title">
                                <h1>
                                  Here <span>Tutoring</span> Begins
                                </h1>
                              </div>
                              <div className="search_form_container">
                                <form
                                  action="#"
                                  className="search_form"
                                  id="search_form"
                                >
                                  <div className="d-flex flex-sm-row flex-column align-items-sm-start align-items-center justify-content-sm-between">
                                    <input
                                      type="text"
                                      className="search_input"
                                      placeholder="Which subject you want to learn?"
                                      required="required"
                                    />
                                    <button className="search_button">
                                      Find Tutor
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Slide */}
                  <div className="slide">
                    <div
                      className="background_image"
                      style={{ backgroundImage: "url(images/Tpic5.jpg)" }}
                    />
                    <div className="home_container">
                      <div className="container">
                        <div className="row">
                          <div className="col-xl-9 offset-xl-2">
                            <div className="home_content text-center">
                              <div className="home_title">
                                <h1>
                                  Here <span>Tutoring</span> Begins
                                </h1>
                              </div>
                              <div className="search_form_container">
                                <form
                                  action="#"
                                  className="search_form"
                                  id="search_form"
                                >
                                  <div className="d-flex flex-sm-row flex-column align-items-sm-start align-items-center justify-content-sm-between">
                                    <input
                                      type="text"
                                      className="search_input"
                                      placeholder="Which subject you want to learn?"
                                      required="required"
                                    />
                                    <button className="search_button">
                                      Find Tutor
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Home Slider Dots */}
                <div className="home_slider_dots">
                  <ul
                    id="home_slider_custom_dots"
                    className="home_slider_custom_dots"
                  >
                    <li className="home_slider_custom_dot active">01.</li>
                    <li className="home_slider_custom_dot">02.</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Categories */}
            <div className="categories">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="categories_container d-flex flex-md-row flex-column align-items-start justify-content-start">
                      {/* Category */}
                      <div className="category text-center">
                        <a href="listings.html">
                          <div className="d-flex flex-md-column flex-row align-items-md-center align-items-md-start align-items-center justify-content-start">
                            <div className="cat_icon">
                              <img
                                src="images/icon_1.png"
                                className="svg"
                                alt="https://www.flaticon.com/authors/monkik"
                              />
                            </div>
                            <div className="cat_title">Maths</div>
                          </div>
                        </a>
                      </div>
                      {/* Category */}
                      <div className="category text-center">
                        <a href="listings.html">
                          <div className="d-flex flex-md-column flex-row align-items-md-center align-items-md-start align-items-center justify-content-start">
                            <div className="cat_icon">
                              <img
                                src="images/icon_2.png"
                                className="svg"
                                alt="https://www.flaticon.com/authors/monkik"
                              />
                            </div>
                            <div className="cat_title">English</div>
                          </div>
                        </a>
                      </div>
                      {/* Category */}
                      <div className="category text-center">
                        <a href="listings.html">
                          <div className="d-flex flex-md-column flex-row align-items-md-center align-items-md-start align-items-center justify-content-start">
                            <div className="cat_icon">
                              <img
                                src="images/icon_3.png"
                                className="svg"
                                alt="https://www.flaticon.com/authors/monkik"
                              />
                            </div>
                            <div className="cat_title">Physics</div>
                          </div>
                        </a>
                      </div>
                      {/* Category */}
                      <div className="category text-center">
                        <a href="listings.html">
                          <div className="d-flex flex-md-column flex-row align-items-md-center align-items-md-start align-items-center justify-content-start">
                            <div className="cat_icon">
                              <img
                                src="images/icon_4.png"
                                className="svg"
                                alt="https://www.flaticon.com/authors/monkik"
                              />
                            </div>
                            <div className="cat_title">Chemestry</div>
                          </div>
                        </a>
                      </div>
                      {/* Category */}
                      <div className="category text-center">
                        <a href="listings.html">
                          <div className="d-flex flex-md-column flex-row align-items-md-center align-items-md-start align-items-center justify-content-start">
                            <div className="cat_icon">
                              <img
                                src="images/icon_5.png"
                                className="svg"
                                alt="https://www.flaticon.com/authors/monkik"
                              />
                            </div>
                            <div className="cat_title">And Others</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* About */}
            <div className="locations container_custom" id="aboutus">
              <div className="container">
                <div className="row">
                  <div className="col" style={{ paddingBottom: "150px" }}>
                    <div className="section_title text-center">
                      <h1>About Professor</h1>
                      <p>
                        Having trouble in doing your maths homework?cant
                        understand the complicated topics of chemistry? or just
                        strugling to learn a language? We got you covered!{" "}
                        <br />
                        Our tutors goes thorugh a in depth verification process
                        to be able to reach the standard to teach you. So feel
                        free to book a lesson and get help in your desire
                        subjects.For any quries you are more than welcome to
                        contact us.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
