const { createProxyMiddleware } = require('http-proxy-middleware');

const hotUpdatePathRegex = /\/dist\/.*hot-update\.(js|json)$/i;
const hotUpdatePathFilter = function (pathname, req) {
    return pathname.match(hotUpdatePathRegex) && req.method === 'GET';
}

const handleProxyReq = function (proxyReq, req, res) {
    res.on('close', () => {
        // client aborts the request, abortthe request to the target server
        if (!res.finished) proxyReq.destroy();
    })
}

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:8090',
            changeOrigin: true,
            onProxyReq: handleProxyReq,
        })
    );

    app.use(
        createProxyMiddleware(hotUpdatePathFilter, {
            pathRewrite: { "/dist/": "/" },
            target: 'http://localhost:3000',
            changeOrigin: true,
        })
    );
}