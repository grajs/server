import Router from 'koa-router'

const router = new Router()
router.get('/get',ctx=>{
    ctx.body = 'get path ===='
})
export default router
