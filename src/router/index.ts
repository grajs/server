import Router from 'koa-router'

const router = new Router()
router.post('/post', ctx => {
    ctx.body = JSON.stringify(ctx.request.body)
})
router.post('/post', ctx => {
    ctx.body = JSON.stringify(ctx.request.body)
})
export default router
