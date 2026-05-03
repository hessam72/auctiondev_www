import React from "react";
import {ClintUri} from "../../common/enum/uri_api";

function Menu() {
  return (
    <div>
      {/*  Full Screen Search*/}
      <div
        className="fs-overlay-wrapper"
        id="fs-search"
        style={{ backgroundImage: "url(/assets/img/fs-overlay-bg.png)" }}
      >
        <span className="fs-overlay-close">
          <i className="fe-icon-x"></i>
        </span>
        <div className="fs-overlay-inner">
          <div className="fs-overlay-content">
            <div className="container">
              <form className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fe-icon-search"></i>
                  </div>
                </div>

                <input
                  className="form-control"
                  type="text"
                  placeholder="جستجو در سایت ..."
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      {/*  Full Screen Menu*/}
      <div
        className="fs-overlay-wrapper"
        id="fs-menu"
        style={{ backgroundImage: "url(/assets/img/fs-overlay-bg.png)" }}
      >
        <span className="fs-overlay-close">
          <i className="fe-icon-x"></i>
        </span>
        <div className="fs-overlay-inner">
          <div className="fs-overlay-content">
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <ul className="list-unstyled">
                    <li className="mb-0">
                      <a className="dropdown-item lead py-2" href={ClintUri}>
                        صفحه اصلی
                      </a>
                    </li>
                    <li className="mb-0">
                      <a className="dropdown-item lead py-2" href="/about">
                        درباره ما
                      </a>
                    </li>
                    <li className="mb-0">
                      <a className="dropdown-item lead py-2" href="/contacts">
                        تماس با ما
                      </a>
                    </li>
                    <li className="mb-0">
                      <a className="dropdown-item lead py-2" href="/helptopics">
                        بخش راهنما
                      </a>
                    </li>
                    <li className="mb-0">
                      <a className="dropdown-item lead py-2" href="/rule">
                       قوانین
                      </a>
                    </li> 
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Menu;
