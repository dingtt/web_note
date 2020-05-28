import React, {  Component } from 'react'

export default class CommentList extends Component{
    constructor(props){
        super(props)
        this.state = {
            comments:[
                {body:'初始',author:'admin'}
            ]
        }
    }
    componentDidMount(){ //为什么不生效
        setTimeout(() => {
            this.setState = {
                comments : [
                    {body: 'hello react', author:'didi'},
                    {body: 'nihao', author: 'qingju'}
                ]
            }
        },2000)
    }
    render(){
        return (
            <div>
                {this.state.comments.map((item,index) => (
                        <Comment key={index} data={item} />
                    ))}
            </div>
        )
    }
    
}
//展示组件
function Comment({data}){
    return (
        <div>
            <p>{data.body}</p>
            <p>{data.author}</p>
        </div>
    )
}