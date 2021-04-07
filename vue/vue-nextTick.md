#### 简单的异步任务合并

```js
let pending = false
const cbs = []
function flushCallbacks() {
	// cbCopy = cbs.slice()
	pending = false
	for(lei i = 0; i < cbCopy.length; i ++ ){
		cbs[i]()
	}
	cbs.length = 0
}
function nextTick (fn) {
  cbs.push(fn)
	if(!pending){
		pending = true
		Promise.resolve().then(flushCallbacks)
	}
}
```

