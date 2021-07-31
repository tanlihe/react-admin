/*
 * @Descripttion: baseLayout 界面相关路由配置
 * @version:
 * @Author: Tang
 * @Date: 2021-06-20 13:53:09
 * @LastEditors: Tang
 * @LastEditTime: 2021-07-31 20:39:30
 */

import dashboard from "./dashboard";
import charts from "./charts";
import nestedRoute from "./nestedRoute";
import system from "./system";
import devTest from "./devTest";

const baseConfig = [
  ...dashboard,
  ...charts,
  ...nestedRoute,
  ...system,
  ...devTest,

  // 以上均为配到时，重定向到 notFound 页面
  {
    path: "/base/*",
    from: "*",
    to: "/notFound",
    exact: true,
    redirect: true,
  },
];

export default baseConfig;
