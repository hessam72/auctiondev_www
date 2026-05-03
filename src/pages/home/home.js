import React from "react";
import Layout from "./Layout/layout";
function MobileApp() {
  return (
    <Layout>
      <section className="pt-2">
        <div
          className="bg-center-top bg-no-repeat mt-md-5 pt-5"
          style={{
            backgroundImage:
              "url(/assets/img/homepages/mobile-app-showcase/hero-bg.png)",
          }}
        >
          <div className="container pt-5 pb-5 pb-md-2">
            <div className="row">
              <div className="col-lg-7 col-md-6">
                <img
                  className="d-block mx-auto mr-md-5"
                  src="/assets/img/homepages/mobile-app-showcase/hero-device.png"
                  alt="CreateX App"
                />
              </div>
              <div className="col-lg-5 col-md-6 pt-md-5 text-center text-md-right">
                <h1 className="pt-md-5 pb-md-4">
                  برنامه ای برای شیوه زندگی شما
                </h1>
                <a
                  className="video-player-button bg-gradient text-white my-3 ml-3"
                  href="https://player.vimeo.com/video/93641234?color=ac32e4&amp;title=0&amp;byline=0&amp;portrait=0"
                  data-fancybox
                  data-width="1000"
                  data-height="563"
                >
                  <i className="fe-icon-play"></i>
                </a>
                <span className="video-player-label">
                  برای تماشای ویدئو کلیک کن
                </span>
                <div className="pt-4 mt-md-3">
                  <a className="market-btn apple-btn ml-3 mb-3" href="/">
                    <span className="mb-subtitle">دانلود از</span>
                    <span className="mb-title">App Store</span>
                  </a>
                  <a className="market-btn google-btn mb-3" href="/">
                    <span className="mb-subtitle">دانلود از</span>
                    <span className="mb-title">Google Play</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="bg-center-top bg-no-repeat"
        style={{
          backgroundImage:
            "url(/assets/img/homepages/mobile-app-showcase/features-bg.png)",
        }}
      >
        {/*  Features*/}
        <div className="container pb-5">
          <h2 className="h3 block-title text-center">
            ویژگیهای عالی<small>برخی از ویژگیهای برنامه ما</small>
          </h2>
          <div className="row pt-3">
            <div className="col-lg-4 col-sm-6 mb-30">
              {/*  Icon Box*/}
              <div className="icon-box text-center bg-white box-shadow mx-auto">
                <div className="icon-box-icon">
                  <i className="fe-icon-award"></i>
                </div>
                <h3 className="icon-box-title">برنده جایزه طراحی</h3>
                <p className="icon-box-text text-sm">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است.
                </p>
                <a className="icon-box-link" href="/">
                  بیشتر بدانید<i className="fe-icon-arrow-left"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-30">
              {/*  Icon Box*/}
              <div className="icon-box text-center bg-white box-shadow mx-auto">
                <div className="icon-box-icon">
                  <i className="fe-icon-trending-up"></i>
                </div>
                <h3 className="icon-box-title">عملکرد بالا</h3>
                <p className="icon-box-text text-sm">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است.
                </p>
                <a className="icon-box-link" href="/">
                  بیشتر بدانید<i className="fe-icon-arrow-left"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-30">
              {/*  Icon Box*/}
              <div className="icon-box text-center bg-white box-shadow mx-auto">
                <div className="icon-box-icon">
                  <i className="fe-icon-bell"></i>
                </div>
                <h3 className="icon-box-title">اعلان های هوشمند</h3>
                <p className="icon-box-text text-sm">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است.
                </p>
                <a className="icon-box-link" href="/">
                  بیشتر بدانید<i className="fe-icon-arrow-left"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-30">
              {/*  Icon Box*/}
              <div className="icon-box text-center bg-white box-shadow mx-auto">
                <div className="icon-box-icon">
                  <i className="fe-icon-mic"></i>
                </div>
                <h3 className="icon-box-title">ساخته شده برای ضبط صدا</h3>
                <p className="icon-box-text text-sm">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است.
                </p>
                <a className="icon-box-link" href="/">
                  بیشتر بدانید<i className="fe-icon-arrow-left"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-30">
              {/*  Icon Box*/}
              <div className="icon-box text-center bg-white box-shadow mx-auto">
                <div className="icon-box-icon">
                  <i className="fe-icon-upload-cloud"></i>
                </div>
                <h3 className="icon-box-title">ذخیره فایل‌های ابری</h3>
                <p className="icon-box-text text-sm">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است.
                </p>
                <a className="icon-box-link" href="/">
                  بیشتر بدانید<i className="fe-icon-arrow-left"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-30">
              {/*  Icon Box*/}
              <div className="icon-box text-center bg-white box-shadow mx-auto">
                <div className="icon-box-icon">
                  <i className="fe-icon-shopping-bag"></i>
                </div>
                <h3 className="icon-box-title">خرید از برنامه</h3>
                <p className="icon-box-text text-sm">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است.
                </p>
                <a className="icon-box-link" href="/">
                  بیشتر بدانید<i className="fe-icon-arrow-left"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*  Screenshots*/}
        <div className="container pb-3 pt-lg-2">
          <h2 className="h3 block-title text-center">
            عکسها
            <small>
              برای دیدن اینکه آیا آن را دوست دارید، به تصاویر برنامه نگاه کنید
            </small>
          </h2>
        </div>
      </section>
      <div className="container-fluid pb-5">
        <div
          className="owl-carousel carousel-flush"
          data-owl-carousel='{ "rtl": true, "nav": false, "dots": true, "autoHeight": true, "responsive": {"0":{"items":1},"500":{"items":2},"920":{"items":3},"1200":{"items":4},"1400":{"items":5}} }'
        >
          <figure className="figure mb-4">
            <img
              className="figure-img"
              src="/assets/img/homepages/mobile-app-showcase/screens/01.jpg"
              alt="Onboarding Screen"
            />
            <figcaption className="figure-caption text-center">
              پیشنمایش ورود به برنامه
            </figcaption>
          </figure>
          <figure className="figure mb-4">
            <img
              className="figure-img"
              src="/assets/img/homepages/mobile-app-showcase/screens/02.jpg"
              alt="Playlist Screen"
            />
            <figcaption className="figure-caption text-center">
              پیشنمایش لیست پخش
            </figcaption>
          </figure>
          <figure className="figure mb-4">
            <img
              className="figure-img"
              src="/assets/img/homepages/mobile-app-showcase/screens/03.jpg"
              alt="Playlist Scroll Screen"
            />
            <figcaption className="figure-caption text-center">
              لیست پخش اسکرول به بالا
            </figcaption>
          </figure>
          <figure className="figure mb-4">
            <img
              className="figure-img"
              src="/assets/img/homepages/mobile-app-showcase/screens/04.jpg"
              alt="Player 1 Screen"
            />
            <figcaption className="figure-caption text-center">
              پیشنمایش پخش کننده 1
            </figcaption>
          </figure>
          <figure className="figure mb-4">
            <img
              className="figure-img"
              src="/assets/img/homepages/mobile-app-showcase/screens/05.jpg"
              alt="Player 2 Screen"
            />
            <figcaption className="figure-caption text-center">
              پیشنمایش پخش کننده 2
            </figcaption>
          </figure>
        </div>
      </div>
      {/*  Tablet Version*/}
      <section className="container pt-lg-2 pb-5">
        <div className="row align-items-center">
          <div className="col-xl-4 offset-xl-2 col-lg-6 col-md-5 pb-4 text-center text-md-right">
            <h2 className="h3">قادر در اجرا بر روی تبلت</h2>
            <p className="text-muted pt-3 pb-4">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد.
            </p>
            <div className="text-md-nowrap">
              <a className="market-btn apple-btn ml-3 mb-3" href="/">
                <span className="mb-subtitle">دانلود از</span>
                <span className="mb-title">App Store</span>
              </a>
              <a className="market-btn google-btn mb-3" href="/">
                <span className="mb-subtitle">دانلود از</span>
                <span className="mb-title">Google Play</span>
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-7">
            <img
              src="/assets/img/homepages/mobile-app-showcase/tablet-app.jpg"
              alt="Tablet Version"
            />
          </div>
        </div>
      </section>
      {/*  CTA + Numbers*/}
      <section
        className="bg-center-top bg-no-repeat bg-cover pb-4"
        style={{
          backgroundImage:
            "url(/assets/img/homepages/mobile-app-showcase/cta-bg.jpg)",
        }}
      >
        <div className="container-fluid pb-4">
          <div className="row">
            <div className="col-md-3 col-sm-6 border-white border-right py-5 border-bottom">
              <div
                className="animated-digits text-white mx-auto text-center"
                data-number="10"
              >
                <h5 className="animated-digits-digit text-white">
                  <span>0</span>k+
                </h5>
                <p className="animated-digits-text">کاربران راضی</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 py-5 border-white border-right border-bottom">
              <div
                className="animated-digits text-white mx-auto text-center"
                data-number="98"
              >
                <h5 className="animated-digits-digit text-white">
                  <span>0</span>%
                </h5>
                <p className="animated-digits-text">بازخورد مثبت</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 py-5 border-white border-right border-bottom">
              <div
                className="animated-digits text-white mx-auto text-center"
                data-number="760"
              >
                <h5 className="animated-digits-digit text-white">
                  <span>0</span>+
                </h5>
                <p className="animated-digits-text">دانلود در روز</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 py-5 border-white border-bottom">
              <div
                className="animated-digits text-white mx-auto text-center"
                data-number="25"
              >
                <h5 className="animated-digits-digit text-white">
                  <span>0</span>
                </h5>
                <p className="animated-digits-text">
                  افرادی که پشت این برنامه هستند
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-5 text-center">
          <h2 className="h3 block-title text-white">اکنون دانلود کنید</h2>
          <div className="row justify-content-center pt-3">
            <div className="col-xl-7 col-lg-8 col-md-10">
              <p className="text-white opacity-60 pb-4">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </p>
              <a
                className="market-btn market-btn-light-skin apple-btn mx-2 mb-3"
                href="/"
              >
                <span className="mb-subtitle">دانلود از</span>
                <span className="mb-title">App Store</span>
              </a>
              <a
                className="market-btn market-btn-light-skin google-btn mx-2 mb-3"
                href="/"
              >
                <span className="mb-subtitle">دانلود از</span>
                <span className="mb-title">Google Play</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
export default MobileApp;
