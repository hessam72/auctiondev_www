import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "antd";

const ModalUi = ({
  toggel,
  setToggel,
  title,
  btnHandleOk,
  content,
  cancel,
  submit,
  btn,
}) => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(toggel || false);
  useEffect(() => {
    setVisible(toggel);
  }, [toggel]);
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setLoading(true);
    btnHandleOk((visibleed, loadinged) => {
      setLoading(loadinged);
      setVisible(visibleed);
      setToggel && setToggel(visibleed);
    });
  };

  const handleCancel = () => {
    setVisible(false);
    setToggel && setToggel(false);
  };
  return (
    <div>
      {btn && (
        <Button type="primary" onClick={showModal}>
          {btn}
        </Button>
      )}
      <Modal
      width="50%"
        visible={visible}
        title={title}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            {cancel}
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            {submit}
          </Button>,
        ]}
      >
        {content}
      </Modal>
    </div>
  );
};

ModalUi.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.element.isRequired,
  cancel: PropTypes.string,
  submit: PropTypes.string,
  btn: PropTypes.string,
  btnHandleOk: PropTypes.func,
};
export default ModalUi;
