const Router = require('koa-router')
const router = new Router()
router.get('/', (ctx: any, next: Function) => {
    ctx.body = 'hello word'
})
export default router