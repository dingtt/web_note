import React from 'react'

//Dialog 定义外观和行为
function Dialog(props) {
    //备选消息
    const messages = {
        foo : { title : '标题', content : '内推'},
        bar : { title : 'bar' , content : 'bar content'}
    }
    console.log('Dialog props',props)
    const {body ,footer} = props.children(messages[props.msg])
    return( <div style={{border : '1px solid blue'}}>
        {/* {props.children.default} */}
        {body}
        {/* <div>{props.children.footer}</div> */}
        <div>{footer}</div>
        </div>)
}

export default function Composition () {
    return (
        <div>
            {/* 传入显示的内容 */}
            {/* 执行显示消息的key */}
            <Dialog msg="foo">  
               {/* {{
                   default:( <>
                   <h1>弹出框的标题</h1>
                    <p>复合组件的内容 哈哈哈哈  复合组件</p>
                   </>),
                   footer: <button onClick={() => alert('react太灵活了')}>确定</button>
               }} */}
               {/* 修改为函数形式，根据传入的只生成最终内容 */}
               {({title,content}) => ({
                   body : (
                       <>
                       <h1>{title}</h1>
                        <div>{content}</div>
                       </>
                   ),
                   footer: <button onClick={() => alert('react太灵活了')}>确定</button>
               })}
            </Dialog>
        </div>

    )

}
