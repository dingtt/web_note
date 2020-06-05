const DTT = require('./dtt')
const Router = require('./router')
const app = new DTT()
const router = new Router()


    // console.log('ctx', ctx);
    // ctx.body = '这是一个新生成的页面'
    // ctx.res['Content-TYpe'] = 'plain/utf-8'
    router.get('/index', async ctx => {   console.log('index,xx') ; ctx.body = 'index page'; }); 
    router.get('/post', async ctx => { ctx.body = 'post page'; }); 
    router.get('/list', async ctx => { ctx.body = 'list page'; });
    router.post('/index', async ctx => { ctx.body = 'post page'; });
// 路由实例输出父中间件 router.routes() 
app.use(router.routes());


app.listen(3000, (ctx) => {
    console.log('执行');
})