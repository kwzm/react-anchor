const path = require('path')
const merge = require('webpack-merge')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const commonConfig = require('./webpack.common.config')

module.exports = merge(commonConfig, {
  mode: 'production',
  entry: path.resolve(__dirname, '../src/Anchor.js'),
  output: {
    filename: 'Anchor.js',
    path: path.resolve(__dirname, '../dist'),
    libraryTarget: 'commonjs2'
  },
  externals: ['react'],
  plugins: [
    new BundleAnalyzerPlugin()
  ]
})