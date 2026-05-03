import React from "react";

function Skills() {
  return (
    <section className="d-lg-table bg-secondary">
      <div
        className="d-none d-lg-table-cell align-middle w-50 bg-center bg-no-repeat bg-cover text-center"
        style={{
          backgroundImage: "url(/assets/img/pages/about-skills-bg.jpg)",
        }}
      >
        <a
          className="video-player-button"
          href="https://player.vimeo.com/video/93641234?color=ac32e4&amp;title=0&amp;byline=0&amp;portrait=0"
          data-fancybox
          data-width="1000"
          data-height="563"
        >
          <i className="fe-icon-play"></i>
        </a>
        <span className="d-block video-player-label text-muted pt-3">
          برای تماشای ویدئو کلیک کنید!
        </span>
      </div>
      <div className="d-lg-table-cell py-5 my-lg-5 px-2 px-lg-5">
        <div className="p-3">
          <h2 className="h3 block-title mb-4">مهارت های کلیدی ما</h2>
          <p className="text-muted pb-4">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
          {/* Progress*/}
          <div className="progress mb-3">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "60%" }}
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <span>
                <i className="fe-icon-globe"></i>توسعه وب - ٪۶۰
              </span>
            </div>
          </div>
          {/* Progress*/}
          <div className="progress mb-3">
            <div
              className="progress-bar bg-accent"
              role="progressbar"
              style={{ width: "50%" }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <span>
                <i className="fe-icon-monitor"></i>طراح رابط کاربری - ٪۵۰
              </span>
            </div>
          </div>
          {/* Progress*/}
          <div className="progress mb-3">
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={{ width: "45%" }}
              aria-valuenow="45"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <span>
                <i className="fe-icon-edit"></i>ایلاستریتور - ٪۴۵
              </span>
            </div>
          </div>
          {/* Progress*/}
          <div className="progress mb-3">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: "55%" }}
              aria-valuenow="55"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <span>
                <i className="fe-icon-feather"></i>طراحی آیکون - ٪۵۵
              </span>
            </div>
          </div>
          {/* Progress*/}
          <div className="progress mb-3">
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              style={{ width: " 75%" }}
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <span>
                <i className="fe-icon-database"></i>برنامه نویسی سمت سرور - ٪۷۵
              </span>
            </div>
          </div>
          {/* Progress*/}
          <div className="progress mb-3">
            <div
              className="progress-bar bg-danger"
              role="progressbar"
              style={{ width: " 65%" }}
              aria-valuenow="65"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <span>
                <i className="fe-icon-settings"></i>برنامه نویسی سمت کلاینت -
                ٪۶۵
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Skills;
