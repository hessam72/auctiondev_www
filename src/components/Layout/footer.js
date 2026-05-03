import React from "react";

function Footer() {
  return (
    <footer className="container pt-3"> 
      <hr />
      <div className="d-md-flex justify-content-between align-items-center py-4 text-center text-md-right">
        <div className="order-2">
          <a className="footer-link" href="/about">
            درباره ما
          </a>
          <a className="footer-link mr-3" href="/helptopics">
            کمک و اطلاعات
          </a>
          <a className="footer-link mr-3" href="/rule">
            حریم خصوصی
          </a>
        </div>
        <p className="m-0 text-sm order-1">
          <span className="opacity-60">همه حقوق محفوظ است.© </span>{" "}
          <i className="d-inline-block align-middle fe-icon-heart text-danger"></i>{" "}
          <a
            href="http://sajadweb.ir/"
            className="d-inline-block nav-link text-danger opacity-60 p-0"
            target="_blank"
            rel="noopener noreferrer"
          >
           سجاد محمدی نژاد
          </a>
        </p>
      </div>
    </footer>
  );
}
export default Footer;
