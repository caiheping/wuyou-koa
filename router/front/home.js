const Router = require('koa-router');
const Models = require('../../models');

const router = new Router();

router.get('/front/home', async (ctx, next) => {
    let areas = await Models.Area.findAndCountAll()
    let banner = await Models.Banner.findAll()

    let data  = {
        areas,
        banner
    }
    ctx.body = {
        code: 0,
        data: data
    }
})

module.exports = router
