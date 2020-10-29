function EventBus(){
  this.$events = Object.create(null)
}

EventBus.prototype.on = function(name,callback){
    if(!this.$events[name]){
      this.$events[name] = [callback]
    }else{
      this.$events[name].push(callback)
    }
}