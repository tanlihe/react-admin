/*
 * @Descripttion:
 * @version:
 * @Author: Tang
 * @Date: 2021-06-20 14:41:31
 * @LastEditors: Tang
 * @LastEditTime: 2021-07-31 18:23:14
 */
import React, { Component } from "react";
import { Menu } from "antd";

// 渲染菜单组件
import renderMenuItem from "./renderMenuItem";

class DefineMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { menuData = [] } = this.props;

    return (
      // 渲染菜单
      <Menu mode="inline" theme="dark">
        {menuData.length && renderMenuItem(menuData)}
      </Menu>
    );
  }
}
export default DefineMenu;
