vm.$options = {
    parent: Vue /*父Vue实例*/,
    propsData: undefined,
    _componentTag: undefined,
    _parentVnode: VNode /*父VNode实例*/,
    _renderChildren:undefined,
    __proto__: {
      components: { },
      directives: { },
      filters: { },
      _base: function Vue(options) {
          //...
      },
      _Ctor: {},
      created: [
        function created() {
          console.log('parent created')
        }, function created() {
          console.log('child created')
        }
      ],
      mounted: [
        function mounted() {
          console.log('child mounted')
        }
      ],
      data() {
         return {
           msg: 'Hello Vue'
         }
      },
      template: '<div>{{msg}}</div>'
    }
  }