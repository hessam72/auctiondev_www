import React from "react";
import PropTypes from "prop-types";
import { Layout, Menu } from "antd";
import Item from "./Item";
import { map } from "lodash";

const { Sider } = Layout;

export default function SliderRight({
  collapsed = false,
  onCollapse,
  onRouteChange,
  routes
}) {
  return (
    <>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu
          onClick={onRouteChange}
          theme="light"
          defaultSelectedKeys={["1"]}
          mode="inline"
        >
           {map(routes,prop=>{
             return (<Item key={prop.route.toString()} Menu={Menu} {...prop} />)
           })}
        </Menu>
      </Sider>
    </>
  );
}

SliderRight.propTypes = {
  collapsed: PropTypes.bool,
  onCollapse: PropTypes.func.isRequired,
  onRouteChange: PropTypes.func.isRequired,
};
