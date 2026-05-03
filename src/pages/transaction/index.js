import React, { useState, useEffect } from "react";
// import {Form } from "antd";
// import http, { Uri } from "../../common/http";

import { get } from "lodash";
// import BraftEditor from "braft-editor";
import Layout from "../../components/Layout/layout";
import Hero from "./hero";

function Transaction({component}) {
  return (
    <Layout>
      <Hero type={component} />
      <section className="bg-parallax">
        <div
          className="bg-parallax-content px-3 py-md-5 mx-auto mt-lg-5 mb-lg-5 text-right container bg-parallax-content py-5 my-3 text-center"
          style={{ maxWidth: "1000px" }}
        >
        <br />
        <br />
        <br />
        </div>
      </section>
    </Layout>
  );
}
export default Transaction;
