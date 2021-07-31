/*
 * @Descripttion:
 * @version:
 * @Author: Tang
 * @Date: 2021-06-20 14:41:31
 * @LastEditors: Tang
 * @LastEditTime: 2021-07-31 20:38:09
 */
import React, { Component } from "react";
import { Menu } from "antd";
import { withRouter } from "react-router-dom";

// 渲染菜单组件
import renderMenuItem from "./renderMenuItem";
// 查找当前路径的父级信息
import { findParentRoutes } from "@/utils/routes";

@withRouter
class DefineMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultOpenKeys: [], // 组件初始化时默认展开的菜单项
      openKeys: [], // 组件展开的菜单项
      rootSubmenuKeys: [], // 一级导航菜单可展开的节点 key，用于菜单只能展开一个功能
    };
  }

  // 展开 | 收缩菜单
  onOpenChange(keys) {
    const { rootSubmenuKeys = [], openKeys = [] } = this.state;
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({
        openKeys: keys,
      });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }

  // 点击菜单项，跳转路由
  handleClickMenuItem(options) {
    const { key } = options;
    const { history } = this.props;
    history.push({
      pathname: key,
    });
  }

  // 获取一级导航菜单可展开的节点 key，用于菜单只能展开一个功能
  getRootSubmenuKeys(menuData = []) {
    const rootSubmenuKeys = menuData
      .filter((i) => Array.isArray(i.children))
      .map((i) => i.path);

    this.setState({
      rootSubmenuKeys,
    });
  }

  // 处理菜单展示情况
  dealMenu() {
    const {
      menuData = [],
      location: { pathname = "" },
    } = this.props;

    // 获取一级导航菜单可展开的节点 key，用于菜单只能展开一个功能
    this.getRootSubmenuKeys(menuData);

    // 获取当前路由信息的父级信息
    const routeParentInfo = findParentRoutes(menuData, pathname);
    const openKeys = routeParentInfo.map((i) => i.path);

    // 定义（初始化时）展开的菜单
    this.setState({
      defaultOpenKeys: openKeys,
      openKeys: openKeys,
    });
  }

  componentDidMount() {
    this.dealMenu();
  }

  componentDidUpdate(prevProps) {
    const {
      location: { pathname: prevPathname = "" },
    } = prevProps;
    const {
      location: { pathname = "" },
    } = this.props;
    if (prevPathname !== pathname) {
      this.dealMenu();
    }
  }

  render() {
    const {
      location: { pathname = "" },
      menuData = [],
    } = this.props;

    const { openKeys = [], defaultOpenKeys = [] } = this.state;

    return (
      // 渲染菜单
      <Menu
        mode="inline"
        theme="dark"
        selectedKeys={[pathname]}
        defaultSelectedKeys={[pathname]}
        defaultOpenKeys={defaultOpenKeys}
        openKeys={openKeys}
        onOpenChange={(keys) => this.onOpenChange(keys)}
        onClick={(options) => this.handleClickMenuItem(options)}
      >
        {menuData.length && renderMenuItem(menuData)}
      </Menu>
    );
  }
}
export default DefineMenu;
