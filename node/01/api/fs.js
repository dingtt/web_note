const fs = require('fs')
//同步调用
const data = fs.readFileSync('./package.json')
console.log(data);
//异步调用
fs.readFile('./hellonode.js',(err,data) => {
    if(err) throw err
    console.log('data2',data);
})
console.log('其他操作');

//fs常常搭配path使用
const path = require('path')
fs.readFile(path.resolve(path.resolve(__dirname,'./hellonode.js')),(err, data) => {
    if(err) throw err
    console.log('data3',data);  
})

const { promisify } = require('util')
const readFile = promisify(fs.readFile)
readFile('./package.json').then(data => console.log('data4',data,Buffer.from(data).toString('utf-8')))

//fs promises from Api node v10

// const fsp = require('fs').promises
// fsp
//     .readFile('./package.json')
//     .then(data => console.log('data5',data))
//     .catch(err => console.log('err5',err))

// (async () => {
    // const fs2 = require('fs')
    // const { promisify } = require('util')
    // const readFile = promisify(fs.readFile)
    // const data = await readFile('./package.json')
    // console.log('data6',data)
    
// })()

