import Router from 'koa-router'
import { process } from '../utils'

const router = new Router()
router.get('/get', async (ctx: any, next: Function) => {
    await process()
    ctx.body = 'get path ===='
})
export default router
