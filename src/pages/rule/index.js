import React, { useState, useEffect } from "react";
import { Breadcrumb, Form, Button, notification, Skeleton } from "antd";
import label from "../../common/translate/fa/label";
import FormUi from "../../components/form";
import http, { Uri } from "../../common/http";
import * as FormType from "../../components/form/enum/type";
import { useHistory } from "react-router-dom";
import { get } from "lodash";
import BraftEditor from "braft-editor";
import Layout from "../../components/Layout/layout";
import Contactus from "./contactus";
import Hero from "./hero";
import Partners from "./partners";
import Services from "./services";
import Skills from "./skills";
import Team from "./team";
function About() {
  const [content, setContent] = useState("");
  const [preLoading, setPreLoading] = useState(false);
  const [form] = Form.useForm();
  useEffect(() => {
    if (!preLoading) {
      setPreLoading(true);
    }
    http
      .get(Uri["RULE"])
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
      {/* Services*/}
      {/* <Services /> */}
      {/* Team*/}
      {/* <Team /> */}
      {/* Skills*/}
      {/* <Skills /> */}
      {/* Partners*/}
      {/* <Partners /> */}
      {/* Contact Us CTA */}
      {/* <Contactus /> */}
    </Layout>
  );
}

export default About;
