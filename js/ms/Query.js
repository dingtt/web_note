class Query {
  constructor(data) {
    this.data = data;
  }

  filter(callback) {
    // this.data = this.data.filter(callback);
    this.data = this.data.reduce((acc, item) => {
      if (callback(item)) {
        acc.push(item);
      }
      return acc;
    }, []);
    return this;
  }

  sort(callback) {
    this.data = this.data.sort(callback); // 单独实现排序方法
    return this;
  }

  quickSort(arr, callback) {
    if (arr.length <= 1) {
      return arr;
    }

    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr[pivotIndex];
    const smaller = [];
    const greater = [];

    for (let i = 0; i < arr.length; i++) {
      if (i === pivotIndex) {
        continue;
      }
      if (callback(arr[i], pivot) <= 0) {
        smaller.push(arr[i]);
      } else {
        greater.push(arr[i]);
      }
    }

    return [...this.quickSort(smaller, callback), pivot, ...this.quickSort(greater, callback)];
  }

  groupBy(key) {
    const groupedData = this.data.reduce((acc, obj) => {
      const property = obj[key];
      acc[property] = acc[property] || [];
      acc[property].push(obj);
      return acc;
    }, {});
    this.data = groupedData;
    return this;
  }

  execute() {
    return this.data;
  }
}

// 示例用法
const data = [
  { name: 'Alice', age: 30, gender: 'female' },
  { name: 'Bob', age: 25, gender: 'male' },
  { name: 'Charlie', age: 28, gender: 'male' },
  { name: 'Diana', age: 22, gender: 'female' }
];

const result = new Query(data)
  .filter((item) => item.age > 26)
  .sort((a, b) => a.age - b.age)
  .groupBy('gender')
  .execute();

console.log(result);
