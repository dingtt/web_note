// const loadImgOneByOne = () =>{
//   for(i of arr){
//     await LoadImg(arr[i])
//   }
// }

const LoadImg = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onerror = function () {
      reject(url);
    };
    img.onload = function () {
      img = null;
      resolve(url);
    };
    img.src = url;
  });
};

const loadByLimit = (arr, LoadImg, limit) => {
  const arrCopy = [...arr]
  // 数组小于最大并发数
  if(arr.length < limit){
    const promiseArray = arr.map(item => LoadImg(item)) 
    return Promise.all(promiseArray)
  }
  // 大于  slice
  const promiseArray = arrCopy.splice(0,limit).map(item => LoadImg(item))
  arrCopy.reduce((prevPromise,item) => {
    prevPromise.then(() => Promise.race(promiseArray))
    .catch(err => {console.log(err)})
    .then(resolveId => {
      let resolveIdPostion = promiseArray.findIndex(id => resolveId === id)
      promiseArray.splice(resolveIdPostion, 1)
      promiseArray.push(LoadImg(item))
    })
  },Promise.resolve())
  // .then(() => Promise.all(promiseArray))
};
