const http  = require('http')
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
        console.log('listen',...args);
        const server = http.createServer((req, res) => {
            //创建上下文
            console.log('上下文'); //??? 
            let ctx = this.createContext(req,res)
            // this.callback(req, res);
            this.callback(ctx)
            //响应
            res.end(ctx.body)
        });
        server.listen(...args)
    }
    use (callback) {
        console.log('use', JSON.stringify(callback));
        this.callback = callback
    }
    createContext(req, res) {
        // console.log('createContext',req);
        const ctx = Object.create(context) //4个方法
        ctx.resquest = Object.create(request)
        ctx.response = Object.create(response)
        console.log(1,Object.create(context));
        console.log(2,Object.create(request));
        console.log(3,Object.create(response));
        // console.log('req res' , ctx.resquest ,ctx.response);
        ctx.req =  ctx.resquest.req = req
        ctx.res = ctx.response.res = res
        return ctx
    }
}

module.exports = KKB