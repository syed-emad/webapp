import React, { Component } from "react";

export class Testimonials extends Component {
  render() {
    return (
      <div class="testimonials page_section">
        <div class="testimonials_background_container prlx_parent">
          <div
            class="testimonials_background prlx"
            style={{
              backgroundImage: "url('images/testimonials_background.jpg')"
            }}
          ></div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="section_title text-center">
                <h1>What our students say</h1>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-10 offset-lg-1">
              <div class="testimonials_slider_container">
                <div class="owl-carousel owl-theme testimonials_slider">
                  <div class="owl-item">
                    <div class="testimonials_item text-center">
                      <div class="quote">“</div>
                      <p class="testimonials_text">
                        In aliquam, augue a gravida rutrum, ante nisl fermentum
                        nulla, vitae tempor nisl ligula vel nunc. Proin quis mi
                        malesuada, finibus tortor fermentum.In aliquam, augue a
                        gravida rutrum, ante nisl fermentum nulla, vitae tempor
                        nisl ligula vel nunc. Proin quis mi malesuada, finibus
                        tortor fermentum.
                      </p>
                      <div class="testimonial_user">
                        <div class="testimonial_image mx-auto">
                          <img src="images/testimonials_user.jpg" alt="" />
                        </div>
                        <div class="testimonial_name">james cooper</div>
                        <div class="testimonial_title">Graduate Student</div>
                      </div>
                    </div>
                  </div>

                  <div class="owl-item">
                    <div class="testimonials_item text-center">
                      <div class="quote">“</div>
                      <p class="testimonials_text">
                        In aliquam, augue a gravida rutrum, ante nisl fermentum
                        nulla, vitae tempor nisl ligula vel nunc. Proin quis mi
                        malesuada, finibus tortor fermentum.In aliquam, augue a
                        gravida rutrum, ante nisl fermentum nulla, vitae tempor
                        nisl ligula vel nunc. Proin quis mi malesuada, finibus
                        tortor fermentum.
                      </p>
                      <div class="testimonial_user">
                        <div class="testimonial_image mx-auto">
                          <img src="images/testimonials_user.jpg" alt="" />
                        </div>
                        <div class="testimonial_name">james cooper</div>
                        <div class="testimonial_title">Graduate Student</div>
                      </div>
                    </div>
                  </div>

                  <div class="owl-item">
                    <div class="testimonials_item text-center">
                      <div class="quote">“</div>
                      <p class="testimonials_text">
                        In aliquam, augue a gravida rutrum, ante nisl fermentum
                        nulla, vitae tempor nisl ligula vel nunc. Proin quis mi
                        malesuada, finibus tortor fermentum.In aliquam, augue a
                        gravida rutrum, ante nisl fermentum nulla, vitae tempor
                        nisl ligula vel nunc. Proin quis mi malesuada, finibus
                        tortor fermentum.
                      </p>
                      <div class="testimonial_user">
                        <div class="testimonial_image mx-auto">
                          <img src="images/testimonials_user.jpg" alt="" />
                        </div>
                        <div class="testimonial_name">james cooper</div>
                        <div class="testimonial_title">Graduate Student</div>
                      </div>
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

export default Testimonials;
