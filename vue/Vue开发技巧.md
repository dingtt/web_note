### 动态的指令参数

将动态的指令参数传递给组件

```
<my-button @[someEvent]="handleSomeEvent()"/>
```

### 组件生命周期 Hook ，hookEvent的使用

通过hookEvent模板声明式的注入声明声明周期钩子函数，

~~而非在子组件生命周期中$emit父组件的事件~~

```javascript
// 监听组件声明周期，组件内无需做任何改变，同样适用与 created 
<Child @hook:mounted="handleOnMounted" />
<List @hook:updated="handleTableUpdated"></List >
```

```javascript
vm.$on('hooks:created', cb)
vm.$once('hooks:created', cb)
```

```javascript
// vue2
mounted(){
  this.thirdPartyPlugin = thirdPartyPlugin()
}
beforeDestroy(){
  this.thirdPartyPlugin.destroy()
}
// vue3
mouted() {
 this.thirdPartyPlugin = thirdPartyPlugin()
 this.$on('hook:beforeDestroy',() => {
   thirdPartyPlugin.destroy()
 })
}


```

**程序化的事件侦听器**

`this.timer` 唯一的作用只是为了能够在 `beforeDestroy` 内取到计时器序号，如果可以的话最好只有生命周期钩子可以访问到它。

```
// 清除定时器
this.$once('hook:beforeDestroy', () => {
      clearInterval(timer)
})
```



### key值的使用

针对/path/:id 只改变id号，但渲染不同组件的的场景

```
<router-view :key="key"></router-view>
```

### 自定义组件使用v-model

`v-model` 是 `v-bind` 以及 `v-on` 配合使用的语法糖，

```
<input v-bind:value="value" v-on:input="value= $event.target.value" />
```

- text 和 textarea 元素使用 value property 和 input 事件
- checkbox 和 radio 使用 checked property 和 change 事件
- select 字段将 value 作为 prop 并将 change 作为事件

在自定义组件中使用的时候，就需要使用 `model` 选项

```javascript
Vue.component('base-checkbox', {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
  template: `
    <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
    >
  `
})
<input type="checkbox" :value="value" @input="handleInputChange(value)" />
```

双向绑定还有另一种解决方案，即 `sync` 修饰符。与 `v-model` 不同的是，它不需要你的组件有一个 `<input>` 标签并将值绑定到它上面。它仅触发 `update:<your_prop>` 通过事件系统对属性进行突变。

```
<custom-component :value.sync="value" />
```

### CSS scoded 和深度作用选择器

可以直接通过深度作用选择器去影响子组件

```javascript
<style scoped>
.a >>> .b { /* ... */ }

.a /deep/ .b { /* ... */ }

::v-deep .scoped-third-party-class {
  color: gray;
}
</style>
```

### 高级 watch 

 **立即执行**  **深度监听**

```javascript
// 默认最初绑定的时候是不会执行的，要等到 id 改变时才执行监听计算。
watch: {
  id: {
    handler(newValue) {
      this.getDetails(newValue);
    },
    // 代表在wacth里声明了id后这个方法之后立即先去执行handler方法
    immediate: true,
    deep:true
  }
}
```

**多个handlers**

watch 可以设置为数组，支持的类型为 String、Function、Object。触发后，注册的watch处理程序将被一一调用。

```javascript
watch: {
  value: [
    'printValue',
    function (val, oldVal) {
      console.log(val)
    },
    {
      handler: 'printValue',
      deep: true
    }
  ]
},
methods : {
  printValue () {
    console.log(this.value)
  }
}

```

**订阅多个变量突变**

`watcher` 不能监听多个变量，但我们可以将目标组合在一起作为一个新的 `computed`，并监视这个新的 "变量"。

```javascript
computed: {
  multipleValues () {
    return {
      value1: this.value1,
      value2: this.value2,
    }
  }
},
watch: {
  multipleValues (val, oldVal) {
    console.log(val)
  }
}
```

函数式定义

```javascript
// 返回一个取消观察函数，用来停止触发回调：
let unwatchFn = this.$watch('count', function(){
    console.log('count 新值：'+newVal)
}, {
    immediate: true // 立即执行watch
})
```



### 在 Vue 中使用 JSX

？？？

### v-cloak 解决页面闪烁问题

```
// template 中，防止页面闪烁
<div class="#app" v-cloak>
    <p>{{value.name}}</p>
</div>

// css 中
[v-cloak] {
    display: none;
}
// 可以配合loading或骨架图
```

### v-once 和 v-pre 提升性能

`v-pre`显示原始`Mustache` 标签

`v-once`如果只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。

### 函数式组件

？？？  1 2

### 使用 Vue.observable 实现状态共享

```
import Vue from "vue";
// 创建一个小型的 store，里面的数据可以实现多组件共享
export const store = Vue.observable({ count: 0 });
// 模糊VueX 的 mutation
export const mutations = {
  setCount(count) {
    store.count = count;
  }
};
```

### 单输入控制——表单修饰符/change事件/filter/指令

```javascript
// 表单修饰符
<input v-model.number="age" type="number">
<input v-model.trim="msg">
// change事件  给表单绑定事件，在事件处理中进行表单输入控制
<input v-model="value2" type="text" @change="inputChange(value2)" />
```

**filter**

```javascript
<input v-model="value1"  type="text" />
```

```javascript
Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})
```

**指令**

```
Vue.directive('enterIntNumber', {
}）
```

**按钮权限**  **指令**

概思路为获取权限列表，如果当前绑定权限不在列表中，则删除该节点元素。

自定义指令钩子函数共接收3个参数，包括 `el` (绑定指令的真实dom)、`binding` (指令相关信息)、`vnode` (节点的虚拟dom)。

