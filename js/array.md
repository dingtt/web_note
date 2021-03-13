### 数组扁平化

```javascript
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
```



```javascript
var arr = [1,4,3,2,[6,4,3,5]]
var arr1 = arr.flat(Infinity)
var arr2 = JSON.stringify(arr).replace(/\[|\]/g,'')
var arr3 = JSON.parse('['+ JSON.stringify(arr).replace(/\[|\]/g,'')+']')
var flatten = arr => {
    return arr.reduce((pre,cur) => {
        return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
    },[])
}
console.log(flatten(arr))
// 数组拍平 flat  Array.isArray
// Array.flat(Infinity)
// arr.join(',').split(',').map(Number)   会变字符串
// arr.toString().split(',').map(Number)
// 递归展开 ... Array.isArray
// 递归concat
let arr = [1, 2, [3, 4], [5, 6, [7, 8, 9]]];
/**第一种方式：flat */
let res1 = arr.flat(Infinity);
console.log(res1);

/**第二种方式：join + split*/
let res2 = arr.join().split(",").map(Number);
console.log(res2);

/**第三种方式： toString + split*/
let res3 = arr.toString().split(",").map(Number);
console.log(res3);

/**第四种方式：递归展开 */
const flattern = (arr) => {
  const res = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      res.push(...flattern(item));
    } else {
      res.push(item);
    }
  });
  return res;
};
flattern(arr);

/**第五种方式：递归concat */
function flattern2(arr) {
  return [].concat(
    ...arr.map((item) => (Array.isArray(item) ? flattern2(item) : item))
  );
}
flattern2(arr);
```

### 数组的去重

```
new Set(arr)
```

```javascript
//set indexOf  includes filter map  object
var arr = [1,4,3,2,6,4,3,5,4,2,1,2,5,6]

const unique = arr => {
    const res = []
    arr.forEach((item) => {
        if(res.indexOf(item) === -1 || !res.includes(item)){
            res.push(item)
        }
    })
    return res
}

const unique2 = arr => {
  return  arr.filter((item,index) => (arr.indexOf(item) === index))
}

const unique3 = arr => {
    const map = new Map()
    const res = []
    arr.forEach((item,index) => {
        if(!map.has(item)){
            map.set(item,true)
            res.push(item)
        }
    })
    return res
}

console.log(unique(arr),'-',unique2(arr),'-',unique3(arr))
```

### 类数组转化为数组

```javascript
Array.from()
Array.prototype.slice.call()
[...arguments]
Array.prototype.concat.apply([],arguments)

```

### 生成0或指定数字到100的数组,  变：随机数组*

```javascript
*//实现方法六：*
var arr6 = Array.from({ length: 100 }, (*v*, *k*) => *k*);
console.log(arr6);

*//实现方法七：*
var arr7 = Array.from(Array(100), (*v*, *k*) => *k*);
console.log(arr7);

*//实现方法八： 再配合splice*
var arr8 = new Array(100).keys();
console.log(Array.from(arr8));
```

