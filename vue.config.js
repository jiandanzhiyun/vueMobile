module.exports = {
    baseUrl: './',
    assetsDir: 'static',
    productionSourceMap: false,
    devServer: {
        open: true,
        host: 'localhost',
        port: 3201,
        https: false,
        proxy: {
            '/api':{
                target:'http://hyt.cdheshiyu.com',
                changeOrigin:true,
                pathRewrite:{
                    '/api':''
                }
            }
        }
    }
}
