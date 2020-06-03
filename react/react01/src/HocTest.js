import React from 'react'

//Lesson 保证功能单一 它不关心数据来源 只负责显示
function Lesson(props){
    return (
        <div>
            {props.stage} - {props.title}
        </div>
    )
}

//模拟数据
const lessons = [
    {stage: 'React', title: "数据1"},
    {stage: 'React', title: "数据2"},
    {stage: 'React', title: "数据3"}

]

//高阶组件with
//传入一个参数 根据参数改善获取显示的数据
const withContent = Comp => props => {
    const  content = lessons[props.idx]
    return <Comp {...content} />
}

//链式调用
//高阶组件withLog负责包装传入组件Comp  包装后组件在挂载时可以输出日志记录
const withLog = Comp => {
    return class extends React.Component {
        render() {
            return <Comp {...this.props}/>
        }
        componentDidMount() {
            console.log('didMOunt', this.props);
        }
    }
}

//包装
// const LessonWithContent = withContent(Lesson)
const LessonWithContent = withLog(withContent(Lesson))

export default function HocTest() {
    return  (
        <div>
        {[0,0,0].map((item,index) => (
            <LessonWithContent key={index} idx={index} />
        ))}
    </div>
    )
}