# Vue源码分析

[TOC]



# 开始

## 目录设计

```
src
-- compiler  #编译相关
-- core 	#核心代码
-- platforms #不同平台的支持
-- server	#服务端渲染
-- sfc 		# .vue文件解析
--shared 	#共享代码
```

### compiler

把模板解析成AST语法树，AST语法树优化，代码生成

编译可以借助webpack  vue-loader在构建时做，也可以在运行时做（不推荐）

```
codegen 	#代码生产器
directives 	#指令
parser 		#解析器
```



### core

core目录包含了vue的核心代码，包含内置组件，全局API封装，Vue实例化，观察者，虚拟dom，工具函数

```
components	#内置组件
	-- keep-alive
global-api	#全局api
instance	#实力
	-- index.js
		-- this._init
		-- initMixin
		-- stateMixin
		-- eventMixin
		-- lifecycleMixin
		-- renderMixin		
	-- init.js
		-- Vue.prototype._init
		-- initInternalComponents(vm) #
		-- initProxy(vm) 	#开发坏境下
		-- initLifecycle(vm) 
		-- initEvents(vm)
		-- initRender(vm)
		-- callHook(vm,'beforeCreate')
		-- initInjections(vm)
		-- initSate(vm)
		-- initProvide(vm)
		-- callHook(vm,'created')	
    -- state.js
    -- events.js
    -- render.js
    -- proxy.js
    -- inject.js
    -- lifecycle.js 
observer	#观察者
util	#工具函数
vdom	#虚拟DOM
```



### platforms

2.0版本主要运行在web和weex，web入口文件 platforms\web\entry-runtime-with-compiler.js`

### server

服务端渲染的业务逻辑，运行在nodeJs环境中

### sfc

会把.vue 单文件，解析成javascript对象

### shared

工具函数，供web和服务端环境共用



