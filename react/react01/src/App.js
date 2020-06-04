import React , { Component } from 'react'
import Button from 'antd/lib/button'
// import  'antd/dist/antd.css'
import CommentList from './CommentList'
import ClockFunc from './ClockFunc'
import Lifecycle from './Lifecycle'
export default class App  extends Component {
  constructor(props){
    super(props)
    this.state = {
      showTitle : true,
      goods:[
        {
          name:'商品1gg',
          price:100,
          id:1
        },
        {
          name:'商品2gg',
          price:20,
          id:2
        },
        {
          name:'商品3gg',
          price:40,
          id:3
        }
      ],
      inputVal:'',
      lifeContent:''

    }

  }
  handleClick(i){
    console.log(i);
  }
  changeVal(e){
      this.setState({
        inputVal : e.target.value
      })
  }

  
  
  render(){
    return  <div>
      {this.state.showTitle && <h2>{this.props.title}</h2>}
     <ul>
       {this.state.goods.map((good,i)=>{
         return <li key={good.id}>
            <span>{good.name} </span> 
          <span>{good.price}</span>元
         <button onClick={()=>{this.handleClick(i)}}>添加购物车</button>
         </li>
       })}
     </ul>
      <span>{this.state.inputVal}</span> <br/>
     <input value={this.state.inputVal} onChange={(e)=>{this.changeVal(e)}}></input>
    <button> 你好啊 </button>
    <Welcome tips='欢迎你啊'></Welcome>
    <Button type="primary">默认按钮</Button>
    <CommentList></CommentList>
    <Lifecycle content={this.state.lifeContent}></Lifecycle>
    {/* <ClockFunc></ClockFunc> */}
    </div>
  }

}

function Welcome(props) {
  return <div>
     {props.tips}
  </div>
}