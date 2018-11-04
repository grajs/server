import Koa from 'koa'
import Static from 'koa-static'
import router from './router/index'

const app = new Koa()
app.use(Static())
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000)