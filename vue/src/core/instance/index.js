import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}
//初始化
initMixin(Vue)
//
stateMixin(Vue)
//事件  $on $off $once $emit   $emit触发当前vm组件的方法事件
eventsMixin(Vue)
//生命周期   upload  $forceUpload !!!
lifecycleMixin(Vue)
//渲染
//nextTick  
renderMixin(Vue)

export default Vue
