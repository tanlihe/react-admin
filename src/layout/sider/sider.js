/*
 * @Descripttion:
 * @version:
 * @Author: Tang
 * @Date: 2021-07-31 18:09:34
 * @LastEditors: Tang
 * @LastEditTime: 2021-07-31 18:21:12
 */
import React, { Component } from "react";
import { Layout } from "antd";
import DefineMenu from "./menu";

const { Sider } = Layout;

class DefineSider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: [
        {
          path: "/base/dashboard",
          title: "首页",
          icon: "",
          children: [],
        },
        {
          path: "/base/charts",
          title: "图表",
          icon: "",
          children: [
            {
              path: "/base/charts/bar",
              title: "柱形图",
              icon: "",
              children: [],
            },
            {
              path: "/base/charts/line",
              title: "折线图",
              icon: "",
              children: [],
            },
          ],
        },
      ],
    };
  }
  render() {
    const { menuList = [] } = this.state;
    return (
      <Sider>
        {menuList.length && (
          // 渲染菜单界面
          <DefineMenu menuData={menuList} />
        )}
      </Sider>
    );
  }
}
export default DefineSider;
