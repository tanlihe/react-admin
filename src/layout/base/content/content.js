/*
 * @Descripttion:
 * @version:
 * @Author: Tang
 * @Date: 2021-07-31 18:29:06
 * @LastEditors: Tang
 * @LastEditTime: 2021-07-31 20:08:18
 */
import React, { Component } from "react";
// 生成 route 相关信息
import CreateRoutes from "@/components/define/createRoutes/createRoutes";
// 基础路由相关的信息
import baseConfig from "@/router/baseConfig";

require("./content.less");

class DefineContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div id="base-layout-content">{CreateRoutes(baseConfig)}</div>;
  }
}
export default DefineContent;
