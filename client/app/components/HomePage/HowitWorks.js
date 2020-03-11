import React, { Component } from "react";

export default class HowitWorks extends Component {
  render() {
    return (
      <div>
        {/* How it works */}
        <div className="how container_custom" id="howitworks">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="section_title text-center">
                  <h1>
                    How <span>Professor</span> works
                  </h1>
                </div>
                <div className="icon_box_container d-flex flex-row align-items-start justify-content-between flex-wrap">
                  {/* Icon Box */}
                  <div className="icon_box d-flex flex-column align-items-center justify-content-start text-center">
                    <div className="icon_box_num">01.</div>
                    <div className="icon_box_icon">
                      <img
                        src="images/icon_6.svg"
                        alt="https://www.flaticon.com/authors/monkik"
                      />
                    </div>
                    <div className="icon_box_title">Find Your Tutor</div>
                    <div className="icon_box_text">
                      <p>
                        Search from our pool of qualified teacher &amp; find
                        your perfect that is teaching the subject you want at
                        your desire time.
                      </p>
                    </div>
                  </div>
                  {/* Icon Box */}
                  <div className="icon_box d-flex flex-column align-items-center justify-content-start text-center">
                    <div className="icon_box_num">02.</div>
                    <div className="icon_box_icon">
                      <img
                        src="images/icon_7.svg"
                        alt="https://www.flaticon.com/authors/monkik"
                      />
                    </div>
                    <div className="icon_box_title">Schedule Your Lesson</div>
                    <div className="icon_box_text">
                      <p>
                        Found a tutor? Book a demo or pay to schedule a
                        lesson!.Our tutors are more than eagrly waiting to
                        assist you.
                      </p>
                    </div>
                  </div>
                  {/* Icon Box */}
                  <div className="icon_box d-flex flex-column align-items-center justify-content-start text-center">
                    <div className="icon_box_num">03.</div>
                    <div className="icon_box_icon">
                      <img
                        src="images/icon_8.svg"
                        alt="https://www.flaticon.com/authors/monkik"
                      />
                    </div>
                    <div className="icon_box_title">Take Your Lesson</div>
                    <div className="icon_box_text">
                      <p>
                        Be online at the desire time and take your lesson.Not
                        satisfy with the lesson? email us now and we will
                        rebooks a new session with no cost.
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
