import React, { Component } from "react";

export class FooterX extends Component {
  render() {
    return (
      <div>
        <footer class="footer">
          <div class="container">
            <div class="newsletter">
              <div class="row">
                <div class="col">
                  <div class="section_title text-center">
                    <h1>Subscribe to newsletter</h1>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col text-center">
                  <div class="newsletter_form_container mx-auto">
                    <form action="post">
                      <div class="newsletter_form d-flex flex-md-row flex-column flex-xs-column align-items-center justify-content-center">
                        <input
                          id="newsletter_email"
                          class="newsletter_email"
                          type="email"
                          placeholder="Email Address"
                          required="required"
                          data-error="Valid email is required."
                        />
                        <button
                          id="newsletter_submit"
                          type="submit"
                          class="newsletter_submit_btn trans_300"
                          value="Submit"
                        >
                          Subscribe
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div class="footer_content">
              <div class="row">
                <div class="col-lg-3 footer_col">
                  <div class="logo_container">
                    <div class="logo">
                      <img src="images/bulb3.png" alt="" />
                      <span>Professor</span>
                    </div>
                  </div>

                  <p class="footer_about_text">
                    In aliquam, augue a gravida rutrum, ante nisl fermentum
                    nulla, vitae tempor nisl ligula vel nunc. Proin quis mi
                    malesuada, finibus tortor fermentum, tempor lacus.
                  </p>
                </div>

                <div class="col-lg-3 footer_col">
                  <div class="footer_column_title">Menu</div>
                  <div class="footer_column_content">
                    <ul>
                      <li class="footer_list_item">
                        <a href="#">Home</a>
                      </li>
                      <li class="footer_list_item">
                        <a href="#">About Us</a>
                      </li>
                      <li class="footer_list_item">
                        <a href="courses.html">Courses</a>
                      </li>
                      <li class="footer_list_item">
                        <a href="news.html">News</a>
                      </li>
                      <li class="footer_list_item">
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="col-lg-3 footer_col">
                  <div class="footer_column_title">Usefull Links</div>
                  <div class="footer_column_content">
                    <ul>
                      <li class="footer_list_item">
                        <a href="#">Testimonials</a>
                      </li>
                      <li class="footer_list_item">
                        <a href="#">FAQ</a>
                      </li>

                      <li class="footer_list_item">
                        <a href="#">Tuitions</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="col-lg-3 footer_col">
                  <div class="footer_column_title">Contact</div>
                  <div class="footer_column_content">
                    <ul>
                      <li class="footer_contact_item">
                        <div class="footer_contact_icon">
                          <img
                            src="images/placeholder.svg"
                            alt="https://www.flaticon.com/authors/lucy-g"
                          />
                        </div>
                        Blvd Libertad, 34 m05200 Arévalo
                      </li>
                      <li class="footer_contact_item">
                        <div class="footer_contact_icon">
                          <img
                            src="images/smartphone.svg"
                            alt="https://www.flaticon.com/authors/lucy-g"
                          />
                        </div>
                        0034 37483 2445 322
                      </li>
                      <li class="footer_contact_item">
                        <div class="footer_contact_icon">
                          <img
                            src="images/envelope.svg"
                            alt="https://www.flaticon.com/authors/lucy-g"
                          />
                        </div>
                        hello@company.com
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="footer_bar d-flex flex-column flex-sm-row align-items-center">
              <div class="footer_copyright">
                <span>
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script> All
                  rights reserved | This is made with{" "}
                  <i class="fa fa-heart" aria-hidden="true"></i> by{" "}
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a>
                </span>
              </div>
              <div class="footer_social ml-sm-auto">
                <ul class="menu_social">
                  <li class="menu_social_item">
                    <a href="#">
                      <i class="fab fa-pinterest"></i>
                    </a>
                  </li>
                  <li class="menu_social_item">
                    <a href="#">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li class="menu_social_item">
                    <a href="#">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li class="menu_social_item">
                    <a href="#">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li class="menu_social_item">
                    <a href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default FooterX;
