import React, { useState, useEffect } from "react";
import {Form } from "antd";
import http, { Uri } from "../../common/http";

import { get } from "lodash";
import BraftEditor from "braft-editor";
import Layout from "../../components/Layout/layout";
import Hero from "./hero";

function About() {
  const [content, setContent] = useState("");
  const [preLoading, setPreLoading] = useState(false);
  const [form] = Form.useForm();
  useEffect(() => {
    if (!preLoading) {
      setPreLoading(true);
    }
    http
      .get(Uri["ABOUT"])
      .then((response) => {
        setPreLoading(false);
        setContent(
          BraftEditor.createEditorState(
            get(response, "data.content", "")
          ).toHTML()
        );
      })
      .catch((err) => {
        setPreLoading(false);
        //  history.push(`/${get(err, "response.status", null)}`);
      });
  }, []);

  return (
    <Layout>
      <Hero />
      <section className="bg-parallax">
        <div
          className="bg-parallax-content px-3 py-md-5 mx-auto mt-lg-5 mb-lg-5 text-right"
          style={{ maxWidth: "1000px" }}
        >
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </section>
    </Layout>
  );
}

export default About;
