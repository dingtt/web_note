# TS基础

## 基础

https://ts.xcatliu.com/basics/type-assertion.html

### 原始数据类型

boolean number string null undefined symbol

#### 空值 void

```
let unusable: void = undefined;
```

#### Null 和 Undefined

`undefined` 和 `null` 是所有类型的子类型。也就是说 `undefined` 类型的变量，可以赋值给 `number` 类型的变量

```
let u: undefined = undefined;
let n: null = null;
// 这样不会报错
let num: number = undefined;
// 这样也不会报错
let u: undefined;
let num: number = u;
```

`void` 类型的变量不能赋值给 `number` 类型的变量

### 任意值

`any` 类型，允许被赋值为任意类型。

声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。

#### 未声明类型的变量

变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型。

### 类型推导

如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。

如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 `any` 类型而完全不被类型检查。

### 联合类型

联合类型（Union Types）表示取值可以为多种类型中的一种

#### 访问联合类型的属性或方法

只能访问此联合类型的所有类型里共有的属性或方法。

联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型。

### 对象的类型——接口

在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。

它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）。

除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述。

**赋值的时候，变量的形状必须和接口的形状保持一致**

#### 可选属性

```ts
interface Person {
    name: string;
    age?: number;
}

let tom: Person = {
    name: 'Tom',
    age: 25
};
```

仍然不允许添加未定义的属性

#### 任意属性

一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集。

```ts
interface Person {
    name: string;
    age?: number;
    [propName: string]: string;
    // [propName: string]: string | number;
}

let tom: Person = {
    name: 'Tom',
    age: 25, // 这里报错 ，可以修改为联合类型
    gender: 'male'
};
```

一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型。

#### 只读属性

只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候

```
readonly 
```

### 数组的类型

#### 类型+方括号表示法

```ts
let fibonacci: number[] = [1, 1, 2, 3, 5];
fibonacci.push('8'); 
// Argument of type '"8"' is not assignable to parameter of type 'number'.
```

#### 数组泛型

```
let fibonacci: Array<number> = [1, 1, 2, 3, 5];
```

#### 用接口表示数组

```ts
interface NumberArray {
    [index: number]: number; // NumberArray 表示：只要索引的类型是数字时，那么值的类型必须是数字。
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5];
```

#### 类数组

类数组，不能用普通的数组的方式来描述，而应该用接口

```ts
function sum() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}
```

常用的类数组都有自己的接口定义，如 `IArguments`, `NodeList`, `HTMLCollection` 等

```
function sum() {
    let args: IArguments = arguments;
}
```

#### any 在数组中的应用

```
let list: any[] = ['xcatliu', 25, { website: 'http://xcatliu.com' }];
```

### 函数的类型

#### 函数声明

```
function sum(x: number, y: number): number {
    return x + y;
}
```

#### 函数表达式

```
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};
```

#### 用接口定义函数的形状

```ts
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}
```

#### 可选参数

可选参数后面不允许再出现必需参数

```ts
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');
```

#### 参数默认值

TypeScript 会将添加了默认值的参数识别为可选参数，此时就不受「可选参数必须接在必需参数后面」的限制了

```ts
function buildName(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName;
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');
```

#### 剩余参数

```ts
function push(array: any[], ...items: any[]) {
    items.forEach(function(item) {
        array.push(item);
    });
}
```

#### 重载

```ts
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
```

### 类型断言

类型断言（Type Assertion）可以用来手动指定一个值的类型。

`值 as 类型` 或 `<类型>值`， tsx 语法（React 的 jsx 语法的 ts 版）中必须使用前者

#### 将一个联合类型断言为其中一个类型

```ts
interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}

function isFish(animal: Cat | Fish) {
    if (typeof (animal as Fish).swim === 'function') {
        return true;
    }
    return false;
}

function swim(animal: Cat | Fish) {
    (animal as Fish).swim();
}

const tom: Cat = {
    name: 'Tom',
    run() { console.log('run') }
};
swim(tom);
// Uncaught TypeError: animal.swim is not a function`
```

使用类型断言时一定要格外小心，尽量避免断言后调用方法或引用深层属性，以减少不必要的运行时错误。

#### 将一个父类断言为更加具体的子类