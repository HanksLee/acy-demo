const {
  override,
  fixBabelImports,
  addWebpackAlias,
  overrideDevServer,
  addBabelPlugins
} = require("customize-cra");
const rewireReactHotLoader = require('react-app-rewire-hot-loader-for-customize-cra');
const path = require("path");

module.exports = {
  webpack: override(
    fixBabelImports("babel-plugin-import", {
      libraryName: "antd",
      style: "css"
    }),
    rewireReactHotLoader(),
    addWebpackAlias({
      ["@"]: path.resolve(__dirname, "src")
    }),
    addBabelPlugins(['@babel/plugin-syntax-dynamic-import', { legacy: true }],),
  ),
  devServer: overrideDevServer()
}