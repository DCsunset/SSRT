const router = require('koa-router')();

const index = async (ctx, next)=>{
    let title = 'index';
    console.log("gg");
    await ctx.render('index',{
        title
    });
}

const login = async (ctx, next)=>{
    let title = 'login';
    await ctx.render('login',{
        title
    });
}

router.post('/index', index);
router.post('/login', login);

module.exports = router;