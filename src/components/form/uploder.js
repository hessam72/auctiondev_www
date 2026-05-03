import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { UPLOADER } from "../../common/enum/uri_api";
import { Uri } from "../../common/http";
import { get } from "lodash";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 5;
  if (!isLt2M) {
    message.error("Image must smaller than 5MB!");
  }
  return isJpgOrPng && isLt2M;
}

const Uploader = ({ onChange, value }) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    console.log("image", value);
    if (value) setImageUrl(Uri.BASE + "/" + value);
  }, [value]);
  const setState = ({ imageUrl, loading }) => {
    imageUrl && setImageUrl(imageUrl);
    loading && setLoading(loading);
  };
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    console.log("info", info);
    if (info.file.status === "done") {
      onChange(get(info, "file.response.path", ""));
      //  Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) =>
        setState({
          imageUrl,
          loading: false,
        })
      );
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div className="ant-upload-text">انتخاب تصویر</div>
    </div>
  );
  return (
    <Upload
      name="file"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      action={UPLOADER}
      headers={{
        Authorization: localStorage.getItem("auth")
        ? "Bearer " + JSON.parse(localStorage.getItem("auth")).token
        : null,
      }}
      beforeUpload={beforeUpload}
      onChange={handleChange}
    >
      {imageUrl ? (
        <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
      ) : (
        uploadButton
      )}
    </Upload>
  );
};

Uploader.propTypes = {};

export default Uploader;
