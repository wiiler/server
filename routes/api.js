const router = require('koa-router')();
const mail = require('../common/sendMail');

router.prefix('/api')

router.get('/message', async  (ctx, next) => {
  const request = ctx.request;
  const query = request.query;
  try {
    const info = await mail(query);
    ctx.body = {
      error: 0
    }
  } catch (error) {
    ctx.body = {
      error: -1
    }
  }
})

module.exports = router