```javascript
Vue.directive('role', {
    inserted: function (el, binding, vnode) {
      let role = binding.value
      if(role){
          // 权限
        const applist = localStorage.getItem("applist")
        // applist 存储在 vuex 里，vnode.context 为当前实例
        const applist = vnode.context.$store.state.applist
        const hasPermission = role.some(item => applist.includes(item)) 
        // 是否拥有权限
        if(!hasPermission){
          el.remove() //没有权限则删除模块节点
        }
      }
    }
})
```

// 图片懒加载指令

### 事件：特殊变量 $event

传入原生事件对象的同时，传入其他参数

```javascript
<!-- 注意这里调用的方法有两个参数 -->
<input v-model="value1" @change="inputChange('hello', $event)">
// 
methods: {
  inputChange(msg, e) {
    console.log(msg, e);
  }
}

```

**自定义事件**

在自定义事件中，`$event` 是从其子组件中捕获的值

```javascript
<el-input
    v-model="value2"
    @change="change($event, 'hello')"
    placeholder="Input something here"
/>
    
 methods: {
  change(e, val) {
    console.log("event is " + e); // el-input 输入的值
    console.log(val); // hello
  }
}
```

### 路由参数解耦

```
const router = new VueRouter({
  routes: [{
    path: '/:id',
    component: Component,
    props: true,
    // props: router => ({ id: route.query.id }) // 还可以传入函数以返回自定义 props
  }]
})

```

### 以编程方式挂载组件

```javascript
import Vue from 'vue'
import Popup from './popup'

const PopupCtor = Vue.extend(Popup)
const PopupIns = new PopupCtr()
PopupIns.$mount()

document.body.append(PopupIns.$el)
Vue.prototype.$popup = Vue.$popup = function () {
  PopupIns.open()
}
```

### 优雅更新props

只需要在绑定属性上添加 `.sync`，在子组件内部就可以触发 `update:属性名` 来更新 `prop`

```javascript
// parent
<child :title.sync="title"></child>
// child
export defalut {
    props: {
        title: String  
    },
    methods: {
        changeTitle(){
            this.$emit('update:title', 'hello')
        }
    }
}
```

### provide/inject

一个组件将自己的属性通过 `provide` 暴露出去，其下面的子孙组件 `inject` 即可接收到暴露的属性。

需要注意的是 `provide` 和 `inject` 主要在开发高阶插件/组件库时使用。并不推荐用于普通应用程序代码中

```
export default {
    provide() {
        return {
            app: this
        }
    } 
}
```

```
 inject: ['app'],
 // 
inject: {
        app: {
            default: () => ({})
        }
    },
  //   
    inject: {
        myApp: {
            // from的值和provide的属性名保持一致
            from: 'app',
            default: () => ({})
        }
    },

```

### 巧用template

能解决 `v-for` 和 `v-if` 同时使用报出的警告问题。

```
<template v-for="item in 10">
    <div v-if="item % 2 == 0" :key="item">{{item}}</div>
</template>
```

### 过滤器复用

```
<div>{{ text | capitalize }}</div>
```

```javascript
export default {
    data() {
        return {
            text: 'hello'
        }  
    },
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
         }
    }
}
```

选项配置都会被存储在实例的 `$options` 中，所以只需要获取 `this.$options.filters` 就可以拿到实例中的过滤器。

```
let capitalize = this.$options.filters.capitalize
this.title = capitalize(res.data.title)
```

除了能获取到实例的过滤器外，还能获取到全局的过滤器，因为 `this.$options.filters` 会顺着 `__proto__` 向上查找，全局过滤器就存在原型中。

### 优雅注册组件

件通常用来为 `Vue` 添加全局功能。`Vue.use` 内部会自动寻找 `install` 方法进行调用，接受的第一个参数是 `Vue` 构造函数。

vant.config.js：

```javascript
import {
  Toast,
  Button
} from 'vant'

const components = {
  Toast,
  Button
}

const componentsHandler = {
  install(Vue){
    Object.keys(components).forEach(key => Vue.use(components[key]))
  }
}

export default componentsHandler
```

**main.js**

```
import vantCompoents from '@/config/vant.config'
Vue.use(vantCompoents)
```

### 自动化引入模块（批量引入）

像 api 文件一般按功能划分模块，在组合时可以使用 `require.context` 一次引入文件夹所有的模块文件，而不需要逐个模块文件去引入。每当新增模块文件时，就只需要关注逻辑的编写和模块暴露，`require.context` 会帮助我们自动引入。

需要注意 `require.context` 并不是天生的，而是由 `webpack` 提供。在构建时，`webpack` 在代码中解析它。

```javascript
let importAll = require.context('./modules', false, /\.js$/)
// 文件夹路径 ，是否递归查找子文件夹下的模块， 模块匹配规则，一般匹配文件后缀名 
class Api extends Request{
    constructor(){
        super()
        //importAll.keys()为模块路径数组
        importAll.keys().map(path =>{
            //兼容处理：.default获取ES6规范暴露的内容; 后者获取commonJS规范暴露的内容
            let api = importAll(path).default || importAll(path)
            Object.keys(api).forEach(key => this[key] = api[key])
        })
    }
}

export default new Api()
```

### 路由懒加载(动态chunkName)

从 webpack 2.6.0 开始，占位符 [index] 和 [request] 被支持为递增的数字或实际解析的文件名。我们可以这样使用“魔法注释”：

```javascript
const routeOptions = [
  {
    path:'/login',
    name:'login',
  },
  {
    path:'/index',
    name:'index',
  }
]
const routes = routeOptions.map(route => {
  if (!route.component) {
    route = {
      ...route,
      component: () => import(/* webpackChunkName: "[request]" */ `@/views/${route.name}.vue`)
    }
  }
  return route
})

let router = new Router({
  routes
})
```

