# learn-koa2
一个基于 koa2 mongoose pm2 的 简易node后端


运行 `npm start `
或者 `yarn start`

部署时 `yarn run prd`
需要全局安装 PM2
------
##### 所包含中间件 ：

1. `const bodyparser = require('koa-bodyparser') //post data解析`
2. `const app = new Koa()`
3. `const controllers = require('./controllers') // 路由加载`
4. `const logger = require('koa-logger') //日志打印`
5. `const server = require('koa-static') //静态资源处理`
6. `const path = require('path') // 路径`
7. `const session = require('koa-session') //登录状态保存`
8. `const mongoConf = require('./db') //mongoose 连接数据库`
9. `const cors = require('koa2-cors') // 跨域`
10. `const reset = require('./utils') // 统一包装处理返回数据，`

