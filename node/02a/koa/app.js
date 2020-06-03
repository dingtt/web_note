const http = require('http')
const DTT = require('./dtt')
const KKB = require('./kkb')

// const server = http.createServer((req,res) => {
//     res.writeHead(200)
//     res.end('hi dtt')
// })

// server.listen(3000,() =>{
//     console.log('监听端口3000');
// })

// const app = new DTT()

// app.use((req,res) => {
//     res.writeHead(200)
//     res.end('hi dtt 3001')
// })
// app.listen(3001, () => {
//     console.log('监听 3001');
// })

const app2 = new KKB()
app2.use( ctx => {
    ctx.body = 'hhh ggg'
})

app2.listen(3000, () => {
    console.log('监听 3001');
})

