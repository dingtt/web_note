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

EventBus.prototype.emit = function (name) {
  if (this._event[name]) {
    const arr = this._events[name];
    arr.forEach((cb) => {
      cb && cb();
    });
  }
};

EventBus.prototype.off = function(name){
  if(this._event[name]){
    this._events[name].length = 0
    delete this._events[name]
  }
}

EventBus.prototype.once = function(name,callback){
  let once = (...args) => {
    this.on()
  }
}
