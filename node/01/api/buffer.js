const buf1 = Buffer.alloc(10)
console.log(buf1);

const buf2 = Buffer.from('a')
console.log(buf2, buf2.toString());

const buf3 = Buffer.from('这里又汉字111')
console.log('buf3', buf3, buf3.toString());

buf1.write('buf1 add 新增')  //lost 
console.log('buf1 add', buf1 ,buf1.toString()); 

const buf4 = Buffer.concat([buf1, buf2])
console.log('buf4',buf4, buf4.toString());




