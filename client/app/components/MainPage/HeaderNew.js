import React, { Component } from "react";

export class AB1 extends Component {
  render() {
    return (
      <div>
        {/* Menu */}
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
                <li>
                  <a href="listings.html">Listings</a>
                </li>
                <li>
                  <a href="blog.html">News</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
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
                <a href="#">
                  Directory<span>Plus</span>
                  <span>+</span>
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
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="listings.html">Listings</a>
                    </li>
                    <li>
                      <a href="blog.html">News</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </nav>
                <div className="add_listing text-center trans_200">
                  <a href="#">+Add Listing</a>
                </div>
                <div className="log_reg">
                  <ul className="d-flex flex-row align-items-center justify-content-start">
                    <li>
                      <a href="#">Login</a>
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
          </div>
        </div>
      </div>
    );
  }
}

export default AB1;
