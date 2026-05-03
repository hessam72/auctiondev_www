import { Tag } from "antd";
import { get, isArray } from "lodash";
import React from "react";

export default function Role({ value }) {
  let find = {
    admin: "مدیریت",
    super_admin: "مدیر ارشد",
    support: "پشتیبان",
  };
  let color = {
    admin: "green",
    super_admin: "blue",
    support: "primary",
  };

  return (
    <Tag color={get(color, `${value}`, "red")}>
      {get(find, `${value}`, "کاربر")}
    </Tag>
  );
}
