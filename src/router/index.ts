import Router from 'koa-router'

const router = new Router()
router.post('/post', ctx => {
    console.log(ctx.request.body.fields)
    ctx.body = JSON.stringify(ctx.request.body.fields)
})
export default router
