import React, { Component } from "react";
export class PopularM extends Component {
  render() {
    return (
      <div>
        <div class="popular page_section">
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="section_title text-center">
                  <h1>Popular Subjects</h1>
                </div>
              </div>
            </div>

            <div class="row course_boxes">
              <div class="col-lg-4 course_box">
                <div class="card">
                  <img
                    class="card-img-top"
                    src="images/course_1.jpg"
                    alt="https://unsplash.com/@kellybrito"
                  />
                  <div class="card-body text-center">
                    <div class="card-title">
                      <a href="courses.html">English</a>
                    </div>
                    <div class="card-text">
                      <br></br>
                      Cant solve a questions? Select from number of teachers
                      availbale to help you out in your olevels subject.
                    </div>
                  </div>
                  <div class="price_box d-flex flex-row align-items-center">
                  
                    <div class="course_author_name">Find tutors...</div>
                    <div class="course_price d-flex flex-column align-items-center justify-content-center">
                      <span>
                        <a> -></a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 course_box">
                <div class="card">
                  <img
                    class="card-img-top"
                    src="images/course_2.jpg"
                    alt="https://unsplash.com/@cikstefan"
                  />
                  <div class="card-body text-center">
                    <div class="card-title">
                      <a href="courses.html">Physics</a>
                    </div>
                    <div class="card-text">
                      Adobe Guide, Layes, Smart Objects etc...
                    </div>
                  </div>
                  <div class="price_box d-flex flex-row align-items-center">
                    <div class="course_author_image">
                      <img
                        src="images/author.jpg"
                        alt="https://unsplash.com/@mehdizadeh"
                      />
                    </div>
                    <div class="course_author_name">
                      Find tutors...
                    </div>
                    <div class="course_price d-flex flex-column align-items-center justify-content-center">
                      <span>$29</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 course_box">
                <div class="card">
                  <img
                    class="card-img-top"
                    src="images/course_3.jpg"
                    alt="https://unsplash.com/@dsmacinnes"
                  />
                  <div class="card-body text-center">
                    <div class="card-title">
                      <a href="courses.html">Mathematics</a>
                    </div>
                    <div class="card-text">
                      Adobe Guide, Layes, Smart Objects etc...
                    </div>
                  </div>
                  <div class="price_box d-flex flex-row align-items-center">
                    <div class="course_author_image">
                      <img
                        src="images/author.jpg"
                        alt="https://unsplash.com/@mehdizadeh"
                      />
                    </div>
                    <div class="course_author_name">
                      Find tutors...
                    </div>
                    <div class="course_price d-flex flex-column align-items-center justify-content-center">
                      <span>$29</span>
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

export default PopularM;
