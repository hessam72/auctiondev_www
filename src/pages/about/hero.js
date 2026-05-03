import React from "react";

function Hero() {
  return (
    <section className="bg-parallax bg-secondary py-5 mb-5">
      <div className="bg-parallax-img" data-parallax='{"y" : 100}'>
        <img
          src="/assets/img/pages/about-hero-bg.png"
          alt="Parallax Background"
        />
      </div>
      <div className="container bg-parallax-content py-5 my-3 text-center">
        <h1 className="pb-4">
          <span className="d-block h3 font-family-body font-weight-light text-muted mb-2">
            ما پیشرو هستیم
          </span>
         در مزایده و مناقصه
          <span className="d-block h2 font-weight-normal text-muted mt-3">
            از سال 1399
          </span>
        </h1>
        {/* <a className="scroll-to btn btn-gradient" href="#services">
          بیشتر بدانید
        </a> */}
      </div>
    </section>
  );
}
export default Hero;
