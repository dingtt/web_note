function EventBus() {
  this.$events = Object.create(null);
}

EventBus.prototype.on = function (name, callback) {
  if (!this.$events[name]) {
    this.$events[name] = [callback];
  } else {
    this.$events[name].push(callback);
  }
};

EventBus.prototype.emit = function (name) {
  if (this.$event[name]) {
    const arr = this.$events[name];
    arr.map((cb) => {
      cb && cb();
    });
  }
};

EventBus.prototype.off = function(name){
  if(this.$event[name]){
    this.$events[name].length = 0
    delete this.$events[name]
  }
}
