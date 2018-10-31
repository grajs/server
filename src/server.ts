import Koa from 'koa'
import router from './router/index'

const server = new Koa()
server.use(router.routes()).use(router.allowedMethods())
server.listen(3000)