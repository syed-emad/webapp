import React, { Component } from "react";

export class SlideM extends Component {
  render() {
    return (
      <div>
        <div class="home">
          <div class="hero_slider_container">
            <div class="hero_slider owl-carousel">
              <div class="hero_slide">
                <div
                  class="hero_slide_background"
                  style={{
                    backgroundImage: "url('images/slider_background.jpg')"
                  }}
                ></div>
                <div class="hero_slide_container d-flex flex-column align-items-center justify-content-center">
                  <div class="hero_slide_content text-center">
                    <h1
                      data-animation-in="fadeInUp"
                      data-animation-out="animate-out fadeOut"
                    >
                      Where <span>Tutoring</span> Begins!
                    </h1>
                  </div>
                </div>
              </div>

              <div class="hero_slide">
                <div
                  class="hero_slide_background"
                  style={{
                    backgroundImage: "url('images/slider_background.jpg')"
                  }}
                ></div>
                <div class="hero_slide_container d-flex flex-column align-items-center justify-content-center">
                  <div class="hero_slide_content text-center">
                    <h1
                      data-animation-in="fadeInUp"
                      data-animation-out="animate-out fadeOut"
                    >
                     Where <span>Tutoring</span> Begins!
                    </h1>
                  </div>
                </div>
              </div>

              <div class="hero_slide">
                <div
                  class="hero_slide_background"
                  style={{
                    backgroundImage: "url('images/slider_background.jpg')"
                  }}
                ></div>
                <div class="hero_slide_container d-flex flex-column align-items-center justify-content-center">
                  <div class="hero_slide_content text-center">
                    <h1
                      data-animation-in="fadeInUp"
                      data-animation-out="animate-out fadeOut"
                    >
                      Where <span>Tutoring</span> Begins!
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div class="hero_slider_left hero_slider_nav trans_200">
              <span class="trans_200">prev</span>
            </div>
            <div class="hero_slider_right hero_slider_nav trans_200">
              <span class="trans_200">next</span>
            </div>
          </div>
        </div>

        <div class="hero_boxes">
          <div class="hero_boxes_inner">
            <div class="container">
              <div class="row">
                <div class="col-lg-1 hero_box_col"></div>
                <div class="col-lg-3 hero_box_col">
                  <div class="hero_box d-flex flex-row align-items-center justify-content-start">
                    <img src="images/earth-globe.svg" class="svg" alt="" />
                    <div class="hero_box_content">
                      <h2 class="hero_box_title">Online Classes</h2>
                      <a href="courses.html" class="hero_box_link">
                        view more
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 hero_box_col">
                  <div class="hero_box d-flex flex-row align-items-center justify-content-start">
                    <img src="images/professor.svg" class="svg" alt="" />
                    <div class="hero_box_content">
                      <h2 class="hero_box_title">Experienced Teachers</h2>
                      <a href="teachers.html" class="hero_box_link">
                        view more
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 hero_box_col">
                  <div class="hero_box d-flex flex-row align-items-center justify-content-start">
                    <img src="images/professor.svg" class="svg" alt="" />
                    <div class="hero_box_content">
                      <h2 class="hero_box_title">Tuition Needs</h2>
                      <a href="teachers.html" class="hero_box_link">
                        view more
                      </a>
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

export default SlideM;
