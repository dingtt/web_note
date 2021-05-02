// 链表

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.current; // 状态机
    this.length = 0;
  }
  // 添加值最后
  append(ele) {
      console.log('append',ele)
    const node = new Node(ele);
    if (!this.head) {
      this.head = node;
    } else {
      this.current = this.head;
      while (this.current.next) {
        // 找到最后一个节点
        this.current = this.current.next;
      }
      this.current.next = node;
    }
    this.length++;
  }
  //
  removeAt(position) {
    if (position > -1 && position < this.length) {
      // 范围内
      let prev = null;
      let index = 0;
      // 第一个
      if (position === 0) {
        this.head = this.head.next;
      } else {
        this.current = this.head;
        while (index < position) {
          prev = this.current;
          this.current = this.current.next;
          index++;
        }
        // this.current  要删除的
        const next = this.current.next;
        prev.next = next;
      }
      this.length--;
    }
  }
  insert(position, ele) {
    const node = new Node(ele);
    if (position > -1 && position < this.length) {
      let prev = null;
      let current = null;
      let index = 0;
      if (position === 0) {
        // 在链表最前面插入
        current = this.head;
        // node.next = current
        // this.head = node
        this.head = node;
        this.head.next = current;
      } else {
        this.current = this.head;
        while (index < position) {
          prev = this.current;
          this.current = this.current.next;
          index++;
        }
        node.next = this.current;
        prev.next = node;
      }
      this.length++;
    }
  }
  // 链表中是否有某个元素
  indexOf(ele) {
    let index = 0;
    this.current = this.head;
    while (index < this.length) {
      if (this.current.element === ele) {
        return index;
      }
      this.current = this.current.next;
      index++;
    }
    return -1;
  }
  remove(ele) {
    const position = this.indexOf(ele);
    this.removeAt(position);
  }
  size() {
      console.log('len',this.length)
    return this.length;
  }
  getHead() {
    return this.head;
  }
  isEmpty() {
    return this.length === 0;
  }
  // 打印链表元素
  log() {
     let arr = [];
    this.current = this.head;
    arr.push(this.current.element);
    while (this.current.next) {
      this.current = this.current.next
      arr.push(this.current.element);
    }
    console.log(arr);
  }
}

// const linkedList = new LinkedList()

// linkedList.append(1)
// linkedList.append(5)
// linkedList.append(7)
// linkedList.append(9)
// linkedList.size()
// linkedList.log()
// linkedList.removeAt(1)
// linkedList.log()
// linkedList.insert(2,11)
// linkedList.log()
// linkedList.remove(9)
// linkedList.log()

// > append, 1
// > append, 5
// > append, 7
// > append, 9
// > len, 4
// > 1,5,7,9
// > 1,7,9
// > 1,7,11,9
// > 1,7,11

// 两种种while   next空   index < length 

// 链表相交

// 链表合并

const link1 = new LinkedList()
const link2 = new LinkedList()
link1.append(1)
link1.append(3)
link1.append(5)
link1.append(7)

link2.append(2)
link2.append(4)
link2.append(5)
link2.append(8)
link2.append(10)

// element 比大小  交换next
// 1 > 3 > 5 > 7
// 2 > 4 > 5 > 8 > 10