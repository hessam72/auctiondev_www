import React from "react";
import PropTypes from "prop-types";
import Icons from "../Icons";
import { map } from "lodash";

export default function Item({ Menu, route, title, icon, routes, ...props }) {
  if (routes) {
    return (
      <Menu.SubMenu
        key={route}
        icon={
          icon ? (
            <Icons name={icon} style={{ fontSize: "16px", color: "#08c" }} />
          ) : null
        }
        title={title}
        {...props}
      >
        {map(routes, (prop) => {
          return <Item key={prop.route.toString()} Menu={Menu} {...prop} />;
        })}
      </Menu.SubMenu>
    );
  }
  return (
    <Menu.Item
      key={route}
      icon={
        icon ? (
          <Icons name={icon} style={{ fontSize: "16px", color: "#08c" }} />
        ) : null
      }
      {...props}
    >
      {title}
    </Menu.Item>
  );
}

Item.propTypes = {
  Menu: PropTypes.any.isRequired,
  route: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      icon: PropTypes.string,
    })
  ),
};
