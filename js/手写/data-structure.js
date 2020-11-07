class Stack {
  constructor() {
    this.list = [];
  }
  push(item) {
    this.list.push(item);
  }
  pop() {
    return this.list.pop();
  }
  length() {
    return this.list.length;
  }
  clear() {
    this.list = [];
  }
}
// todo 经典案例  括号匹配 html标签匹配   表达式计算

// add has remove get size get values
class Set {
  constructor() {
    this.items = {};
  }
  has(value) {
    return this.items.hasOwnProperty(value);
  }
  add(value) {
    if (!this.has(value)) {
      this.items[value] = value;
      return true;
    }
    return false;
  }
  remove(value) {
    if (this.has(value)) {
      delete this.items[value];
      return true;
    }
    return false;
  }
  get size() {
   return  Object.keys(this.items).length
  }

  get value() {
    return Object.keys(this.items)
  }
}
const set = new Set()
set.add(2)
set.add(2)
set.add(3)
console.log(set.size)
console.log(set.value)
set.remove(2)
console.log(set.size)

class hashTable{
  constructor (){
    this.items = {}
  }
  put(key,value){
    this.items[this.keyToHash(key)] = value
  }
  get(key){
    return this.items[this.keyToHash(key)]
  }
  delete(key){
    delete (this.items[this.keyToHash(key)])
  }
  keyToHash(key){
    let hash = 0
    for(let i = 0; i < key.length; i++){
      hash += key.charCodeAt(i)
    }
  }
}

const ht = new hashTable()
ht.put('name','custom hashTable')
console.log(ht.get('name'))
ht.delete('name')
console.log(ht.get('name'))
