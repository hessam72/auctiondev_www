import React, { useState } from "react";
import PropTypes from "prop-types";
import { Upload, message, Button, List, Typography, Tooltip } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { ATTACH, BASE } from "../../common/enum/uri_api";
import { map, get, filter } from "lodash";
import Icons from "../Icons";
import Item from "antd/lib/list/Item";

function beforeUpload(file) {
  const isLt2M = file.size / 1024 / 1024 < 10;
  if (!isLt2M) {
    message.error("Attach must smaller than 10MB!");
  }
  return isLt2M;
}

const Attach = ({ onChange, value, ...props }) => {
  console.log(props);
  const [loading, setLoading] = useState(false);
  const [attach, setAttach] = useState(
    map(value, function (file) {
      return {
        size: get(file, "size", 0),
        name: get(file, "path", "path/filename.zip").match(/^(.*)\/(.*)$/)[2],
        path: get(file, "path"),
        hero: get(file, "hero"),
        free: get(file, "free"),
      };
    }) || []
  );
  const onChangeThis = (items) => {
    onChange(
      map(items, (item) => {
        return {
          path: item.path,
          hero: item.hero,
          free: item.free,
        };
      })
    );
  };
  const setState = (file) => {
    const files = [
      ...attach,
      {
        size: file.size,
        name: file.originalname,
        path: file.path,
        hero: false,
        free: false,
      },
    ];
    setAttach(files);
    setLoading(false);
    onChangeThis(files);
  };
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    console.log("info", info);
    if (info.file.status === "done") {
      setState(info.file.response);
    }
  };
  const changeHero = (file) => {
    const files = filter(attach, (item) => {
      if (file.name === item.name) {
        item.hero = !item.hero;
      }
      return item;
    });
    setAttach(files);
    onChangeThis(files);
  };
  const changeFree = (file) => {
    const files = filter(attach, (item) => {
      if (file.name === item.name) {
        item.free = !item.free;
      }
      return item;
    });
    setAttach(files);
    onChangeThis(files);
  };

  const remove = (file) => {
    const files = filter(attach, (item) => {
      if (file.name === item.name) {
        return false;
      }
      return item;
    });
    setAttach(files);
    onChangeThis(files);
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      انتخاب فایل
    </div>
  );
  return (
    <React.Fragment>
      <Upload
        name="file"
        // listType="picture"
        className="avatar-uploader"
        showUploadList={false}
        action={ATTACH}
        headers={{
          Authorization: localStorage.getItem("auth")
            ? "Bearer " + JSON.parse(localStorage.getItem("auth")).token
            : null,
        }}
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        <Button>{uploadButton}</Button>
      </Upload>
      <List>
        {map(attach, (file) => (
          <List.Item>
            <Tooltip title="برای دانلود کلیک کنید" color={"#000"}>
              <Typography.Text
                onClick={() => {
                  window.open(BASE + "/" + get(file, "path"), "_blank");
                }}
                title={get(file, "path")}
                style={{ cursor: "pointer" }}
              >
                {get(file, "name", "").match(/\.(pdf|zip|rar)$/) ? (
                  <Icons name="LinkOutlined" />
                ) : (
                  <Icons name="PictureOutlined" />
                )}
                {" " + get(file, "name")}
              </Typography.Text>
            </Tooltip>
            <Typography.Text title={"action"}>
              <Tooltip title="حذف کردن">
                <Icons
                  onClick={() => {
                    remove(file);
                  }}
                  name="DeleteOutlined"
                  style={{ fontSize: "18px" }}
                />
              </Tooltip>
              <Tooltip
                title="بدون پرداخت هزینه فایل قابل مشاهده می باشد"
                color={get(file, "free") ? "#52c41a" : "#000"}
              >
                <Icons
                  name="DollarOutlined"
                  onClick={() => {
                    changeFree(file);
                  }}
                  style={{
                    fontSize: "18px",
                    color: get(file, "free") ? "#52c41a" : "#000",
                  }}
                />
              </Tooltip>
              <Tooltip
                title="اولین فایلی که کاربر مشاهده میکند"
                color={get(file, "hero") ? "#52c41a" : "#000"}
              >
                <Icons
                  onClick={() => {
                    changeHero(file);
                  }}
                  name="PushpinOutlined"
                  style={{
                    fontSize: "18px",
                    color: get(file, "hero") ? "#52c41a" : "#000",
                  }}
                />
              </Tooltip>

              <Tooltip title="برای دانلود کلیک کنید" color={"#000"}>
                <Icons
                  onClick={() => {
                    window.open(BASE + "/" + get(file, "path"), "_blank");
                  }}
                  name="CloudDownloadOutlined"
                  style={{
                    fontSize: "18px",
                    color: "#000",
                  }}
                />
              </Tooltip>
            </Typography.Text>
          </List.Item>
        ))}
      </List>
    </React.Fragment>
  );
};

Attach.propTypes = {};

export default Attach;
