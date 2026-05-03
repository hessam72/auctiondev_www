import React from "react";

function contactFrom() {
  return (
    <section className="container mb-5 pb-3">
      <div className="wizard">
        <div className="wizard-body pt-3">
          <h2 className="h4 text-center">تماس با ما</h2>
          <p className="text-muted text-center">
            ما در اسرع وقت با شما تماس خواهیم گرفت
          </p>
          <form className="needs-validation" novalidate>
            <div className="row pt-3">
              <div className="col-sm-6">
                <div className="form-group">
                  <label for="contact-name">
                    نام و نام خانوادگی{" "}
                    <span className="text-danger font-weight-medium">*</span>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="contact-name"
                    placeholder="جلال بهرامی راد"
                    required
                  />
                  <div className="invalid-feedback">
                    لطفا نام خود را وارد کنید!
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label for="contact-email">
                    ایمیل شما{" "}
                    <span className="text-danger font-weight-medium">*</span>
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    id="contact-email"
                    placeholder="example@email.com"
                    required
                  />
                  <div className="invalid-feedback">
                    لطفا یک آدرس ایمیل معتبر وارد کنید!
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label for="contact-subject">موضوع</label>
                  <input
                    className="form-control"
                    type="text"
                    id="contact-subject"
                    placeholder="عنوان کوتاهی درخواست کنید"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label for="contact-file">ضمیمه</label>
                  <div className="custom-file">
                    <input
                      className="custom-file-input"
                      type="file"
                      id="contact-file"
                    />
                    <label className="custom-file-label" for="contact-file">
                      انتخاب فایل...
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label for="contact-message">
                پیام <span className="text-danger font-weight-medium">*</span>
              </label>
              <textarea
                className="form-control"
                rows="7"
                id="contact-message"
                placeholder="بگذارید بیشتر بدانیم که ذهن شما چیست ..."
                required
              ></textarea>
              <div className="invalid-feedback">لطفا یک پیام بنویسید!</div>
            </div>
            <div className="text-center">
              <button className="btn btn-primary" type="submit">
                فرستادن پیام
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
export default contactFrom;
