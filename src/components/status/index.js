import { Tag } from "antd";
import { get, isArray } from "lodash";
import React from "react";

export default function Status({ status, values }) {
  let find = {};
  if (isArray(values)) {
    find = values.find((f) => `${f.status}` === `${status}`);
  } else {
    find = get(values, `${status}`);
  }
  return (
    <Tag color={get(find, `color`, "default")}>
      {get(find, `title`, status)}
    </Tag>
  );
}
