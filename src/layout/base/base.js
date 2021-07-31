/*
 * @Descripttion:
 * @version:
 * @Author: Tang
 * @Date: 2021-07-31 17:40:42
 * @LastEditors: Tang
 * @LastEditTime: 2021-07-31 18:54:34
 */

import React, { Component } from "react";
import { Layout } from "antd";
import DefineSider from "./sider/sider";
import DefineHeader from "./header/header";
import DefineContent from "./content/content";

require("./base.less");

class BaseLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Layout id="base-layout-container">
        <DefineSider />
        <Layout>
          <DefineHeader />
          <DefineContent />
        </Layout>
      </Layout>
    );
  }
}
export default BaseLayout;
