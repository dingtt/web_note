const http = require('http')
const context = require('./context')
const request = require('./request')
const response = require('./response')

class DTT {
    constructor(){
        
    }

    listen(...args) {
        const server = http.createServer((req, res) => {
            let ctx = this.createContext(req,res)
            this.callback(ctx)
            res.end(ctx.body)
        })
        server.listen(...args)
    }

    use(callback) {
        this.callback = callback
    }

    createContext(req,res) {
        const ctx = Object.create(context)
        ctx.request = Object.create(request)
        ctx.response = Object.create(response)
        ctx.req = ctx.request.req = req
        ctx.res = ctx.response.res = res
        // ctx.res = ctx.response.res = res
        return ctx
    }
}

module.exports = DTT