const Router = require('koa-router');
const Models = require('../../models');
const Sequelize = require('sequelize');
const jwt = require('jsonwebtoken')
const md5 = require('md5');
const baseOrm = require('../../utils/base_orm')
const Op = Sequelize.Op;

const router = new Router();

// 秘钥
const secret = 'cai'

// 登陆接口
router.post('/login', async (ctx, next) => {
    let username = ctx.request.body.username ? ctx.request.body.username : '';
    let password = ctx.request.body.password ? md5(ctx.request.body.password) : '';
    console.log(ctx.request.body)
    if (!username || !password) {
        return ctx.body = {
            code: 400,
            data: '用户名或密码不能为空'
        }
    }
    let user = await Models.User.findOne({
        where: {
            username
        }
    });
    if (user === null) {
        return ctx.body = {
            code: 500,
            data: '不存在该用户'
        }
    }
    user = await Models.User.findOne({
        where: {
            username,
            password: password
        }
    });
    if (user === null) {
        return ctx.body = {
            code: 400,
            data: '密码错误'
        }
    }

    const token = jwt.sign(
        {
            id: user.get('id'),
            username: user.get('username')
        },
        secret,
        {expiresIn: 60*60*1000}
    )

    ctx.session.token = token
    ctx.cookies.set('token', token, {
        httpOnly: false,
        maxAge: 1000*60*60 // 设置token过期时间
    });

    return ctx.body = {
        code: 0,
        data: {
            user,
            token
        },
        message: 'success'
    }
});

/*
通用查询接口
table_name(必传)： 表名
page(非必传)： 页码, 例如：http://localhost:8888/admin/base?table_name=Company&page=1
limit(非必传)：每页条数, 例如：http://localhost:8888/admin/base?table_name=Companylimit=10
order(非必传): 排序方式, 例如：http://localhost:8888/admin/base?table_name=Company&order=-id,companyType
where(非必传): 查询条件, 例如： http://localhost:8888/admin/base?table_name=Company&where={"or":[{"id":{"gt":0}}]}(具体参考sequelize)
include(非必传)： 关联查询（表名）, 例如： http://localhost:8888/admin/base?table_name=Company&include=["Job"](具体参考sequelize)
关联查询（只获取关联表的id和company字段）例如：http://localhost:8888/admin/base?table_name=Company&include=[{"model":"Job","attributes":["id","company"]}]
例子：http://localhost:8888/admin/base?table_name=Company&page=1&limit=10&order=-id&where={"or":[{"id":{"gt":0}}]}&include=Job
模糊查询（% 再浏览器转义为 %25）： http://localhost:8888/admin/base?table_name=Company&page=1&limit=10&order=-id&where={"and":[{"companyName":{"like":"%25巴巴"}}]}

特殊符号（%），前端做法（url转义）： 使用：encodeURI(url)
例子：encodeURI('http://localhost:8888/admin/base?table_name=Company&page=1&limit=10&order=-id&where={"and":[{"companyName":{"like":"%巴巴"}}]}')
*/
router.get('/admin/base', async (ctx, next) => {
    let table_name = ctx.query.table_name ? ctx.query.table_name : '';
    let page = ctx.query.page ? parseInt(ctx.query.page) : '';
    let limit = ctx.query.limit ? parseInt(ctx.query.limit) : '';
    let where = ctx.query.where ? ctx.query.where : '';
    let order = ctx.query.order ? ctx.query.order.split(',') : '';
    let include = ctx.query.include ? ctx.query.include : '';

    let params = {}
    // 表名为必传参数
    if (!table_name) {
        return ctx.body = {
            code: 400,
            data: null,
            message: '参数缺失'
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
    // 关联查询
    if (include) {
        include = JSON.parse(include)
        params.include = []
        include.forEach(item => {
            if (Object.prototype.toString.call(item) === '[object Object]') {
                item.model = Models[item.model]
                params.include.push(item)
            } else if (Object.prototype.toString.call(item) === '[object String]') {
                params.include.push({
                    model: Models[item]
                })
            }
        })
    }
    // 参数条件
    if (where) {
        try {
            params.where = {}
            where = JSON.parse(where)
            for (let key1 in where) {
                if (Object.prototype.toString.call(where[key1]) === '[object Array]') {
                    where[key1].forEach(item => {
                        for (let key2 in item) {
                            if (Object.prototype.toString.call(item[key2]) === '[object Object]') {
                                for (let key3 in item[key2]) {
                                    item[key2] = {
                                        [Op[key3]]: item[key2][key3]
                                    }
                                }
                            }
                        }
                    })
                }
                params.where[Op[key1]] = where[key1]
            }
        } catch (e) {
            return ctx.body = {
                code: 0,
                data: null,
                message: 'where参数必须为json对象字符串'
            }
        }
    }
    try {
        // 是否分页返回
        if (page && limit) {
            let res = await Models[table_name].findAndCountAll(params);
            return ctx.body = {
                code: 0,
                data: {
                    count: res.count,
                    page,
                    limit,
                    rows: res.rows
                },
                message: 'success'
            }
        } else {
            let res = await Models[table_name].findAll(params);
            return ctx.body = {
                code: 0,
                data: res,
                message: 'success'
            }
        }
    } catch (e) {
        return ctx.body = {
            code: 500,
            data: null,
            message: '数据库查询错误'
        }
    }
})

// // 通用提交接口
// router.post('/admin/base', async (ctx, next) => {
//     let data = {
//         index: ctx.request.body.index,
//         image: ctx.request.body.image,
//         url: ctx.request.body.url,
//     }
//     try {
//         let res = await baseOrm.createData(Models[ctx.request.body.table_name], data)
//         return ctx.body = {
//             code: 0,
//             data: res,
//             message: 'success'
//         }
//     } catch (e) {
//         return ctx.body = {
//             code: 500,
//             data: null,
//             message: '数据库插入错误'
//         }
//     }
// })

// 图片上传
router.post('/uploadImg', async (ctx, next) => {
    const file = ctx.request.files.file;
    let urlPath = file.path.substring(file.path.lastIndexOf('/'));
    // 返回保存的路径
    return ctx.body = {
        code: 0,
        data: { url: 'http://' + ctx.headers.host + '/static/upload' + urlPath }
    };
})

module.exports = router
