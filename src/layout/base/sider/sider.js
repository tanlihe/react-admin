/*
 * @Descripttion:
 * @version:
 * @Author: Tang
 * @Date: 2021-07-31 18:09:34
 * @LastEditors: Tang
 * @LastEditTime: 2021-07-31 20:46:54
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
            {
              path: "/base/charts/pie",
              title: "饼图",
              icon: "",
              children: [],
            },
          ],
        },
        {
          path: "/base/nestedRoutes",
          title: "嵌套路由",
          icon: "",
          children: [
            {
              path: "/base/nestedRoutes/route1",
              title: "嵌套一级路由",
              icon: "",
              children: [],
            },
            {
              path: "/base/nestedRoutes/route2",
              title: "嵌套二级路由",
              icon: "",
              children: [
                {
                  path: "/base/nestedRoutes/route2/route1",
                  title: "二级路由一",
                  icon: "",
                  children: [],
                },
                {
                  path: "/base/nestedRoutes/route2/route2",
                  title: "二级路由二",
                  icon: "",
                  children: [],
                },
              ],
            },
          ],
        },
        {
          path: "/base/system",
          title: "系统设置",
          icon: "",
          children: [
            {
              path: "/base/system/menu",
              title: "系统菜单",
              icon: "",
              children: [],
            },
            {
              path: "/base/system/user",
              title: "系统用户",
              icon: "",
              children: [],
            },
            {
              path: "/base/system/role/menu",
              title: "角色菜单",
              icon: "",
              children: [],
            },
            {
              path: "/base/system/role/button",
              title: "角色按钮",
              icon: "",
              children: [],
            },
          ],
        },
        {
          path: "/base/test",
          title: "本地测试",
          icon: "",
          children: [],
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
