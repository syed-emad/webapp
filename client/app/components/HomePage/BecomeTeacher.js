import React, { Component } from "react";

export default class BecomeTeacher extends Component {
  render() {
    return (
      <div>
        {/* CTA */}
        <div className="cta container_custom">
          <div
            className="parallax_background"
            data-image-src="images/cta.jpg"
          />
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="cta_content">
                  <div className="cta_title">
                    <h1>Teach with PROFESSOR</h1>
                  </div>
                  <div className="cta_text">
                    <p>
                      Do you have the expertise to? Become a tutor now and earn
                      upto Rs.30000 per month.
                    </p>
                    <br />
                    <div style={{ color: "white" }}>
                      <ul>
                        <li>
                          <i className="fa fa-user" />
                           Teach Students
                        </li>
                        <li>
                          <i className="fa fa-expand" />
                           Grow your Repo
                        </li>
                        <li>
                          <i className="fa fa-money" />
                           Increase your earning
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="button cta_button" id="becomeatutor">
                    <a href="#">Apply Now</a>
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
