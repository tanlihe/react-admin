/*
 * @Descripttion: baseLayout 下 test 测试相关路由配置
 * @version:
 * @Author: Tang
 * @Date: 2021-06-22 00:03:01
 * @LastEditors: Tang
 * @LastEditTime: 2021-07-31 19:57:11
 */
import React from "react";
import Loadable from "react-loadable";

// 暂时不用 loading，因为在加载路由时，出现一个比较难看的过渡，页面有一瞬间的闪烁，因此用一个简单的代替
const DefineLoading = () => {
  return <></>;
};

const DevTest = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: 'DevTest', webpackPrefetch: true */ "@/views/dev/test"
    ),
  loading: DefineLoading,
});

const test = [
  {
    path: "/base/test",
    component: DevTest,
    exact: true,
  },
];

export default test;
