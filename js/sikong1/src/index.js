async function fetchData(url) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', `json/${url}`, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          var data = JSON.parse(xhr.responseText);
          resolve(data)
        } else {
          reject()
        }
      }
    };
    xhr.send();
  })
};

function notNull(val) {
  return val !== null && val !== "" && typeof val !== "undefined"
}

function mergeObject(obj1, obj2) {
  const merged = { ...obj1 }
  for (key in obj2) {
    if (!merged[key]) {
      merged[key] = obj2[key]
    } else {
      if (Array.isArray(merged[key]) && Array.isArray(obj2[key])) {
        merged[key] = [...merged[key], ...obj2[key]]
      } else if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
        merged[key] = mergeObject(obj1[key], obj2[key]);
      } else {
        // 类型不同 保留某个原始类型
        if (typeof obj1[key] !== 'object' && notNull(obj1[key])) {
          merged[key] = obj1[key]
          console.log('discard', JSON.stringify(obj2[key]))
        } else if (typeof obj2[key] !== 'object' && notNull(obj2[key])) {
          merged[key] = obj2[key]
          console.log('discard', JSON.stringify(obj1[key]))
        }
      }
    }
  }
  return merged
}

async function merge(urlA, urlB, urlC) {
  const datas = await Promise.all([
    fetchData(urlA),
    fetchData(urlB),
    fetchData(urlC)
  ])
  const mergedData = datas.reduce((pre, cur) => mergeObject(pre, cur), {})
  return Promise.resolve(mergedData); // 返回新的json
}

