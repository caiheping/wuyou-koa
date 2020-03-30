const Router = require('koa-router');
const Models = require('../../models');
const Sequelize = require('sequelize');
const jwt = require('jsonwebtoken')
const Op = Sequelize.Op;

const router = new Router();

const secret = 'cai'

// 登陆接口
router.post('/login', async (ctx, next) => {
    // let username = ctx.request.body.username ? ctx.request.body.username : '';
    // let password = ctx.request.body.password ? md5(ctx.request.body.password) : '';
    // if (!username || !password) {
    //     return ctx.body = {
    //         code: 1,
    //         data: '用户名或密码不能为空'
    //     }
    // }
    //
    // let user = await Models.User.findOne({
    //     where: {
    //         username,
    //         is_delete: 0
    //     }
    // });
    // if (user === null) {
    //     return ctx.body = {
    //         code: 1,
    //         data: '不存在该用户'
    //     }
    // }
    // user = await Models.User.findOne({
    //     where: {
    //         username,
    //         password: password
    //     }
    // });
    // if (user === null) {
    //     return ctx.body = {
    //         code: 1,
    //         data: '密码错误'
    //     }
    // }

    const token = jwt.sign(
        {
            id: 1,
            username: 'cai'
        },
        secret,
        {expiresIn: 60*60*1000}
    )

    ctx.session.token = token
    ctx.cookies.set('token', token, {
        httpOnly: false,
        maxAge: 1000*60*60 // 设置token过期时间
    });

    ctx.body = {
        code: 0,
        data: {
            token
        }
    }
});


// 通用查询接口
router.get('/admin/base', async (ctx, next) => {
    let table_name = ctx.query.table_name ? ctx.query.table_name : '';
    let page = ctx.query.page ? parseInt(ctx.query.page) : ''
    let limit = ctx.query.limit ? parseInt(ctx.query.limit) : ''
    let where = ctx.query.where ? ctx.query.where : ''
    let order = ctx.query.order ? ctx.query.order.split(',') : ''

    let params = {}
    // 表名为必传参数
    if (!table_name) {
        return ctx.body = {
            code: 400,
            data: {
                message: '参数缺失'
            }
        }
    }
    // 当前页
    if (page) {
        params.offset = (page - 1) * limit
    }
    // 每页显示条数
    if (limit) {
        params.limit = limit
    }
    // 查询顺序
    if (order) {
        params.order = []
        order.forEach(item => {
            if (item.indexOf('-') === 0) {
                params.order.push([item.substr(1), 'DESC'])
            } else {
                params.order.push([item.trim(), 'ASC'])
            }
        })
    }
    // 参数条件
    if (where) {
        try {
            params.where = {}
            where = JSON.parse(where)
            console.log(where.url)
            for (let key in where) {
                params.where[key] = {
                    // 模糊查询
                    [Op.like]: '%' + where[key] + '%'
                }
            }
        } catch (e) {
            return ctx.body = {
                code: 0,
                data: 'where 必须未json对象字符串'
            }
        }
    }
    try {
        if (page && limit) {
            console.log(page)
            let res = await Models[table_name].findAndCountAll(params)
            return ctx.body = {
                code: 0,
                data: {
                    count: res.count,
                    page,
                    limit,
                    rows: res.rows
                }
            }
        } else {
            let res = await Models[table_name].findAll(params)
            return ctx.body = {
                code: 0,
                data: res
            }
        }
    } catch (e) {
        return ctx.body = {
            code: 0,
            data: '数据库查询错误'
        }
    }
})

router.post('/admin/base', async (ctx, next) => {
    console.log(ctx.request.body)
    ctx.body = {
        code: 0,
        data: 'ok'
    }
})

// 图片上传
router.post('/uploadImg', async (ctx, next) => {
    const file = ctx.request.files.file;
    let urlPath = file.path.substring(file.path.lastIndexOf('/'))
    // 返回保存的路径
    return ctx.body = {
        code: 0,
        data: { url: 'http://' + ctx.headers.host + '/static/upload' + urlPath }
    };
})

module.exports = router
