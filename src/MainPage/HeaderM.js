import React, { Component } from "react";

export class HeaderM extends Component {
  render() {
    return (
      <div>
        <div class="super_container">
          <header class="header d-flex flex-row">
            <div class="header_content d-flex flex-row align-items-center">
              <div class="logo_container">
                <div class="logo">
                  <img src="images/logo.png" alt="" />
                  <span>course</span>
                </div>
              </div>

              <nav class="main_nav_container">
                <div class="main_nav">
                  <ul class="main_nav_list">
                    <li class="main_nav_item">
                      <a href="#">home</a>
                    </li>
                    <li class="main_nav_item">
                      <a href="#">about us</a>
                    </li>
                    <li class="main_nav_item">
                      <a href="courses.html">courses</a>
                    </li>
                    <li class="main_nav_item">
                      <a href="Popular.js">elements</a>
                    </li>
                    <li class="main_nav_item">
                      <a href="news.html">news</a>
                    </li>
                    <li class="main_nav_item">
                      <a href="contact.html">contact</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div class="header_side d-flex flex-row justify-content-center align-items-center">
              <img src="images/phone-call.svg" alt="" />
              <span>+43 4566 7788 2457</span>
            </div>

            <div class="hamburger_container">
              <i class="fas fa-bars trans_200"></i>
            </div>
          </header>
        </div>
      </div>
    );
  }
}

export default HeaderM;
