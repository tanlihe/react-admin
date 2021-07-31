/*
 * @Descripttion: 系统界面的路由配置，基础界面 | 登录界面 | 错误界面等
 * @version:
 * @Author: Tang
 * @Date: 2021-07-31 19:37:33
 * @LastEditors: Tang
 * @LastEditTime: 2021-07-31 19:41:50
 */
import BaseLayout from "@/layout/base/base";
import LoginLayout from "@/layout/login/login";
import NotFoundLayout from "@/layout/notFound/notFound";

const layoutConfig = [
  {
    path: "/",
    from: "/",
    to: "/base",
    exact: true,
    redirect: true,
  },
  {
    path: "/base",
    exact: false,
    component: BaseLayout,
  },
  {
    path: "/login",
    exact: true,
    component: LoginLayout,
  },
  {
    path: "/notFound",
    exact: true,
    component: NotFoundLayout,
  },
  {
    path: "*",
    from: "*",
    to: "/notFound",
    exact: true,
    redirect: true,
  },
];

export default layoutConfig;
