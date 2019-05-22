const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index.html')
})

router.get('/about', async (ctx, next) => {
  await ctx.render('index.html')
})

router.get('/service', async (ctx, next) => {
  await ctx.render('index.html')
})

router.get('/connect', async (ctx, next) => {
  await ctx.render('index.html')
})
module.exports = router
