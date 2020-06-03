export default function createStore(reducer, enhancer) {
    if(enhancer) {
        return enhancer (createStore , reducer)
    }
    let currentState = undefined
    const currentListeners = []

    function getState() {
        return currentState
    }
    //更新状态 function dispatch (action: any ) any
    function dispath(action){
        //xiugai
        currentState = reducer (currentState,action )
        //变更通知
        currentListeners.forEach(v => v())
        return action
    }

    function subscribe (cb){
        currentListeners.push(cb)
    }

    return {
        getState, dispatch ,subscribe
    }
}

export function applyMiddleware(...middleware){
    return 


}