class Stack {
  constructor() {
    this.stack = [];
  }
  push(item) {
    this.stack.push(item);
  }
  pop() {
    return this.stack.pop();
  }
  // 窥视
  peek() {
    return this.isEmpty() ? undefined : this.stack[this.size() - 1];
  }
  isEmpty() {
    return this.size() == 0;
  }
  size() {
    return this.stack.length;
  }
}

// 取栈顶
const stack = new Stack();
stack.push("老冰棍");
stack.push("巧乐兹");
stack.push("小不丁");
while (stack.size()) {
  const stacktop = stack.peek(); // 栈顶值
  console.log(stacktop);
  stack.pop(); // 出栈
}
// 队列
class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(item) {
    this.queue.push(item);
  }
  dequeue() {
    return this.queue.shift();
  }
  front() {
    return this.isEmpty() ? undefined : this.queue[0];
  }
  back() {
    return this.isEmpty() ? undefined : this.queue[this.size() - 1];
  }
  isEmpty() {
    return this.size() == 0;
  }
  size() {
    return this.queue.length;
  }
}

const queue = new Queue();
queue.enqueue("队1");
queue.enqueue("队2");
queue.enqueue("队3");
while (queue.size()) {
  const top = queue.front(); // 取队首
  console.log(top);
  queue.dequeue(0); // 出队
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
    return Object.keys(this.items).length;
  }

  get value() {
    return Object.keys(this.items);
  }
}
const set = new Set();
set.add(2);
set.add(2);
set.add(3);
console.log(set.size);
console.log(set.value);
set.remove(2);
console.log(set.size);

class hashTable {
  constructor() {
    this.items = {};
  }
  put(key, value) {
    this.items[this.keyToHash(key)] = value;
  }
  get(key) {
    return this.items[this.keyToHash(key)];
  }
  delete(key) {
    delete this.items[this.keyToHash(key)];
  }
  keyToHash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
  }
}

const ht = new hashTable();
ht.put("name", "custom hashTable");
console.log(ht.get("name"));
ht.delete("name");
console.log(ht.get("name"));

function shuffleArray(arr) {
  for (let index = 0; index < arr.length; index++) {
    const j = Math.floor(Math.random() * arr.length);
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
}