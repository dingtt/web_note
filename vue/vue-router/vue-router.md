响应路由参数的变化

```
watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
    }
  }
```

vue2.2 beforeRouteUpdate 导航守卫

```
 beforeRouteUpdate (to, from, next) {
    // react to route changes...
    // don't forget to call next()
  }
```

### 捕获所有路由或 404 Not found 路由

常规参数只会匹配被 `/` 分隔的 URL 片段中的字符。如果想匹配**任意路径**，我们可以使用通配符 (`*`)：

```
{
  // 会匹配所有路径
  path: '*'
}
{
  // 会匹配以 `/user-` 开头的任意路径
  path: '/user-*'
}
```

*通配符*的路由应该放在最后

当使用一个*通配符*时，`$route.params` 内会自动添加一个名为 `pathMatch` 参数。它包含了 URL 通过*通配符*被匹配的部分

```
// 给出一个路由 { path: '/user-*' }
this.$router.push('/user-admin')
this.$route.params.pathMatch // 'admin'
// 给出一个路由 { path: '*' }
this.$router.push('/non-existing')
this.$route.params.pathMatch // '/non-existing'
```

#### 高級匹配模式

 [path-to-regexp](https://github.com/pillarjs/path-to-regexp/tree/v1.7.0)

#### 匹配优先级

谁先定义的，谁的优先级就最高。

## 嵌套路由

children的路径匹配成功，将会把自身的component，渲染到父级的component的router-view中

**以 `/` 开头的嵌套路径会被当作根路径。 这让你充分的使用嵌套组件而无须设置嵌套的路径。**

## 编程式导航

## `router.push(location, onComplete?, onAbort?)`

`router.push` 或 `router.replace` 中提供 `onComplete` 和 `onAbort` 回调作为第二个和第三个参数。这些回调将会在导航成功完成 (在所有的异步钩子被解析之后) 或终止 (导航到相同的路由、或在当前导航完成之前导航到另一个不同的路由) 的时候进行相应的调用。在 3.1.0+，可以省略第二个和第三个参数，此时如果支持 Promise，`router.push` 或 `router.replace` 将返回一个 Promise。

**注意**： 如果目的地和当前路由相同，只有参数发生了改变 (比如从一个用户资料到另一个 `/users/1` -> `/users/2`)，你需要使用 [`beforeRouteUpdate`](https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#响应路由参数的变化) 来响应这个变化 (比如抓取用户信息)。

**`this.$router.push`**

<router-link :to="...">

**如果提供了 `path`，`params` 会被忽略****需要提供路由的 `name` 或手写完整的带有参数的 `path`**

```
const userId = '123'
router.push({ name: 'user', params: { userId }}) // -> /user/123
router.push({ path: `/user/${userId}` }) // -> /user/123
// 这里的 params 不生效
router.push({ path: '/user', params: { userId }}) // -> /user
```

## `router.replace(location, onComplete?, onAbort?)`

不会向 history 添加新记录

## `router.go(n)` 

等同于 history.forward() history.back() ，如果 history 记录不够用，那就默默地失败呗

 [`window.history.pushState`、 `window.history.replaceState` 和 `window.history.go`](https://developer.mozilla.org/en-US/docs/Web/API/History)

### 命名路由

### 命名视图

同时 (同级) 展示多个视图，而不是嵌套展示。如果 `router-view` 没有设置名字，那么默认为 `default`。

```
<router-view class="view one"></router-view>
<router-view class="view two" name="a"></router-view>
<router-view class="view three" name="b"></router-view>
```

同个路由，多个视图就需要多个组件

```
 components: {
        default: Foo,
        a: Bar,
        b: Baz
      }
```

#### 嵌套命名视图

使用命名视图创建嵌套视图的复杂布局，需要用到命名的嵌套 `router-view` 视图组件。

## 重定向和别名

### 重定向

重定向目标接收path，name，动态函数（方法接收 目标路由 作为参数，可进行判断）return 重定向的 字符串路径/路径对象

[导航守卫](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html)并没有应用在跳转路由上，而仅仅应用在其目标上

#### 别名

a的别名b，访问b显示b，实际内容是a

```
{ path: '/a', component: A, alias: '/b' }
```

## 路由组件传参

使用 `props` 将组件和路由解耦：**取代与 `$route` 的耦合**

```
 routes: [
    { path: '/user/:id', component: User, props: true },

    // 对于包含命名视图的路由，你必须分别为每个命名视图添加 `props` 选项：
    {
      path: '/user/:id',
      components: { default: User, sidebar: Sidebar },
      props: { default: true, sidebar: false }
    }
  ]
```

#### 布尔模式

如果 `props` 被设置为 `true`，`route.params` 将会被设置为组件属性

#### 对象模式

如果 `props` 是一个对象，它会被按原样设置为组件属性。当 `props` 是静态的时候有用。

#### 函数模式

创建一个函数返回 `props`。这样你便可以将参数转换成另一种类型，将静态值与基于路由的值结合等等。

```js
 { path: '/search', component: SearchUser, props: (route) => ({ query: route.query.q }) }
```











鉴权：

静态路由   

无需登录路由   meta:{auth :false}

需要登录路由 beforeEach

1动态路由数据源 + rule ，配合后台数据过滤

2 动态路由数据源 ，配合后台路由权限，过滤，merge props

3 后台配置路由并输出路由权限（前后协作）  有个名词（用户 角色|用户组  权限 ，菜单权限，路由权限）