#### JSX

JSX是函数调用和表达式的语法糖，会被编译为React.createElement，其底层逻辑是不能运行js代码的，只能渲染一个结果。不能直接使用if else，可以使用三元运算符，多个三元运算符，抽离出render function，或者使用立即执行函数。

#### setState

this.setState 方法并不总是能够立刻更新组件，它可能会延迟更新，这样在通过this.state读取内容是，有可能获取不到最新的值。

在react控制之内的事件处理过程中，setState不会同步更新this.state，而对于react控制之外的情况，setSate会同步更新this.state。

例如，在addEventListener中调用时onClick是同步，在render中调用是异步。

this.setState Promise化 

```js
const setStatePromise = (me, state) => {
	new Promise(resolve => {
	  me.setState(state, () => {
	   resolve()
	  })
	})
}
```



#### 原生事件和React合成事件

React事件大多数都绑定在document上，而非原生dom上，（除了少数不会冒泡到document 的事件，如video），React触发的事件也是对原生事件的包装，而不是原生Event对象。

**异步访问事件对象**

不能直接异步访问合成事件对象，需要持久化合成事件 e.persist()

**阻止原生事件冒泡**

react在事件冒泡到document 上时才能够处理事件，所以无法直接使用e.stopPropagation()阻止原生事件冒泡。需要使用

e.nativeEvent.stopImmediatePropagation()

#### element diff

如果元素在旧集合中的位置与在新集合中的位置相比更靠后的话，就不需要移动。尽量减少类似将最后一个节点移动到列表首部的操作，（因为实际过程中，会变成把其他的元素，移动到原最后一个节点的后面）

#### 组件

单一职责  数据和渲染分离，HOC包装，通过参数传入s不同的数据来源，不同的组件渲染

**组件封装与通信**

秉承封装性，使组件的state结果只有自己知道。

副作用和（准）纯组件

纯函数是通过函数参数能够唯一缺的函数返回值的函数。

准纯组件是渲染数据全部来自props，但是会产生副作用的组件。

#### 数据状态管理

React组件内部的state， redux中的store

数据持久度：

- 快速变更型，如文本输入框，适合在组件内维护
- 中等持续型，页面刷新前保持稳定的数据，如ajax数据，可能在不同组件使用，使用redux管理。
- 长远稳定型，服务器或本地存储

数据消费范围： 需要跨多层级共享，完全无父子关系的组件共享

#### Redux

合理connect

扁平化数据状态