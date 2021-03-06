function EventBus() {
  this._events = Object.create(null);
}

EventBus.prototype.on = function (name, callback) {
  if (!this._events[name]) {
    this._events[name] = [callback];
  } else {
    this._events[name].push(callback);
  }
};

EventBus.prototype.emit = function (name, ...args) {
  if (this._event[name]) {
    const arr = this._events[name];
    arr.forEach((cb) => {
      cb && cb(...args);
    });
  }
};

EventBus.prototype.off = function (name) {
  if (this._event[name]) {
    this._events[name].length = 0;
    delete this._events[name];
  }
};

EventBus.prototype.once = function (name, callback) {
  let once = (...args) => {
    callback(...args);
    this.off(name);
  };
  this.on(name, once);
};

let eventBus = new EventBus();

eventBus.on("on", function (msg) {
  console.log(msg);
});
eventBus.once("once", function (msg) {
  console.log(msg);
});
eventBus.on("off", function (msg) {
  console.log(msg);
});
