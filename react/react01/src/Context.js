import React from 'react'

//创建上下文
const Context = React.createContext()

//获取Provider和Consumer
const Provider = Context.Provider
const Consumer = Context.Consumer

//Child显示计数器 并能修改它  多个Child之间需要共享数据
function Child(props) {
    return <div onClick={() => props.add()}> {props.counter}</div>
}

export default class ContextTest extends React.Component {
    //state 是要传输的数据
    state = {
        counter:1
    }

    //add method
    add = () => {
        this.setState(nextSate => ({ counter: nextSate.counter + 1 }))
    }

    //counter status change
    render(){
        return (
            <Provider value = {{counter : this.state.counter,add : this.add}}>
                {/* Consumer仲内嵌函数，其参数是传递的数据，返回要渲染的组件 */}
                {/* 把value展开传给Child */}
        <Consumer>{value => <Child {...value}/>}</Consumer>
        <Consumer>{value => <Child {...value}/>}</Consumer>
            </Provider>
        )
    }
}

//