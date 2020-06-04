// let fn1 = (x, y) => x + y
// let fn2 = z => z * z

// console.log(fn2(fn1(1, 2)))

// const compose0 = (...[first, ...other]) => (...args) => {
//     let ret = first(...args)
//     other.forEach(fn => {
//         ret = fn(ret)
//     })
//     return ret
// }

// console.log(0, compose0(fn1, fn2)(1, 2))

const compose = function (middlewares) {
    return function () {
        return dispatch(0)

        function dispatch(i) {
            let fn = middlewares[i]
            if (!fn) {
                return Promise.resolve()
            }
            return Promise.resolve(
                fn(function next() {
                    // promise完成后，再执行下一个 
                    return dispatch(i + 1)
                })
            )
        }
    }
}
let time = Date.now()
async function fn1(next) {
    console.log('fn1 begin', Date.now() - time);
    await next()
    console.log('fn1 end', Date.now() - time);
}

async function fn2(next) {
    console.log('fn2 begin', Date.now() - time);
    await delay()
    await next()
    console.log('fn2 end', Date.now() - time);

}

function fn3(next) {
    console.log("fn3", Date.now() - time);
}

function delay() {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove();
            console.log("setTimeout", Date.now() - time);
        }, 2000);
    });
}

const middlewares = [fn1, fn2, fn3];
const finalFn = compose(middlewares);
finalFn();