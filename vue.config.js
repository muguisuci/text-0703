const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack:{
    devtool: "source-map",
    plugins: [
      sentryWebpackPlugin({
        org: process.env.SENTRY_ORG,
        project: process.env.SENTRY_PROJECT,
        authToken:"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"
      }),
      
      
    ]
  }
})
