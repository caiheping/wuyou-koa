const Router = require('koa-router');
const Models = require('../../models');

const router = new Router();

router.get('/front/home', async (ctx, next) => {
    let banner = await Models.Company.findAll({
        include: [
            {
                model: Models.Welfare
            },
            {
                model: Models.Job
            }
        ]
    })

    ctx.body = {
        code: 0,
        data: {
            banner
        }
    }
})

module.exports = router
