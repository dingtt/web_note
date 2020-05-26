import React  from 'react'

class Cart extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            name:'dtta'
        }
        setTimeout(()=>{
            this.setState({
                name :'dtt挺好啊'
            })
        },2000)
    }
    render(){
       return <div>
           <h2>{this.props.title}</h2>
           {this.state.name}</div>
    }
}


export default Cart