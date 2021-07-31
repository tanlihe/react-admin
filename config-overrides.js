/*
 * @Descripttion:
 * @version:
 * @Author: Tang
 * @Date: 2021-06-20 12:59:22
 * @LastEditors: Tang
 * @LastEditTime: 2021-07-31 17:27:54
 */
const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
  overrideDevServer,
  /**
   * 支持高阶组件的装饰器模式，
   * 需要安装 @babel/plugin-proposal-decorators 插件
   * 装饰器只能用于 class 声明的组件中
   *
   * vscode 中kennel需要到 code -> 首选项 -> 设置中
   * 搜索 experimentalDecorators，然后勾选来防止代码报红
   */
  addDecoratorsLegacy,
} = require("customize-cra");
const path = require("path");

// 本地服务配置覆盖，port 不生效？？？
const devServerConfig = () => (config) => {
  config = Object.assign({}, config, {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:9989",
        changeOrigin: true,
        secure: false,
      },
    },
  });
  return config;
};

module.exports = {
  webpack: override(
    (config) => {
      let result = Object.assign({}, config, {
        output: {
          path: path.resolve(__dirname, "./build"),
          publicPath: "./",
        },
      });

      // 生产环境不需要 .map 文件
      if (result.mode === "production") {
        result.devtool = "none";
      }
      return result;
    },
    addWebpackAlias({
      "@": path.resolve(__dirname, "src"),
    }),

    // antd 的 按需加载配置
    fixBabelImports("import", {
      libraryName: "antd",
      libraryDirectory: "es",
      style: "css", //或者true, true代表运用less
    }),

    addLessLoader({
      lessOptions: {
        javascriptEnabled: true,
        localIdentName: "[local]--[hash:base64:5]",
      },
    }),

    // 支持高阶组件的装饰器模式
    addDecoratorsLegacy()
  ),

  // devServer 配置，port 的设置貌似无法生效
  devServer: overrideDevServer(devServerConfig()),
};
