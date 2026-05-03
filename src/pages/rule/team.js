import React from "react";

function Team() {
  return (
    <section className="container pb-5">
      <h2 className="h3 block-title text-center mb-4">
        تیم ما<small>افرادی با تجربه ای که پشت خرید شما قرار دارند.</small>
      </h2>
      <div className="row">
        {/* Team member*/}
        <div className="col-lg-3 col-sm-6">
          <div className="team-card-style-1 mx-auto">
            <div className="team-card-inner">
              <div className="team-thumb">
                <img
                  src="/assets/img/team/style-1/01.jpg"
                  alt="Team Member Picture"
                />
              </div>
              <div className="team-social-bar text-center">
                <a className="social-btn sb-style-4 sb-twitter" href="/">
                  <i className="socicon-twitter"></i>
                </a>
                <a className="social-btn sb-style-4 sb-github" href="/">
                  <i className="socicon-github"></i>
                </a>
                <a className="social-btn sb-style-4 sb-stackoverflow" href="/">
                  <i className="socicon-stackoverflow"></i>
                </a>
                <a className="social-btn sb-style-4 sb-skype" href="/">
                  <i className="socicon-skype"></i>
                </a>
              </div>
              <a className="team-contact-link" href="tel:+02111111111">
                <i className="fe-icon-phone"></i>&nbsp; ۰۲۱-۱۱۱۱۱۱۱۱
              </a>
              <a className="team-contact-link" href="mailto:info@example.com">
                <i className="fe-icon-mail"></i>&nbsp;info@example.com
              </a>
            </div>
            <span className="team-position">برنامه نویس</span>
            <h4 className="team-name">سام نعمتی</h4>
          </div>
        </div>
        {/* Team member*/}
        <div className="col-lg-3 col-sm-6">
          <div className="team-card-style-1 mx-auto">
            <div className="team-card-inner">
              <div className="team-thumb">
                <img
                  src="/assets/img/team/style-1/02.jpg"
                  alt="Team Member Picture"
                />
              </div>
              <div className="team-social-bar text-center">
                <a className="social-btn sb-style-4 sb-facebook" href="/">
                  <i className="socicon-facebook"></i>
                </a>
                <a className="social-btn sb-style-4 sb-twitter" href="/">
                  <i className="socicon-twitter"></i>
                </a>
                <a className="social-btn sb-style-4 sb-google-plus" href="/">
                  <i className="socicon-googleplus"></i>
                </a>
                <a className="social-btn sb-style-4 sb-linkedin" href="/">
                  <i className="socicon-linkedin"></i>
                </a>
              </div>
              <a className="team-contact-link" href="tel:+02111111111">
                <i className="fe-icon-phone"></i>&nbsp; ۰۲۱-۱۱۱۱۱۱۱۱
              </a>
              <a className="team-contact-link" href="mailto:info@example.com">
                <i className="fe-icon-mail"></i>&nbsp;info@example.com
              </a>
            </div>
            <span className="team-position">مدیر بازاریابی</span>
            <h4 className="team-name">سارا بیات</h4>
          </div>
        </div>
        {/* Team member*/}
        <div className="col-lg-3 col-sm-6">
          <div className="team-card-style-1 mx-auto">
            <div className="team-card-inner">
              <div className="team-thumb">
                <img
                  src="/assets/img/team/style-1/03.jpg"
                  alt="Team Member Picture"
                />
              </div>
              <div className="team-social-bar text-center">
                <a className="social-btn sb-style-4 sb-twitter" href="/">
                  <i className="socicon-twitter"></i>
                </a>
                <a className="social-btn sb-style-4 sb-pinterest" href="/">
                  <i className="socicon-pinterest"></i>
                </a>
                <a className="social-btn sb-style-4 sb-behance" href="/">
                  <i className="socicon-behance"></i>
                </a>
                <a className="social-btn sb-style-4 sb-dribbble" href="/">
                  <i className="socicon-dribbble"></i>
                </a>
              </div>
              <a className="team-contact-link" href="tel:+02111111111">
                <i className="fe-icon-phone"></i>&nbsp; ۰۲۱-۱۱۱۱۱۱۱۱
              </a>
              <a className="team-contact-link" href="mailto:info@example.com">
                <i className="fe-icon-mail"></i>&nbsp;info@example.com
              </a>
            </div>
            <span className="team-position">طراح گرافیک</span>
            <h4 className="team-name">رویا سعیدی</h4>
          </div>
        </div>
        {/* Team member*/}
        <div className="col-lg-3 col-sm-6">
          <div className="team-card-style-1 mx-auto">
            <div className="team-card-inner">
              <div className="team-thumb">
                <img
                  src="/assets/img/team/style-1/04.jpg"
                  alt="Team Member Picture"
                />
              </div>
              <div className="team-social-bar text-center">
                <a className="social-btn sb-style-4 sb-facebook" href="/">
                  <i className="socicon-facebook"></i>
                </a>
                <a className="social-btn sb-style-4 sb-twitter" href="/">
                  <i className="socicon-twitter"></i>
                </a>
                <a className="social-btn sb-style-4 sb-skype" href="/">
                  <i className="socicon-skype"></i>
                </a>
                <a className="social-btn sb-style-4 sb-linkedin" href="/">
                  <i className="socicon-linkedin"></i>
                </a>
              </div>
              <a className="team-contact-link" href="tel:+02111111111">
                <i className="fe-icon-phone"></i>&nbsp; ۰۲۱-۱۱۱۱۱۱۱۱
              </a>
              <a className="team-contact-link" href="mailto:info@example.com">
                <i className="fe-icon-mail"></i>&nbsp;info@example.com
              </a>
            </div>
            <span className="team-position">متخصص سئو</span>
            <h4 className="team-name">خسرو شکیبا</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Team;
