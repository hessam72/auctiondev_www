import React from "react";
function Hero() {
  return (
    <section className="bg-parallax py-5">
      <div className="bg-parallax-img" data-parallax='{"y" : 100}'>
        <img
          src="/assets/img/pages/about-hero-bg.png"
          alt="Parallax Background"
        />
      </div>
      <div
        className="bg-parallax-content px-3 py-5 mx-auto mt-4 mb-4 text-center"
        style={{ maxWidth: "800px" }}
      >
        <h1 className="pt-2">خدمات ما</h1>
        <p className="text-xl opacity-80 pb-3">
          ما از سال 2007 با ارائه خدمات با کیفیت در زمینه طراحی و توسعه وب همراه
          شما هستیم
        </p>
      </div>
    </section>
  );
}
export default Hero;
