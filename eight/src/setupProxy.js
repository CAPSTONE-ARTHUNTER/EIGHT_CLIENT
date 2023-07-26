const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
  app.use(
    createProxyMiddleware('/openapi', {
      target: 'http://www.emuseum.go.kr',
      changeOrigin: true
    })
  )
};