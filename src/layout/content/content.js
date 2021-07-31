/*
 * @Descripttion:
 * @version:
 * @Author: Tang
 * @Date: 2021-07-31 18:29:06
 * @LastEditors: Tang
 * @LastEditTime: 2021-07-31 18:30:53
 */
import React, { Component } from "react";

require("./content.less");

class DefineContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div id="base-layout-content">Content</div>;
  }
}
export default DefineContent;
