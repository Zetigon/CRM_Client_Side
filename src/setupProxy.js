

const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        '/',
            createProxyMiddleware({
            target: 'http://localhost:8000',  // <--- config the url based on your backend server
            changeOrigin: true,
        })
    )
}