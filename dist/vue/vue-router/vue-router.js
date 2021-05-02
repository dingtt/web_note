class VueRouter {
  constructor(Vue, options) {
    this.$options = options
    this.routeMap = {} // 路由映射表
    this.app = new Vue({
      data:{
        current:'#/'
      }
    })

  }

  // 初始化
  init() {
    window.addEventListener('load',this.onHashChange.bind(this), false )
    window.addEventListener('hashchange',this.onHashChange.bind(this),false)
  }

  // 创建路由表
  createRouteMap(options){
    options.routes.forEach(item => {
      this.routeMap[item.path] = item.component
    })
  }
  // 注册组件
  initComponent(Vue){
    Vue.component('router-link',{
      props:{
        to:String
      },
      template:`<a :href="to"><slot></slot> </a>` // 插槽
    })
    const _this = this
    Vue.component('router-view',{ // 函数组件
      render(h){
        var component = _this.routeMap[_this.app.current]
        return h(component)
      }
    })
  }
  // 获取hash
  getHash() {
    return window.localtion.hash.slice(1) || "/";
  }
  //  设置当前路径
  onHashChange(){
    this.app.current = this.getHash()
  }
}
