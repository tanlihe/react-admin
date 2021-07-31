/*
 * @Descripttion:
 * @version:
 * @Author: Tang
 * @Date: 2021-07-31 18:24:25
 * @LastEditors: Tang
 * @LastEditTime: 2021-07-31 18:26:15
 */
import React, { Component } from "react";

require("./header.less");

class DefineHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <header id="base-layout-header">Header</header>;
  }
}
export default DefineHeader;
