const router = require('koa-router')();

const index = async (ctx, next)=>{
    let title = 'index';
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

router.get('/index', index);
router.get('/login', login);

router.post('/login', async ctx => {
	console.log('Yes');
	ctx.body = {
		user: ctx.request.body.user,
		pwd: ctx.request.body.pwd
	};
});

module.exports = router;
