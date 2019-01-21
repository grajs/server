import Koa from 'koa'
import Static from 'koa-static'
import Body from 'koa-body'
import router from './router/index'
import {resolve} from 'path'

const app = new Koa()
app.use(Static(resolve(__dirname, '../static')))
app.use(Body({multipart: true}))
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000)