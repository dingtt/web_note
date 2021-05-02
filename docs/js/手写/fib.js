function fib(n) {
  // 递归出口
  if (n === 1 || n === 2) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

// fib(20)
// console.log(fib(20));

// 排列组合  Amn  C mn
//  n * (n-1) * (n-2) * (n-3) * (n -m + 1)
//  n * (n-1) * (n-2) * (n-3) * (n -m + 1) / m * (m- 1) * (m-2)

function factorial(n,end){
  // let res = 1
  if(n <= end){
    return end
  }
  return n * factorial(n-1)
}

// console.log(factorial(4))

function rank(n,m){
  if(n < m) return
  return factorial(n,(n- m +1))
}

function compose(n,m){
  if(n < m) return
  return factorial(n,(n-m +1))/ factorial(m,1)
}
// A42 12
// console.log(rank(4,2))
// C42 6
// console.log(compose(4,2))


function storefib(n) {
  let store = {}
  return help(store, n)
}
function fib(n){
  if(n ===1 || n ===2){
      return 1
  }
  return fib(n-1) + fib(n-2)
}

function help(store, n) {
  if (n === 1 || n === 2) {
      return 1
  }
  if (store[n]) return store[n]
  store[n] = help(store,n - 1) + help(store,n - 2)
  return store[n]
}

function dpfib(n){
  let dp = []
  dp[1] = dp[2] = 1
  for(let i = 3; i <= n; i ++){
      dp[i] = dp[i-1] + dp[i-2]
  }
  return dp[n]
}


const timer1 = Date.now()
console.log(storefib(100))
const timer2 = Date.now()
console.log('store',timer2 - timer1)
console.log(fib(20))
const timer3 = Date.now()
console.log('fib',timer3 - timer2)
console.log(dpfib(30))
console.log(Date.now() - timer3)

