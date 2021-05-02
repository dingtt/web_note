var arr = [7, 4, 6, 9, 1, 3, 5];

function popSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      const temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
    
  }
}
popSort(arr)
console.log(arr)