# React的生命周期

## React v16.0前的生命周期

### 初始化（initialization）阶段

代码中类的构造方法 （ `constructor()`）,类继承了react COmponent 这个基类，才能有render()，生命周期等方法， 函数组件不能使用这些方法

`super(props)`用来调用基类的构造方法 `constructor()`，也将父组件的props注入给子组件，供子组件读取，子组件中的props只读不可变，state可变。 类的`constructor()`用来做一些组件的初始化工作，如定义 this.state的初始内容

### 组件的挂载Mount阶段

- ##### componentWillMount

组件挂载前，只会调用一次，在此中调用this.state 不会引起组件重新渲染

- ##### render

根据组件的props和state，return一个React元素（描述组件，既UI），不负责组件的实际渲染工作，之后由React自身根据此元素取渲染出页面DOM，render是串函数，（Pure function 函数的返回结果只依赖于它的参数，函数的执行过程没有副作用，不能在里面执行this.setState，会有改变组件状态的副作用）

- ##### componentDidMount

组件挂载到DOM后调用，并且只调用一次

### 组件的更新阶段

setState引起的state更新或父组件重新render引起的props更新，更新后的state和props之前的相比无论是否变化，都将引起自组件的重新渲染。

此阶段分为 componentWillReceiveProps , shouldComponentUpdate , componentWillUpdate，render ,componenDidUpdate

1. componentWillReceiveProps(nextProps)

   此方法只调用与props引起的组件更新过程中，可根据nextProps和this.props查明是否改变，以及如果改变了要执行啥，比如根据新的props调用this.setState 触发当前组件的更新

   *优化在componentWillReceiveProps中将props转化为自己的state*

   ```javascript
   class Child extends Component{
       constructor(props){
           super(props)
           this.state = {
               num : props.num
           }
       }
       componentWillReceiveProps(nextProps){ //父组件重传props会调用这个方法
           this.setState({
               num : nextProps.num   //如果nextProps变化了，会触发setState重新render,如此props不会再触发子组件更新
           })
       }
       render(){
           return <div>{this.state.num}</div>
       }
   }
   ```

   

2. shouldComponentUpdate(nextProps/nextState)

   返回true当前组件继续执行更新过程，返回false则当前组件停止更新，减少不必要的渲染，优化性能。

   在render前，this.state依然指向更新前的state

   *优化*

   1. 父组件render引起的，参数nextProps是父组件传的新props，子组件将直接重新渲染，无论props是否有变化，优化方案：

   父组件重新render

   ```javascript
   class Child extends Component{
       constructor(props){
           super(props)
           this.state = {
               num : props.num
           }
       }
       shouldComponentUpdate(nextProps){ //无论props是否变化，都会触发
           if(nextProps.num === this.props.num){
               return false
           }
       }
       render(){
           return <div>{this.state.num}</div>
       }
       
   }
   ```

   1. 组件本身调用setState ，无论state有没有变化，可通过shouldComponentUpdate方法优化

      ```javascript
      class Child extends COmpoonent{
          consrtuctor(props){
              super(props)
              this.state = {
                  num : 1
              }
          }
          shouldComponentUpdate(nextState){//应该使用这个方法，不然state是否有更新都将会导致数组的重新渲染
              if(nextState.num === this.state.num){
                  return false
              }
          }
          handldeClick = () => {
              const num = this.state.num
              this.setState = {
                  num : num
              }
          }
          
          render(){
              return <div onClick={() => {this.handleClick}}>{this.state.num}</div>
          }
      }
      ```

      ##### componentWillUpdate

      可在render前执行一定的操作

      ##### render

      ##### componentDidUpdate(prevProps,preState)

      此方法在组件更新后被调用，可以操作组件更新的DOM，preProps和preState是组件更新前的props和state

#### React v16.4的生命周期

##### getDerivedStateFromPorops

v16.3只在创建更新时触发，v16.4之后无论什么引起的updating，都会调用

static getDerivedStateFromProps(props,state) 在组件创建时和更新时的render方法之前，它应该返回一个对象来更新状态，或者返回null不更新任何内容

##### getSnapshotBeforeUpdate

getSnapshotBeforeUpdate 被调用与render之后，可以读取但无法使用DOM的时候，它使组件可以在更改之前从DOM捕获一些信息，(例如滚动位置)，此生命周期的任何值都讲作为参数传递给componentDidUpdate()

```javascript
class ScrollingList extends React.Component {
    constructor(props){
        super(props)
        this.listRef = React.createRef()
    }
    
    getSnapshotBeforeUpdate(preProps,preState){
        //是否需要添加新的 item 到列表
        //捕捉滚动位置，以便可以稍候调整滚动
        if(preProps.list.length < this.props,length){
            const list = this.listRef.current
            return list.scrollHeight - list.scrollTop
        }
        return null
    }
    
    componentDidUpdate(preProps,preState,snapshot){
        //如果有snapshot值，已经添加了新的 items
        //调整滚动以至于这些新的items 不会将旧的items推出视图
        //这里的 snapshotshi getSnapshotUpdate 方法的返回值
        if(snapshot != null){
            const list = this.listRef.current
            list.scrollTop = list.scrollHeight - snapshot
        }
    }
    
    render(){
        return (
        <div ref={this.listRef}>{/* ... contents...*/} </div>
        )
    }
}
```





