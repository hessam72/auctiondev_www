import React from "react";
function Testimonials() {
  return (
    <section className="py-5">
      <div className="container py-1">
        <h2 className="h3 block-title text-center mt-2 mb-5">
          مشتریان ما چه می گویند؟
        </h2>
        <div
          className="owl-carousel testimonials-carousel"
          data-owl-carousel='{ "rtl": true, "nav": false, "dots": true, "loop": true, "margin": -15, "autoplay": true, "autoplayTimeout": 4000, "responsive": {"0":{"items":1},"630":{"items":2},"991":{"items":2},"1200":{"items":3}} }'
        >
          <div className="blockquote testimonial">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.
            </p>
            <footer className="testimonial-footer">
              <div className="testimonial-avatar">
                <img
                  src="/assets/img/testimonials/01.jpg"
                  alt="Testimonial Author Avatar"
                />
              </div>
              <div className="d-table-cell align-middle pr-2">
                <div className="blockquote-footer">
                  سارا بیات
                  <cite>طراح گرافیک</cite>
                </div>
              </div>
            </footer>
          </div>
          <div className="blockquote testimonial">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.
            </p>
            <footer className="testimonial-footer">
              <div className="testimonial-avatar">
                <img
                  src="/assets/img/testimonials/02.jpg"
                  alt="Testimonial Author Avatar"
                />
              </div>
              <div className="d-table-cell align-middle pr-2">
                <div className="blockquote-footer">
                  سام نعمتی
                  <cite>مدیر مالی</cite>
                </div>
              </div>
            </footer>
          </div>
          <div className="blockquote testimonial">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.
            </p>
            <footer className="testimonial-footer">
              <div className="testimonial-avatar">
                <img
                  src="/assets/img/testimonials/03.jpg"
                  alt="Testimonial Author Avatar"
                />
              </div>
              <div className="d-table-cell align-middle pr-2">
                <div className="blockquote-footer">
                  محمدرضا
                  <cite>مؤسس، مدیر عامل شرکت</cite>
                </div>
              </div>
            </footer>
          </div>
          <div className="blockquote testimonial">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.
            </p>
            <footer className="testimonial-footer">
              <div className="testimonial-avatar">
                <img
                  src="/assets/img/testimonials/04.jpg"
                  alt="Testimonial Author Avatar"
                />
              </div>
              <div className="d-table-cell align-middle pr-2">
                <div className="blockquote-footer">
                  سارا نعمتی
                  <cite>مدیر بازاریابی</cite>
                </div>
              </div>
            </footer>
          </div>
          <div className="blockquote testimonial">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.
            </p>
            <footer className="testimonial-footer">
              <div className="testimonial-avatar">
                <img
                  src="/assets/img/testimonials/05.jpg"
                  alt="Testimonial Author Avatar"
                />
              </div>
              <div className="d-table-cell align-middle pr-2">
                <div className="blockquote-footer">
                  خسرو شکیبا
                  <cite>مدیر بازاریابی</cite>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
