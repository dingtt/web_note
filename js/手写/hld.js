function red(time) {
  console.log(time,"red");
}
function green(time) {
  console.log(time,"green");
}
function yellow(time) {
  console.log(time,"yellow");
}

const task = (type, time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (type) {
        case "red":
          red(time);
          break;
        case "green":
          green(time);
          break;
        case "yellow":
          yellow(time);
          break;
      }
      resolve();
    }, time);
  });
};

// 普通调用
const step = () => {
  task("red", 3000)
    .then(() => task("green", 5000))
    .then(() => task("yellow", 1000))
    .then(step);
};
// step();

// async/await
const  run =  async () => {
    await task('red',3000)
    await task('green',5000)
    await task('yellow',1000)
    run()
}
run()