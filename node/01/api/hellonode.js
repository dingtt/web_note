console.log('hello node')

const os = require('os')
const mem = os.freemem() / os.totalmem() * 100
console.log(`内存占用率${mem.toFixed(2)}%`);

// const download = require('download-git-repo')
// const newLocal = 'github:su37josephxia/vue-template';
// const ora = require('ora')
// const process = ora('下载...项目')
// process.start()
//     download(newLocal,'test',err => {
//         // console.log(err ? 'Error' : 'Success')
//         if(err){
//             process.fail()
//         }else{
//             process.succeed()
//         }
//     })

const repo = 'github:su37josephxia/vue-template'
const desc = '../test2'
clone(repo,desc) 
async function clone() {
    const { promisify } = require('util')
    const download = promisify(require('download-git-repo'))
    const ora = require('ora')
    const process = ora(`下载项目......`)
    process.start()
    try {
        await download(repo,desc)
    } catch (error) {
        process.fail()
    }
    process.succeed()

}