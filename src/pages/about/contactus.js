import React from "react";

function Contactus() {
  return (
    <section className="bg-gradient py-4">
      <div
        className="container position-relative bg-no-repeat bg-center py-5 text-center"
        style={{ backgroundImage: " url(/assets/img/pages/dotted-map.png)" }}
      >
        <h2 className="block-title text-white mt-5 mb-4">
          اجازه بدهید
          <small className="text-white">
            ایده های خود را با ما به اشتراک بگذارید و ما ایده های شما را به
            واقعیت تبدیل می کنیم.
          </small>
        </h2>
        <a className="btn btn-light mb-5" href="/contacts">
          تماس با ما
        </a>
      </div>
    </section>
  );
}
export default Contactus;
