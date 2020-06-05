const http = require('http')
// const DTT = require('./dtt')
const KKB = require('./kkb')
const KKBB = require('./kkb2')


// const server = http.createServer((req,res) => {
//     res.writeHead(200)
//     res.end('hi dtt')
// })

// server.listen(3000,() =>{
//     console.log('监听端口3000');
// })

// const app0 = new DTT()

// app0.use((req,res) => {
//     res.writeHead(200)
//     res.end('hi dtt 3001')
// })
// app0.listen(3001, () => {
//     console.log('监听 3001');
// })

// const app1 = new KKB()
// app1.use( ctx => {
//     console.log('resolve use');
    
//     ctx.body = 'hhh 3002'
// })

// app1.listen(3002, () => {
//     console.log('监听 30022');
// })

// const app2 = new KKBB()
// app2.use( ctx => {
//     ctx.body = 'hhh ggg'
// })

// app2.listen(3003, () => {
//     console.log('监听 3003');
// })

const app2 = new KKBB()
const delay = () => Promise.resolve(resolve => setTimeout(() => resolve(), 2000));

app2.use(async (ctx, next) => {
    ctx.body = "1";
    await next();
    ctx.body += "5";
})

app2.use(async (ctx, next) => {
    ctx.body += "2";
    await delay();
    await next();
    ctx.body += "4";
});

app2.use(async (ctx, next) => {
    ctx.body += "3";
});

app2.listen(3004 , () => {
    console.log('监听 3001');
})