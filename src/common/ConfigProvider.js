import React from "react";
import { ConfigProvider } from "antd";
import locale from "antd/es/locale/fa_IR";
import moment from "moment";
moment.locale("fa-IR")
export default (props) => (
  <ConfigProvider direction="rtl" locale={locale} {...props} />
);
