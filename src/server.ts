import Koa from 'koa'
import Static from 'koa-static'
import BodyParser from 'koa-bodyparser'
import router from './router/index'
import {resolve} from 'path'

const app = new Koa()
app.use(Static(resolve(__dirname, '../static')))
app.use(BodyParser())
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000)
