import React, { Component } from "react";

export default class footer extends Component {
  render() {
    return (
      <div>
        {/* Footer */}
        <footer className="footer container_custom">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="footer_container d-flex flex-md-row flex-column align-items-center justify-content-md-start justify-content-center">
                  <div className="copyright order-md-1 order-2">
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    Copyright © All rights reserved
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  </div>
                  <nav className="footer_nav ml-md-auto order-md-2 order-1">
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
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
