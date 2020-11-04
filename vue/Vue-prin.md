

render的优先级高于template

template必须有mount()

创建的顺序自上而下

挂载的顺序自下而上

initinject  在 initstate  initprovide之前

new Vue() => _init() => $mount() => _render() => _update()  

#### 数据响应式

Vue实例在初始化的时候接收以下几种数据，

template props data  computed  watch methods

依赖收集

**Dep类**，

存储订阅者，有 addDep，removeDep, depend ，notify方法

Vue为数据中的每一个key维护一个订阅者列表，`const dep = new Dep()`，设置get，set，并在值改变时通知所有的订阅者。`dep.notify()`

对key进行取值时，如果Dep.target有值，才添加订阅者，大多时候Dep.target为空，只有订阅者正在进行订阅时才有值。

pushTarget 的同时，存入targetStack

**Watcher订阅者类**，初始化时接收getter，callback两个函数作为参数，getter用来计算订阅者的值，其在执行时会对订阅者所有需要的key进行取值。当watcher被触发时，会重新通过getter计算当前watcher的值，如果值改变，则运行callback。

方法： get  addDep   cleanupDeps  update run  evaluate depend  teardown

queueWatcher() 是一个核心方法，去除重复操作，调用 flushSchedulerQueue() 刷新队列并执行 watcher。

- 实例化的时候调用get方法，将自己放在Dep.target上`pushTarget(this)`
- 执行getter，对自己依赖的key进行取值 `this.getter.call(vm,vm)`
- 将自己从Dep.target移除 `popTarget()`
- 清理之前的订阅 `this.cleanupDeps()`

*获得通知的订阅者并不会被立即触发*，而是被放入待触发数组，在下一个周期触发。

订阅者在被触发时，会执行getter计算值，值变化才会触发callback

**渲染watcher**

vue实例化之后都会生成一个渲染watcher，这个watcher传入的getter是渲染dom的方法。

```
// lifescyle.js
updateComponent = () => {
  vm._update(vm._render(), hydrating)
}
vm._watcher = new Watcher(vm, updateComponent, noop)
```

vm._render()结合模板和数据，计算出虚拟DOM vm._update()根据虚拟DOM渲染真实的DOM节点。



**对对象和数组的处理**

如果key的值为对象，

递归对每一个key进行处理

如果key的值为数组

 递归对数组中的每一个对象进行处理

重新定义数组的7个方法，push pop shift unshift splice reverse ，调用以上方法时，key的dep会告诉订阅者值已变，如果是unshift，pop，splice，递归处理新增的项。

**对模板的处理**

将模板处理成一个渲染函数，需要重新渲染时，渲染函数结合data生成虚拟DOM，新旧虚拟DOM进行对比，对需要修改的部分，更新真实DOM。