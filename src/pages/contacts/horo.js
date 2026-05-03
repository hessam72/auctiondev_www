import React from "react";

function Hero() {
  return (
    <section className="bg-parallax py-5">
      <span className="bg-overlay" style={{ opacity: ".6" }}></span>
      <div className="bg-parallax-img" data-parallax='{"y" : 100}'>
        <img
          src="/assets/img/pages/contacts-hero-bg.jpg"
          alt="Parallax Background"
        />
      </div>
      <div
        className="bg-parallax-content px-3 py-md-5 mx-auto mt-lg-5 mb-lg-5 text-center"
        style={{ maxWidth: "800px" }}
      >
        <h1 className="text-white pt-2">با ما در تماس باشید!</h1>
        <p className="text-xl text-white opacity-80 pb-3">
          ایده های خود را با ما به اشتراک بگذارید.
        </p>
      </div>
    </section>
  );
}
export default Hero;
