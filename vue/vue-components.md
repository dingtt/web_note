# Vue组件

## 组件的分类

页面组件  独立组件 业务组件

## 组件的构成

### 属性props

prop定义了组件有哪些可配置的属性，props是单向数据流，组件不能自己修改只能通知父组件，由父组件修改。

`inheritAttrs:true` html的自带属性，会默认继承

```
const validator = function(value){ return true}
exports default {
  props:{
    propsKey: {
      validator(value) {
        return  validator(value) // 判断逻辑
      }
    },
    propKey2: {
      type: Number,
      default:0
    }
  }
}
```

### 插槽slot

分发组件内容，多个slot使用具名插槽

### 事件event



