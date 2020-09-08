# Vue组件通信

## 几种通信方式

### $ref 

给元素或组件注册引用信息，使用时 this.$refs.refName，直接得到组件实例，可以调用组件的方法或访问数据。

缺点：无法跨级和兄弟间通信

### $parent/$children

基于当前上下文访问父组件或全部子组件

缺点：无法跨级和兄弟间通信

### $on/$emit

$emit在当前组件上触发自定义事件，$on在父组件上进行监听。（当前组件上也能监听的到）

```
// child.vue
export default {
  methods: {
    handleEmitEvent () {
      this.$emit('test', '来自子组件的数据');
    }
  },
  mounted () {
   // 监听自定义事件 test
    this.$on('test', (text) => {
      window.alert(text);
    });
   }
}
```

```
// parent.vue
<template>
  <child-component @test="handleEvent">
</template>
<script>
  export default {
    methods: {
      handleEvent (text) {
      	console.log(text);  
      }
    }
  }
</script>
```

### event bus

### provide / inject 主要用于子组件获取上级组件的状态

> 允许一个祖先组件向其所有后代注入一个依赖，不论组件层次有多深，并在起上下游关系成立的事件里始终生效。主要为高阶组件/组件库提供用例。

```javascript
// parent
export default {
  provide:{
    version: '0.0.1'
  }
}
// children
export default {
  inject:['version'],
  mounted() {
    console.log(this.version)
  }
}
```

provide / inject绑定不是响应式的，但是如果传入的是一个可监听的对象，对象里的属性还是可响应式的。

奇技淫巧

在app.vue中provide，这样便可以在子组件中通过this.app 使用app.vue 里的属性和方法     

```javascript
// App.vue
<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  provide() {
    return {
      app: this
    }
  }
}
</script>
```

**待记录 mixins** 将不同的逻辑写到不同的js里

**遍历寻找name**

### dispatch broadcast 自定义实现派发与广播

解决父子组件（含跨级）间的通信问题

```javascript
function boardcast(comName, eventName, params) {
  this.$children.forEach(child => {
    const name = child.$options.name
    if (name === comName) {
      child.$emit.apply(child, [eventName].concat(params))
    } else {
      boardcast.apply(child, [comName, eventName].concat([params]))
    }
  })
}

export default {
    methods: {
        dispatch(comName, eventName, params) {
            let parent = this.$parent || this.$root
            let name = parent.$options.name
            while(parent && (!name || name !== comName)) {
                parent = parent.$parent
                if(parent){
                    name = parent.$options.name
                }
            }
            if(parent){
                parent.$emit.apply(parent, [eventName].concat(params))
            } 
        },
        broadcast(comName, eventName, params) {
            broadcast.call(this, comName, eventName, params);
          }
    }
}
```

### findComponents 

上下找最近目标，上下找全部目标，找某组件个的兄弟（要在父级的children里找）

```javascript
// 向上找到指定的组件
function findComponentUpward(context, comName) {
  const parent = context.$parent
  let name = parent.$options.name
  while (parent && (!name || name !== comName)) {
    parent = parent.$parent
    name = parent.$options.name
  }
  return parent
}

// 向上找到所有同名的组件
function findComponentsUpward(context, comName){
  const parents = []
  const parent = context.$parent
 if(parent){
   if(parent.$options.name === comName){
       parents.push(parent)
   }
   return parents.concat(findComponentsUpward(parent, comName))
 }else{
     return []
 }
}

// 向下找到最近指定组件
function findComponentDownward(context, comName) {
    const childrens = context.$children
    let children = null
    if(childrens.length){
        for(const child of childrens){
            const name = child.$options.name
            if(name === comName){
                children = child
                break
            }else{
                children = findComponentDownward(children, comName)
                if(children) break
            }
        }
    }
    return children
}

// 向下找到所有指定组件
function findComponentsDownward(context, comName) {
    const childrens = context.$children
    let namedChildrens = []
    if(childrens.length){
        for(const child of childrens){
            const name = child.$options.name
            if(name === comName){
                namedChildrens.push(child)
            }else{
                namedChildrens.concat(child, findComponentsDownward(children, comName))
            }
        }
    }
    return namedChildrens
}

function findComponentsDownward(context, comName) {
    return context.$children.reduce((components, child) => {
        if(child.$options.name === comName) {
            components.push(child)
        }
        const foundChilds = findComponentsDownward(child, comName)
        return components.concat(foundChilds)
    },[])
}

// 找到指定的兄弟组件
function findBrothersComponents(context, comName, exceptSelf = true) {
    let res = context.$parent.$children.filter(item => {
        return item.$options.name = comName
    })
    let index = res.findIndex(item => item._uid === context._uid)
    if(exceptSelf){
        ref.splice(index, 1)
    }
    return res
}
```

