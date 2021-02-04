常见面试CSS问题

### 画三角形

宽高为0，4个border宽度，一边上色，三遍透明，角度调上色边的宽度，宽度越大，三角形越尖。

### 画扇形

- 方案一： border画的三角形，加border-radius改造。缺点，切得是同一个圆的弧。

- **方案二：矩形+半圆相切**

一个背景色圆，after，before，用clip裁切两个半圆，通过半圆旋转遮挡，显示扇形， clip(x,w,h,y)

```css
.sector{
    width: 200px;
    height: 200px;
    border-radius: 200px;
    background-color: deepskyblue;
    position: relative;
  }
  .sector::before{
    content: "";
    width: 200px;
    height: 200px;
    position: absolute;
    background-color: white;
    border-radius: 200px;
    /*裁减半圆，再做旋转*/
    clip: rect(0px,100px,200px,0);
    transform: rotate(-60deg);
  }
  .sector::after{
    content: "";
    width: 200px;
    height: 200px;
    position: absolute;
    background-color: white;
    border-radius: 200px;
    /*裁减半圆，再做旋转*/
    clip: rect(0px,200px,200px,100px);
    transform: rotate(60deg);
  }
```

方案三：圆锥渐变   yueing

```
background: conic-gradient(deeppink 0, deeppink 30%, yellowgreen 30%, yellowgreen 100%); // 0 30% 也可以写到一起，兼容性不好
background-image: conic-gradient(#37c 0 60deg, #ccc 60deg 360deg);  // #ccc起始角度需小于60, 总数大于360
background-image: conic-gradient(#37c 0,#37c 60deg, #ccc 60deg, #ccc 360deg);
```

#### BFC

块级格式上下文，是一种渲染规则，决定了这一块如何排列和渲染。

**布局规则**：

- 内部的Box会在垂直方向上一个一个排放，距离由margin决定，不同的BFC不会产生负margin重叠。
- BFC中的子元素的左外边距，与块的左边界接触
- BFC的区域不会与float的元素区域重叠
- 计算BFC高度时，浮动子元素也参与计算。

**触发**

- 根元素 HTML标签
- 浮动元素 float  left right
- overflow不为visible，为auto scroll hidden
- display值为 inline-block  table table-cell table-caption  inline-table flex inline-flex grid inline-grid
- 定位元素 position值为absolute fixed

**应用**

解决负margin，overflow:auto

利用float 和 右侧形成BFC，构造固比模型

解决float塌陷

#### 重排重绘

#### 浏览器分层

#### css js阻塞

#### CSS 水波纹

#### position属性值

static  reactive absolute fiexd sticky

#### Css预处理器，Less的好处

#### CSS选择器，权重

10个，id  类 标签 相邻 子代 孙代    属性 伪类  通配符

#### float和positon区别

#### nth-child和nth-type-of区别

flex布局

#### 不知道宽高的div居中

绝对定位+ transform

flex

#### grid布局

#### 左右100px，中间自适应，3三种以上

浮动+ BFC  浮动 + padding  

flex     0 0 100px   1 0 auto

定位 

calc + inline-block 

```

```



#### 屏幕占满和未占满的情况下，使 footer 固定在底部

#### CSS画三角形

#### 超出省略，三行超出省略

```
over-flow：eslipise line-com
```

#### Css inherit、initial、unset 三者的区别

#### css3 中 position:sticky

#### 清楚浮动

#### transform相对left top的优势

#### 上下固定，中间滚动布局

#### css单位有哪些

#### 多列等高布局，整体高度以较高的为准

#### CSS实现半圆

clip border-radius， 圆锥渐变

#### CSS选择器有哪些分类

#### DIV宽度自适应，宽高保持等比缩放？

#### ul 内部除最后一个 li 以外设置右边框效果

#### flex:1 的完整写法是？分别是什么意思？

shark  

flow

#### CSS实现弹幕