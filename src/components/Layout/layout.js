import React from "react";
import Navbar from "./navbar";
import Menu from "./menu";
import Footer from "./footer";
function Layout(props) {
  return (
    <div className="wrapper">
      <Navbar />
      <Menu />
      {props.children}
      <Footer />
    </div>
  );
}
export default Layout;
