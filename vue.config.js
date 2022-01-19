// vue-cli的配置文件
module.exports = {
    devServer: {
        port: 8081,
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changOrigin: true
            }
        }
    },
    configureWebpack: require('./webpack.config')
};