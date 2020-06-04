const http  = require('http')
const request = require('./request')
const response = require('./response')
const context = require('./context')

class KKBB {
    //初始化中间件数组
    constructor() {
        this.middlewares = []
    }
    listen(...args) {
        const server = http.createServer(async (req, res) => {
            //创建上下文
            const ctx = this.createContext(req,res)
            // this.callback(req, res);
            // this.callback(ctx)
            //中间件hecheng 
            const fn = this.compose(this.middlewares)
            //异步执行
            await fn(ctx)
            //响应
            res.end(ctx.body)
        });
        server.listen(...args)
    }

    // use (callback) {
    //     this.callback = callback
    // }
    use (middleware) {
        this.middlewares.push(middleware)
    }

    createContext(req, res) {
        const ctx = Object.create(context)
        ctx.resquest = Object.create(request)
        ctx.response = Object.create(response)
        ctx.req = ctx.resquest.req = req
        ctx.res = ctx.response.res = res
        return ctx
    }

    compose(middlewares) {
        //传入上下文
        return function (ctx) {
            return dispatch(0)
            function dispatch(i) {
                let fn = middlewares[i]
                if (!fn) {
                    return Promise.resolve()
                }
                return Promise.resolve(
                    fn(ctx, function next() {
                        // promise完成后，再执行下一个 
                        return dispatch(i + 1)
                    })
                )
            }
        }
    }

}



module.exports = KKBB