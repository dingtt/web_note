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
    // executor.call(this, this.resolve, this.reject);
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
    executor(resolve, reject);
  }

  // resolve(data) {}
  // reject(data) {}
}

Promise.prototype.then = function (onResolve, onReject) {
  if (typeof onResolve) {
    this.fulfilledCbs.push(onResolve);
  }
  if (typeof onReject) {
    this.rejectedCbs.push(onReject);
  }
};

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
