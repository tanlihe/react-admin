/*
 * @Descripttion:
 * @version:
 * @Author: Tang
 * @Date: 2021-07-31 19:54:40
 * @LastEditors: Tang
 * @LastEditTime: 2021-07-31 20:22:39
 */
import React, { Component } from "react";
import { Button } from "antd";
import { withRouter } from "react-router-dom";

@withRouter
class DevTest extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleLink() {
    const { history } = this.props;
    history.push({
      pathname: "/base/charts/pie",
    });
  }

  render() {
    return (
      <div>
        <h3>本地测试路由</h3>

        <Button onClick={() => this.handleLink()}>跳转</Button>
      </div>
    );
  }
}
export default DevTest;
