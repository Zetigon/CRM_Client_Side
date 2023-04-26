const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        '/api',
            createProxyMiddleware({
            target: '*', // <--- config the url based on your backend server
            changeOrigin: true,
        })
    )
}