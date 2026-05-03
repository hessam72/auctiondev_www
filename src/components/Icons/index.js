import React from "react";
import PropTypes from "prop-types";
import {
  RadarChartOutlined,
  PlusOutlined,
  DeleteOutlined,
  ProfileOutlined,
  BlockOutlined,
  ContactsOutlined,
  PieChartOutlined,
  WindowsOutlined,
  CodeSandboxOutlined,
  DesktopOutlined,
  UserSwitchOutlined,
  UserOutlined,
  FolderOpenOutlined,
  DollarOutlined,
  ApiOutlined,
  ShoppingOutlined,
  TeamOutlined,
  AppstoreOutlined,
  ThunderboltOutlined,
  NotificationOutlined,
  StarOutlined,
  AppstoreAddOutlined,
  PictureOutlined,
  LinkOutlined,
  PushpinOutlined,
  EyeOutlined,
  CloudDownloadOutlined,
} from "@ant-design/icons";

export default function Icons({ name, ...props }) {
  switch (name) {
    case "LinkOutlined":
      return <LinkOutlined {...props} />;
    case "CloudDownloadOutlined":
      return <CloudDownloadOutlined {...props} />;
    case "PushpinOutlined":
      return <PushpinOutlined {...props} />;
    case "PictureOutlined":
      return <PictureOutlined {...props} />;
    case "StarOutlined":
      return <StarOutlined {...props} />;
    case "RadarChartOutlined":
      return <RadarChartOutlined {...props} />;
    case "PlusOutlined":
      return <PlusOutlined {...props} />;
    case "DeleteOutlined":
      return <DeleteOutlined {...props} />;
    case "PieChartOutlined":
      return <PieChartOutlined {...props} />;
    case "WindowsOutlined":
      return <WindowsOutlined {...props} />;
    case "TeamOutlined":
      return <TeamOutlined {...props} />;
    case "DesktopOutlined":
      return <DesktopOutlined {...props} />;
    case "ProfileOutlined":
      return <ProfileOutlined {...props} />;
    case "ContactsOutlined":
      return <ContactsOutlined {...props} />;
    case "UserOutlined":
      return <UserOutlined {...props} />;
    case "UserSwitchOutlined":
      return <UserSwitchOutlined {...props} />;
    case "FolderOpenOutlined":
      return <FolderOpenOutlined {...props} />;
    case "BlockOutlined":
      return <BlockOutlined {...props} />;

    case "CodeSandboxOutlined":
      return <CodeSandboxOutlined {...props} />;
    case "DollarOutlined":
      return <DollarOutlined {...props} />;
    case "AppstoreOutlined":
      return <AppstoreOutlined {...props} />;

    case "AppstoreAddOutlined":
      return <AppstoreAddOutlined {...props} />;
    case "ApiOutlined":
      return <ApiOutlined {...props} />;
    case "ShoppingOutlined":
      return <ShoppingOutlined {...props} />;
    case "ThunderboltOutlined":
      return <ThunderboltOutlined {...props} />;
    case "NotificationOutlined":
      return <NotificationOutlined {...props} />;
    case "EyeOutlined ":
      return <EyeOutlined {...props} />;

    default:
      return null;
  }
}

Icons.propTypes = {
  name: PropTypes.oneOf([
    "CloudDownloadOutlined",
    "EyeOutlined",
    "NotificationOutlined",
    "ThunderboltOutlined",
    "PushpinOutlined",
    "StarOutlined",
    "DollarOutlined",
    "CodeSandboxOutlined",
    "FolderOpenOutlined",
    "BlockOutlined",
    "RadarChartOutlined",
    "PlusOutlined",
    "UserOutlined",
    "UserSwitchOutlined",
    "ShoppingOutlined",
    "DeleteOutlined",
    "WindowsOutlined",
    "DesktopOutlined",
    "ContactsOutlined",
    "ProfileOutlined",
    "TeamOutlined",
    "AppstoreOutlined",
    "AppstoreAddOutlined",
    "ApiOutlined",
    "PictureOutlined",
    "LinkOutlined",
  ]),
  twoToneColor: PropTypes.string,
};
