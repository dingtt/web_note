// promise.then(onResolve,onRejected)
// promise.then(onRejected) promise.then(null,onRejected)
const PENDING = 1;
const FULFILLED = 2;
const REJECTED = 3;
class Promise {
  constructor(executor) {
    // 状态
    this.status = PENDING;
    // 完成后的传值
    this.value = null;
    // 失败原因
    this.reason = null;
    this.fulfilledCbs = []; //回调
    this.rejectedCbs = [];
    let resolve = (data) => {
      setTimeout(() => {
        if (this.status === PENDING) {
          this.status = FULFILLED;
          this.value = data;
          this.fulfilledCbs.forEach((cb) => {
            cb && cb(data);
          });
        }
      });
    };
    let reject = (data) => {
      setTimeout(() => {
        if (this.status === PENDING) {
          this.status = REJECTED;
          this.reason = data;
          this.rejectedCbs.forEach((cb) => {
            cb && cb(data);
          });
        }
      });
    };
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  static resolve(value) {
    return new Promise((resolve, reject) => {
      resolve(value)
    })
  }

  static race(promises) {
    return new Promise((resolve, reject) => {
      for (let promise in promises) {
        Promise.resolve(promise).then((value) => {
          resolve(value)
        }, err => {
          reject(err)
        })
      }
    })
  }

  // res  循环
  static all(promises) {
    const result = [];
    let completed = 0;

    return new Promise((resolve, reject) => {
      for (let index = 0; index < promises.length; index++) {
        Promise.resolve(promise).then((value) => {
          result[i] = value;
          completed++
          if (completed === promises.length) {
            resolve(result)
          }
        }, err => {
          reject(err)
        })

      }
    })
  }

  // 返回promise，使用promise.resolve执行
  static allSetted(promises) {
    const result = [];
    let completed = 0;
    return new Promise((resolve, reject) => {
      for (let i = 0; i < promises; i++) {
        Promise.resolve(promise).then((value) => {
          result[i] = {
            status: 'fulfilled',
            value
          };
          completed++
          if (completed === promises.length) {
            resolve(result)
          }
        }, err => {
          result[i] = {
            status: 'rejected',
            err
          };
          completed++
          if (completed === promises.length) {
            reject(err)
          }
        })
      }
    })
  }

}

Promise.prototype.then = function (onFulfilled, onRejected) {
  return new MyPromise((resolve, reject) => {
    // 直接执行
    if (this.state === 'fulfilled') {
      try {
        const result = onFulfilled ? onFulfilled(this.value) : this.value;
        resolve(result);
      } catch (error) {
        reject(error);
      }
    }


    if (this.state === 'rejected') {
      try {
        const result = onRejected ? onRejected(this.reason) : this.reason;
        resolve(result);
      } catch (error) {
        reject(error);
      }
    }

    if (this.state === 'pending') {
      if (onFulfilled) {
        this.onFulfilledCallbacks.push((value) => {
          try {
            const result = onFulfilled(value);
            resolve(result);
          } catch (error) {
            reject(error);
          }
        });
      }

      if (onRejected) {
        this.onRejectedCallbacks.push((reason) => {
          try {
            const result = onRejected(reason);
            resolve(result);
          } catch (error) {
            reject(error);
          }
        });
      }
    }
  });
}

// 调用当前 Promise 对象的 then 方法，传入两个回调函数
Promise.prototype.finally = function (cb) {
  return this.then(function (value) {
    return Promise.resolve(cb()).then(function () {
      return value
    })
  }, function (err) {
    return Promise.resolve(cb()).then(function () {
      throw err
    })
  })
}


// 测试
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const num = Math.random();
    num > 0.5 ? resolve(`成功了${num}`) : reject(`失败了${num}`);
  }, 1000);
});
promise.then(
  (res) => {
    // onFulfilled
    console.log("res", res);
  },
  (reason) => {
    // onRejected
    console.log("reject", reason);
  }
);


const batchRun = (promises, limit) => {
  let currentIndex = 0;
  let runningCount = 0;

  function run() {
    if (currentIndex >= promises.length) {
      return Promise.resolve();
    }
    const promise = promises[currentIndex];
    currentIndex++;
    runningCount++;

    return Promise.resolve(promise).then(value => {
      //
    }).finally(() => {
      runningCount--;
      if (runningCount < limit) {
        return run();
      }
      if (runningCount === 0 && currentIndex === promises.length) {
        return Promise.resolve();
      }
    });
  }

  const allPromises = [];
  for (let i = 0; i < limit && i < promises.length; i++) {
    allPromises.push(run());
  }

  return Promise.all(allPromises);
};


// 示例用法
const promises = [
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.reject('Error'),
  Promise.resolve(3),
  Promise.resolve(4)
];

batchRun(promises, 2).then(() => {
  console.log('All promises have been executed.');
}).catch(err => {
  console.error('Error occurred:', err);
});


const LoadImg = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onerror = function () {
      reject(url);
    };
    img.onload = function () {
      img = null;
      resolve(url);
    };
    img.src = url;
  });
};

const loadByLimit = (arr, LoadImg, limit) => {
  const arrCopy = [...arr]
  // 数组小于最大并发数
  if (arr.length < limit) {
    const promiseArray = arr.map(item => LoadImg(item))
    return Promise.all(promiseArray)
  }
  // 大于  slice
  const promiseArray = arrCopy.splice(0, limit).map(item => LoadImg(item))
  arrCopy.reduce((prevPromise, item) => {
    prevPromise.then(() => Promise.race(promiseArray))
      .catch(err => { console.log(err) })
      .then(resolveId => {
        let resolveIdPostion = promiseArray.findIndex(id => resolveId === id)
        promiseArray.splice(resolveIdPostion, 1)
        promiseArray.push(LoadImg(item))
      })
  }, Promise.resolve())
  // .then(() => Promise.all(promiseArray))
};


// 异步并发控制
function gets(ids, max) {
  return new Promise((resolve) => {
    const res = [];
    let loadcount = 0;
    let curIndex = 0;
    function load(id, index) {
      return get(id).then(
        (data) => {
          loadcount++;
          res[index] = data;

          if (loadcount === ids.length) {
            resolve(res);
          } else {
            curIndex++;
            load(ids[curIndex]);
          }
        },
        (err) => {
          res[index] = err;
          loadcount++;
          curIndex++;
          load(ids[curIndex]);
        }
      );
    }

    for (let i = 0; i < max && i < ids.length; i++) {
      curIndex = i;
      load(ids[i], i);
    }
  })
}

function getids(promises, max) {
  const result = []
  let currentIndex = 0;
  let total = 0;

  return new Promise((resolve, reject) => {

    function load(promise, index) {
      Promise.resolve(promise).then(res => {
        total++
        result[index] = res
        if (total === max) {
          resolve(result)
        } else {
          currentIndex++
          load(promises[currentIndex], currentIndex)
        }
      }, err => {
        total++
        result[index] = err
        currentIndex++
        load(promises[currentIndex], currentIndex)
      })
    }

    for (let i = 0; i < max; i++) {
      load(promise, i)
    }
  })


}

function runBatch(promises, max) {
  let total = 0;
  let currentIndex = 0;
  let result = []
  function run(promise, index) {
    Promise.resolve(promise).then(res => {
      total ++
      if(currentIndex === total){
        resolve(result)
      }else{
        currentIndex ++ 
        run(promises[currentIndex], currentIndex)
      }
    }, err => {

    })
  }

  for (let index = 0; index < max; index++) {
    run(promises[i], index)
  }

}

