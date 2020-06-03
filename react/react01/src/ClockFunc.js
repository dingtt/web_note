import React from 'react'
import {useState, useEffect} from 'react'

export default function ClockFunc() {
//useSate 创建一个状态和修改状态的函数
    const [date, setDate] = useState(new Date())
    //useEffect 编写副作用代码
    useEffect(() => {
        //修改数据
        const timerID = setInterval(() => {
            setDate(new Date())
        },1000)
        //返回清理函数
        return () => clearInterval(timerID)
    },[])//参数2传递空数组 使函数1仅执行一次
    return <div>{date.toLocaleTimeString}</div>
}

