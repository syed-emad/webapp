import React, { Component } from "react";

export class HeaderM extends Component {
  render() {
    return (
      <div>
        <header class="header d-flex flex-row">
          <div class="header_content d-flex flex-row align-items-center">
            <div class="logo_container">
              <div class="logo">
                <img src="images/bulb3.png" alt="" />
                <span>Professor</span>
              </div>
            </div>

            <nav class="main_nav_container">
              <div class="main_nav">
                <ul class="main_nav_list">
                  <li class="main_nav_item">
                    <a href="#">About Us</a>
                  </li>
                  <li class="main_nav_item">
                    <a href="#">Find Tutor</a>
                  </li>
                  <li class="main_nav_item">
                    <a href="elements.html">Become Tutor</a>
                  </li>

                  <li class="main_nav_item">
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div class="header_side d-flex flex-row justify-content-center align-items-center">
            <img src="images/phone-call.svg" alt="" />
            <span><a href= "contact.html">Sign Up!</a></span>
          </div>

          <div class="hamburger_container">
            <i class="fas fa-bars trans_200"></i>
          </div>
        </header>
        <div class="menu_container menu_mm">
          <div class="menu_close_container">
            <div class="menu_close"></div>
          </div>

          <div class="menu_inner menu_mm">
            <div class="menu menu_mm">
              <ul class="menu_list menu_mm">
                <li class="menu_item menu_mm">
                  <a href="index.html">Home</a>
                </li>
                <li class="menu_item menu_mm">
                  <a href="#">About us</a>
                </li>
                <li class="menu_item menu_mm">
                  <a href="#">Courses</a>
                </li>
                <li class="menu_item menu_mm">
                  <a href="elements.html">Find Tutor</a>
                </li>
                <li class="menu_item menu_mm">
                  <a href="news.html">Become Tutor</a>
                </li>
                <li class="menu_item menu_mm">
                  <a href="contact.html">Contact</a>
                </li>
              </ul>

              <div class="menu_social_container menu_mm">
                <ul class="menu_social menu_mm">
                  <li class="menu_social_item menu_mm">
                    <a href="#">
                      <i class="fab fa-pinterest"></i>
                    </a>
                  </li>
                  <li class="menu_social_item menu_mm">
                    <a href="#">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li class="menu_social_item menu_mm">
                    <a href="#">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li class="menu_social_item menu_mm">
                    <a href="#">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li class="menu_social_item menu_mm">
                    <a href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="menu_copyright menu_mm">
               
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderM;
