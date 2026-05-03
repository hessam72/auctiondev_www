import React from "react";

function contactDetails() {
  return (
    <section className="container-fluid mb-5">
      <div className="row">
        <div className="col-md-3 col-sm-6 border-right py-2 border-bottom">
          <a
            className="scroll-to icon-box text-center mx-auto box-shadow-none px-0"
            href="#map"
          >
            <div className="icon-box-icon">
              <i className="fe-icon-map-pin"></i>
            </div>
            <h3 className="icon-box-title">پیدا کردن ما</h3>
            <p className="icon-box-text font-weight-medium">
              396 Lillian Blvd, Holbrook, NY 11741, USA
            </p>
          </a>
        </div>
        <div className="col-md-3 col-sm-6 py-2 border-right border-bottom">
          <a
            className="icon-box text-center mx-auto box-shadow-none px-0"
            href="tel:+1212477690000"
          >
            <div className="icon-box-icon">
              <i className="fe-icon-phone"></i>
            </div>
            <h3 className="icon-box-title">با ما تماس بگیرید</h3>
            <p className="icon-box-text font-weight-medium">
              +1 (212) 477 690 000
            </p>
          </a>
        </div>
        <div className="col-md-3 col-sm-6 py-2 border-right border-bottom">
          <a
            className="icon-box text-center mx-auto box-shadow-none px-0"
            href="mailto:support@example.com"
          >
            <div className="icon-box-icon">
              <i className="fe-icon-mail"></i>
            </div>
            <h3 className="icon-box-title">به ما ایمیل بزنید</h3>
            <p className="icon-box-text font-weight-medium">
              support@example.com
            </p>
          </a>
        </div>
        <div className="col-md-3 col-sm-6 py-2 border-bottom">
          <a
            className="icon-box text-center mx-auto box-shadow-none px-0"
            href="/"
          >
            <div className="icon-box-icon">
              <i className="fe-icon-facebook"></i>
            </div>
            <h3 className="icon-box-title">ما را دنبال کنید</h3>
            <p className="icon-box-text font-weight-medium">
              Facebook, Twitter, LinkedIn
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
export default contactDetails;
