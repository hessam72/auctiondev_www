import React from "react";
import PropTypes from "prop-types";
import { Input, TreeSelect, Select, InputNumber, Switch } from "antd";
import { get } from "lodash";
import * as FormType from "./enum/type";
import Uploader from "./uploder";
import Duration from "./duration";
import TextEditor from "./text_editor";
import Attach from "./attach";
import Tags from "./tags";

import RangePicker from "./DatePicker/RangePicker";
import DatePicker from "./DatePicker/DatePicker";

export default function Maker({ form, FormItem, item }) {
  const type = get(item, "type");
  switch (type) {
    case FormType.TEXTEDITOR: {
      const { TextArea } = Input;
      const modules = {
        toolbar: [
          ["bold", "italic", "underline", "strike"], // toggled buttons
          ["blockquote", "code-block"], // blocks
          [{ header: 1 }, { header: 2 }], // custom button values
          [{ list: "ordered" }, { list: "bullet" }], // lists
          [{ script: "sub" }, { script: "super" }], // superscript/subscript
          [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
          [{ direction: "rtl" }], // text direction
          [{ size: ["small", false, "large", "huge"] }], // custom dropdown
          [{ header: [1, 2, 3, 4, 5, 6, false] }], // header dropdown
          [{ color: [] }, { background: [] }], // dropdown with defaults
          [{ font: [] }], // font family
          [{ align: [] }], // text align
          ["clean"], // remove formatting
        ],
      };

      const formats = [
        "header",
        "font",
        "background",
        "color",
        "code",
        "size",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "script",
        "align",
        "direction",
        "link",
        "image",
        "code-block",
        "formula",
        "video",
      ];
      return (
        <FormItem
          name={get(item, "name")}
          label={get(item, "title")}
          rules={get(item, "rules", null)}
        >
          {/* <TextArea /> */}
          <TextEditor  />
        </FormItem>
      );
    }
    case FormType.TEXTAREA: {
      const { TextArea } = Input;
      return (
        <FormItem
          name={get(item, "name")}
          label={get(item, "title")}
          rules={get(item, "rules", null)}
        >
          <TextArea />
        </FormItem>
      );
    }
    case FormType.TEXT:
      return (
        <FormItem
          name={get(item, "name")}
          label={get(item, "title")}
          rules={get(item, "rules", null)}
        >
          <Input />
        </FormItem>
      );
    case FormType.DATE:
      return (
        <FormItem
          name={get(item, "name")}
          label={get(item, "title")}
          rules={get(item, "rules", null)}
        >
          <DatePicker locale="fa"  />
        </FormItem>
      );
    case FormType.RangePicker:
      return (
        <FormItem
          name={get(item, "name")}
          label={get(item, "title")}
          rules={get(item, "rules", null)}
        >
          <RangePicker locale="en" />
        </FormItem>
      );
    case FormType.SWITCH:
      return (
        <FormItem
          name={get(item, "name")}
          label={get(item, "title")}
          rules={get(item, "rules", null)}
        >
          <Switch
            ref={get(item, "ref", null)}
            unCheckedChildren="غیر رایگان"
            checkedChildren="رایگان"
          />
        </FormItem>
      );
    case FormType.PASSWORD:
      return (
        <FormItem
          name={get(item, "name")}
          label={get(item, "title")}
          rules={get(item, "rules", null)}
        >
          <Input.Password />
        </FormItem>
      );
    case FormType.NUMBER:
      return (
        <FormItem
          name={get(item, "name")}
          label={get(item, "title")}
          rules={get(item, "rules", null)}
        >
          <InputNumber style={{ width: "100%" }} />
        </FormItem>
      );
    case FormType.DURATION:
      return (
        <Duration
          FormItem={FormItem}
          name={get(item, "name")}
          label={get(item, "title")}
          rules={get(item, "rules", null)}
        />
      );
    case FormType.HIDDEN:
      return (
        <FormItem
          name={get(item, "name")}
          label={get(item, "title")}
          rules={get(item, "rules", null)}
          style={{ display: "none" }}
        >
          <Input style={{ display: "none" }} />
        </FormItem>
      );
    case FormType.TREESELECT:
      return (
        <FormItem name={get(item, "name")} label={get(item, "title")}>
          <TreeSelect treeData={get(item, "initialValue")} />
        </FormItem>
      );
    case FormType.SELECT:
      return (
        <FormItem name={get(item, "name")} label={get(item, "title")}>
          <Select
            defaultValue={get(item, "defaultValue", null)}
            options={get(item, "initialValue")}
          />
        </FormItem>
      );
    case FormType.TAG:
      return (
        <FormItem name={get(item, "name")} label={get(item, "title")}>
          <Tags options={get(item, "initialValue")} />
        </FormItem>
      );
    case FormType.UPLODER: {
      return (
        <div>
          <FormItem
            name={get(item, "name")}
            label={get(item, "title")}
            rules={get(item, "rules", null)}
          >
            <Uploader
            // onChange={(res) => {
            //   form.setFieldsValue({ [get(item, "name")]: res.path });
            // }}
            />
            {/* <Input style={{ display: "none" }} /> */}
          </FormItem>
        </div>
      );
    }
    case FormType.ATTACH: {
      return (
        <div>
          <FormItem
            name={get(item, "name")}
            label={get(item, "title")}
            rules={get(item, "rules", null)}
            // style={{ display: "none" }}
          >
            <Attach />
          </FormItem>
        </div>
      );
    }

    default:
      return <div></div>;
  }
}

Maker.propTypes = {
  form: PropTypes.any.isRequired,
  item: PropTypes.object.isRequired,
  FormItem: PropTypes.element.isRequired,
};
