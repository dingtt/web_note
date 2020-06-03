const http = require("http");

// class KKB {
//     listen(...args) {
//         const server = http.createServer((req, res) => {
//             this.callback(req, res);
//         });
//         server.listen(...args);
//     }
//     use(callback) {
//         this.callback = callback;
//     }
// }
// module.exports = KKB
const request = require('./request')
const response = require('./response')
const context = require('./context')

class KKB {
    listen(...args) {
        const server = http.createServer((req, res) => {
            //创建上下文
            const ctx = this.createContext(req,res)
            // this.callback(req, res);
            this.callback(ctx)
            //响应
            res.end(ctx.body)
        });
        
    }
    use (callback) {
        this.callback = callback
    }
    createContext(req, res) {
        const ctx = Object.create(context)
        ctx.resquest = Object.create(request)
        ctx.response = Object.create(response)

        ctx.req = ctx.request.req = req
        ctx.res = ctx.response.res = res

        return ctx
    }

}

module.exports = KKB