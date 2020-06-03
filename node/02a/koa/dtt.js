const http = require('http')

//koa的目标是用更简单化 流程化 模块化的方式实现回调部分
class DTT {
    listen(...args) {
        const server = http.createServer((req,res) => {
            this.callback(req,res)
        })
        server.listen(...args)
    }
    use(callback) {
        this.callback = callback
    }

}
module.exports = DTT
