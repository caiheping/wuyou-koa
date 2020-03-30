const Koa = require('koa');
const koaBody = require('koa-body');
const path = require('path');
const static = require('koa-static');    //静态资源服务
const session = require('koa-session');

const getUploadFileExt = require('./utils/getUploadFileExt');
const getUploadFileName = require('./utils/getUploadFileName');
const checkDirExist = require('./utils/checkDirExist');
const checkToken = require('./middlewares/checkToken.js')

// admin
const a_banner = require('./router/admin/base')

// front
const f_home = require('./router/front/home')

const app = new Koa();

// 静态资源 例如：http://127.0.0.1:8888/static/upload/1562297696067.png
app.use(static(__dirname, 'static'));

// http://127.0.0.1:8888/#/login
app.use(static(
    path.join(__dirname, './dist')
))



// 配置session
app.keys = ['some secret hurr'];

const CONFIG = {
    key: 'koa:sess',
    maxAge: 60*60*1000,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: false,
    renew: false,
};

// 拦截，判断token是否过期
app.use(checkToken())

app.use(session(CONFIG, app));

app.use(koaBody({
    multipart:true, // 支持文件上传
    formidable:{
        uploadDir:path.join(__dirname,'static/upload'),
        keepExtensions: true,    // 保持文件的后缀
        maxFieldsSize:200 * 1024 * 1024, // 文件上传大小
        onFileBegin:(name,file) => {
            // console.log(file);
            // 获取文件后缀
            const ext = getUploadFileExt(file.name);
            // 最终要保存到的文件夹目录
            const dir = path.join(__dirname,`static/upload`);
            // 检查文件夹是否存在如果不存在则新建文件夹
            checkDirExist(dir);
            // 重新覆盖 file.path 属性
            file.path = `${dir}/${getUploadFileName(ext)}`;
        },
        onError:(err)=>{
            console.log(err);
        }
    }
}));

// admin
app.use(a_banner.routes());

// front
app.use(f_home.routes());

app.listen(8888);
