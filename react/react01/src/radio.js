import React from 'react'

function RadioGroup(props) {
    return (
        <div>
            {React.Children.map(props.children, child => {
                return React.cloneElement(child, {name: props.name })
            })}
        </div>
    )
}

//Radio传入的value,name和children,注意区分
function Radio({children , ...rest}) {
   return (
       <label>
           <input type="radio" {...rest}/>
           {children}
       </label>
   )
}

export default function Composition() {
    return (
        <div>
            {/* 执行显示消息的key */}
            <RadioGroup name="mvvm">
                <Radio value="vue">vue</Radio>
                <Radio value="react">react</Radio>
                <Radio value="angular">angular</Radio>
            </RadioGroup>
        </div>
    )
}