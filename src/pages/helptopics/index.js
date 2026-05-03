import React from "react";
import Layout from "../../components/Layout/layout";
function Helptopics() {
  return (
    <Layout>
      {/* <!-- Hero--> */}
      <section
        className="bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: "url(/assets/img/pages/help-hero-bg.jpg)" }}
      >
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-7 col-md-8 col-sm-11">
              <div className="wizard">
                <div className="wizard-body">
                  <h1 className="h3 text-center pb-2">
                    چطور میتوانیم کمک کنیم؟
                  </h1>
                  <form className="input-group mb-2" method="get">
                    <div className="input-group-prepend">
                      <div className="input-group-text bg-primary text-white">
                        <i className="fe-icon-search"></i>
                      </div>
                    </div>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="سوالت رو بپرس..."
                    />
                  </form>
                  <p className="text-center m-0 text-sm">
                    سوال بپرسید یا از موضوعات زیر انتخاب کنید.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Topics--> */}
      <section className="container pt-5 pb-4 mb-3">
        <h2 className="h4 block-title mb-4 text-center">
          یک موضوع را انتخاب کنید
        </h2>
        <div className="row pt-2">
          <div className="col-lg-4 col-sm-6 mb-30 pb-2">
            <a className="card" href="help-single-topic.html">
              <img
                className="d-block mx-auto mt-4"
                src="/assets/img/pages/help-icons/01.png"
                style={{ width: "80px" }}
                alt="Managing Account"
              />
              <div className="card-body text-center">
                <h3 className="card-title">مدیریت حساب</h3>
                <p className="card-text text-sm">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد.
                </p>
                <span className="text-sm text-uppercase font-weight-bold">
                  مشاهده موضوع&nbsp;<i className="fe-icon-arrow-left"></i>
                </span>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6 mb-30 pb-2">
            <a className="card" href="help-single-topic.html">
              <img
                className="d-block mx-auto mt-4"
                src="/assets/img/pages/help-icons/02.png"
                style={{ width: "80px" }}
                alt="Working with Dashboard"
              />
              <div className="card-body text-center">
                <h3 className="card-title">کار با داشبورد</h3>
                <p className="card-text text-sm">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد.
                </p>
                <span className="text-sm text-uppercase font-weight-bold">
                  مشاهده موضوع&nbsp;<i className="fe-icon-arrow-left"></i>
                </span>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6 mb-30 pb-2">
            <a className="card" href="help-single-topic.html">
              <img
                className="d-block mx-auto mt-4"
                src="/assets/img/pages/help-icons/03.png"
                style={{ width: "80px" }}
                alt="Payment Methods"
              />
              <div className="card-body text-center">
                <h3 className="card-title">روش های پرداخت</h3>
                <p className="card-text text-sm">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد.
                </p>
                <span className="text-sm text-uppercase font-weight-bold">
                  مشاهده موضوع&nbsp;<i className="fe-icon-arrow-left"></i>
                </span>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6 mb-30 pb-2">
            <a className="card" href="help-single-topic.html">
              <img
                className="d-block mx-auto mt-4"
                src="/assets/img/pages/help-icons/04.png"
                style={{ width: "80px" }}
                alt="Delivery Information"
              />
              <div className="card-body text-center">
                <h3 className="card-title">اطلاعات تحویل</h3>
                <p className="card-text text-sm">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد.
                </p>
                <span className="text-sm text-uppercase font-weight-bold">
                  مشاهده موضوع&nbsp;<i className="fe-icon-arrow-left"></i>
                </span>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6 mb-30 pb-2">
            <a className="card" href="help-single-topic.html">
              <img
                className="d-block mx-auto mt-4"
                src="/assets/img/pages/help-icons/05.png"
                style={{ width: "80px" }}
                alt="Refund Policy"
              />
              <div className="card-body text-center">
                <h3 className="card-title">سیاست بازپرداخت</h3>
                <p className="card-text text-sm">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد.
                </p>
                <span className="text-sm text-uppercase font-weight-bold">
                  مشاهده موضوع&nbsp;<i className="fe-icon-arrow-left"></i>
                </span>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6 mb-30 pb-2">
            <a className="card" href="help-single-topic.html">
              <img
                className="d-block mx-auto mt-4"
                src="/assets/img/pages/help-icons/06.png"
                style={{ width: "80px" }}
                alt="Affiliate Program"
              />
              <div className="card-body text-center">
                <h3 className="card-title">برنامه های وابسته</h3>
                <p className="card-text text-sm">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد.
                </p>
                <span className="text-sm text-uppercase font-weight-bold">
                  مشاهده موضوع&nbsp;<i className="fe-icon-arrow-left"></i>
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>
      {/* <!-- FAQ--> */}
      <section className="container pb-5 mb-1">
        <h2 className="h4 block-title mb-4 text-center">سوالات متداول</h2>
        <div className="row pt-3">
          <div className="col-sm-6">
            <ul className="list-icon text-xl">
              <li className="border-bottom pb-2">
                <i className="fe-icon-file-text text-muted"></i>
                <a className="text-lg navi-link" href="help-single-topic.html">
                  چه مدت تحویل داده خواهد شد؟
                </a>
              </li>
              <li className="border-bottom pb-2">
                <i className="fe-icon-file-text text-muted"></i>
                <a className="text-lg navi-link" href="help-single-topic.html">
                  چه روش های پرداختی را قبول می کنید؟
                </a>
              </li>
              <li className="border-bottom pb-2">
                <i className="fe-icon-file-text text-muted"></i>
                <a className="text-lg navi-link" href="help-single-topic.html">
                  آیا شما کشتی بین المللی دارید؟
                </a>
              </li>
              <li className="border-bottom pb-2">
                <i className="fe-icon-file-text text-muted"></i>
                <a className="text-lg navi-link" href="help-single-topic.html">
                  آیا برای ایجاد یک سفارش نیاز به یک حساب کاربری دارید؟
                </a>
              </li>
              <li className="border-bottom pb-2">
                <i className="fe-icon-file-text text-muted"></i>
                <a className="text-lg navi-link" href="help-single-topic.html">
                  چگونه می توانم سفارش خود را پیگیری کنم؟
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-6">
            <ul className="list-icon text-xl">
              <li className="border-bottom pb-2">
                <i className="fe-icon-file-text text-muted"></i>
                <a className="text-lg navi-link" href="help-single-topic.html">
                  شرایط بازپرداخت محصول چیست؟
                </a>
              </li>
              <li className="border-bottom pb-2">
                <i className="fe-icon-file-text text-muted"></i>
                <a className="text-lg navi-link" href="help-single-topic.html">
                  آیا برای مشتریان تخفیف دارید؟
                </a>
              </li>
              <li className="border-bottom pb-2">
                <i className="fe-icon-file-text text-muted"></i>
                <a className="text-lg navi-link" href="help-single-topic.html">
                  برنامه ارجاع شما چگونه کار می کند؟
                </a>
              </li>
              <li className="border-bottom pb-2">
                <i className="fe-icon-file-text text-muted"></i>
                <a className="text-lg navi-link" href="help-single-topic.html">
                  از کجا می توانم فاکتورها را برای سفارشاتم مشاهده کنم؟
                </a>
              </li>
              <li className="border-bottom pb-2">
                <i className="fe-icon-file-text text-muted"></i>
                <a className="text-lg navi-link" href="help-single-topic.html">
                  آیا بعد از خرید پشتیبانی فنی می کنید؟
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!-- Submit Request--> */}
      <section className="container pb-5 mb-3">
        <div
          className="alert alert-image-bg text-center py-5 px-4"
          style={{
            backgroundImage: "url(/assets/img/pages/help-section-bg.jpg)",
          }}
        >
          <h2 className="h4 block-title mb-4">
            آیا جواب را پیدا نکرده اید؟ ما می توانیم کمک کنیم.
          </h2>
          <p className="pb-3">
            با ما تماس بگیرید و ما در اسرع وقت با شما تماس خواهیم گرفت.
          </p>
          <a className="btn btn-primary" href="help-submit-request.html">
            ارسال درخواست
          </a>
        </div>
      </section>
    </Layout>
  );
}

export default Helptopics;
