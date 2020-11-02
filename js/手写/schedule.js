class Scheduler {
  constructor(){
    this.queue = []
    this.maxCount = 2
    this.runCounts = 0
  }
  add(promiseTask){
    this.queue.push(promiseTask)
  }
  taskStart(){
    for(let i = 0; i < this.maxCount; i ++){
      this.request()
    }
  }
  request(){
    if(!this.queue || !this.queue.length || this.runCounts >= this.maxCount)return
    this.runCounts ++
    this.queue.shift()().then(() => {
      this.runCounts --
      this.request()
    })
  }
}
const timeout = time => new Promise((resolve,reject) => {
  setTimeout(()=>{
    resolve()
  },time)
})


const scheduler = new Scheduler()
const addTask = (time,order) => {
  scheduler.add(() => timeout(time).then(() => console.log(order)))
}

addTask(1000,'1')
addTask(5000,'2')
addTask(3000,'3')
scheduler.taskStart()