# TS枚举 类型 接口 泛型
数字枚举

字符串枚举

异构枚举

反向映射

常量枚举

枚举成员类型

假设枚举的所有成员都是字面量类型的值，那么枚举的每个成员和枚举值本身都可以作为类型来使用。

联合枚举类型

```
enum Direction {
    Up,
    Down,
    Left,
    Right
}

declare let a: Direction
```

把 `a` 声明为 `Direction` 类型，可以看成我们声明了一个联合类型 `Direction.Up | Direction.Down | Direction.Left | Direction.Right`

#### 枚举合并

分开声明，自动合并

### 接口

可选属性  只读属性  函数类型

```
say: (words: string) => string

interface Say {
    (words: string) : string
}
say:Say
```

#### 属性检查

类型断言，字符串索引签名，

可索引类型

```
interface Phone {
    [name: string]: string
}
```

#### 继承接口



### 类

#### 抽象类

抽象类做为其它派生类的基类使用,它们一般不会直接被实例化,不同于接口,抽象类可以包含成员的实现细节。

```
abstract class Animal {
    abstract makeSound(): void;
    move(): void {
        console.log('roaming the earch...');
    }
}
// 不能直接实例化抽象类，通常需要我们创建子类继承 extends 基类,然后可以实例化子类。
```

#### 访问限定符

public 默认 protected 类和子类可访问  private 类内部可访问



### 泛型

它是一种特殊的变量，只用于表示类型而不是值。

```
function returnItem<T>(para: T): T {
    return para
}
```

#### 多个类型的泛型

```ts
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

swap([7, 'seven']); // ['seven', 7]
```

#### 泛型变量

```
function getArrayLength<T>(arg: Array<T>) {
  console.log((arg as Array<any>).length) // ok
  return arg
}
// T[]
```

#### 泛型接口

```
interface ReturnItemFn<T> {
    (para: T): T
}
const returnItem: ReturnItemFn<number> = para => para
```

泛型类

```

```

泛型约束

extends

泛型约束与索引类型

```
function getValue<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key] // ok
}
function getValue<t extends object, U extends key of T>(obj:T,key:U): U as key of T {
   return obj[key]
}
```



#### 多重类型进行泛型约束

接口包一层，或者使用交叉类型 &

#### 泛型与 new

`{new(): T}` 就表示此泛型 T 是可被构造的，在被实例化后的类型是泛型 T。

### 类型守卫

instanceof  

in  

字面量类型守卫

### 类型兼容性

结构类型兼容   <=   多的可以赋值给少的  ；

 函数兼容 >= ，参数少的可以赋值给参数多的；

枚举的兼容性，枚举和数字类型相互兼容。

类的类型兼容性，仅仅只有实例成员和方法会相比较，构造函数和静态成员不会被检查，私有的和受保护的成员必须来自于相同的类。

参比图片，项目信息，执法手动上传，通道数据