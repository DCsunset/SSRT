const koa = require('koa');
const path = require('path');
const bodyParser = require('koa-bodyparser');
const nunjucks = require('koa-nunjucks-2');
const static = require('koa-static')

const app = new koa();
app.use(bodyParser());
const router = require('./router');

// html模板
app.use(nunjucks({
    ext: 'html',
    path: path.join(__dirname, 'views'),// 指定视图目录
    nunjucksConfig: {
        trimBlocks: true // 开启转义 防Xss
    }
}));


app.use(router.routes(), router.allowedMethods());

// 配置静态资源
const staticPath = './static'
app.use(static(
    path.join( __dirname, staticPath)
))

app.listen(3000, () => {
    console.log('server is running at http://localhost:3000');
})