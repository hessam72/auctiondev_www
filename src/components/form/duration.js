import React from "react";
import PropTypes from "prop-types";
import { Select, Input } from "antd";
import { get } from "lodash";
const { Option } = Select;
export default function Duration({ FormItem, ...props }) {
  const prefixSelector = (
    <FormItem name={`${get(props, "name")}_prefix`} noStyle>
      <Select defaultValue="h" style={{ width: 90 }}>
        <Option value="h">ساعت</Option>
        <Option value="d">روز</Option>
        <Option value="m">ماه</Option>
        <Option value="y">سال</Option>
      </Select>
    </FormItem>
  );
  return (
    <>
      <FormItem {...props}>
        <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
      </FormItem>
    </>
  );
}

Duration.propTypes = {
  FormItem: PropTypes.any,
  name: PropTypes.string,
  label: PropTypes.string,
  rules: PropTypes.any,
};
