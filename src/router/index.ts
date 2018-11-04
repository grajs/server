import Router from 'koa-router'
import Body from 'koa-body'


const router = new Router()
router.post('/post', Body(), ctx => {
    console.log(ctx.request)
    ctx.body = JSON.stringify(ctx.request.body)
})
export default router