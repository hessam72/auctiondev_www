import React from "react";
import PropTypes from "prop-types";
import { Popconfirm, message } from "antd";
import label from "../../common/translate/fa/label";
import { remove } from "lodash";

export default function Delete({
  title = "Are you sure delete this task?",
  ok = "Yes",
  no = "No",
  http,
  url,
  remove,
  data,
  method,
  ...props
}) {
  function confirm(e) {
    message.loading({ content: label.message.loading, key: url, duration: 5 });
    http[method](url)
      .then((res) => {
        message.success({
          content: label.message.success,
          key: url,
          duration: 2,
        });
        remove();
      })
      .catch((err) => {
        console.log(err);
        message.error(label.message.errorMessage);
      });
  }

  function cancel(e) {
    message.error(label.message.cancelRow);
  }

  return (
    <Popconfirm
      title={title}
      onConfirm={confirm}
      onCancel={cancel}
      okText={ok}
      cancelText={no}
      {...props}
    />
  );
}

Delete.propTypes = {
  title: PropTypes.string,
  ok: PropTypes.string,
  no: PropTypes.string,
  http: PropTypes.any,
  url: PropTypes.any,
  data: PropTypes.object,
  method: PropTypes.string,
  remove: PropTypes.func,
};
