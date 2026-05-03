import React from "react";

function Navbar() {
  return (
    <header className="navbar-ghost navbar-floating navbar-sticky">
      <div className="container text-center">
        <a
          className="search-trigger"
          href="#fs-search"
          data-toggle="fullscreen-overlay"
        >
          <i className="fe-icon-search"></i>
        </a>
        <a
          className="menu-trigger"
          href="#fs-menu"
          data-toggle="fullscreen-overlay"
        >
          <span>منو</span>
          <i className="fe-icon-menu"></i>
        </a>
        <a className="navbar-brand d-inline-block" href="/">
          <img src="/assets/img/logo/logo-dark.png" alt="CreateX" />
        </a>
      </div>
    </header>
  );
}
export default Navbar;
