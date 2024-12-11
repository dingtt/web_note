class Redux {
  constructor(reducer, initialState) {
    this.state = initialState;
    this.reducer = reducer;
    this.subscribers = [];
  }

  getState() {
    return this.state;
  }

  dispatch(action) {
    this.state = this.reducer(this.state, action);
    this.subscribers.forEach(subscriber => subscriber());
  }

  subscribe(callback) {
    this.subscribers.push(callback);

    return () => {
      this.subscribers = this.subscribers.filter(subscriber => subscriber !== callback);
    };
  }
}

class Redux2 {
  constructor(reducer, initialState) {
    this.subscribers = []
    this.reducer = reducer;
    this.state = initialState
  }
  getState() {
    return this.state
  }

  dispatch(action) {
    this.state = this.reducer(this.state, action);
    this.subscribers.forEach(subscriber => subscriber)
  }

  subscribe(cb) {
    this.subscribers.push(cb)
    return () => {
      this.subscribers = this.subscribers.filter(sub => sub !== cb)
    }
  }
}


// 一个简单的reducer函数示例
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// 初始化状态
const initialState = { count: 0 };

// 创建 Redux 实例
const store = new Redux(reducer, initialState);

// 订阅 state 的变化
const unsubscribe = store.subscribe(() => {
  console.log('Current state:', store.getState());
});

// 分发一些 action
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });

// 取消订阅
unsubscribe();
