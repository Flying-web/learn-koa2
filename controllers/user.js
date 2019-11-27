

const users = require('../models/user') // user 数据库
const reset = require('../utils')
const Joi = require('joi')
// 用户列表
const fn_user_list = async (ctx, next) => {
    const data = await users.find()
    ctx.body = reset.set(data)
};
// 注册
const fn_user_add = async (ctx, next) => {
    let data = ctx.request.body
    let schema = Joi.object().keys({
        username: Joi.string().required().label('用户名').error(()=>'用户名必填'),
        userpwd: Joi.string().required().label('密码').error(()=>'密码必填'),
        userage: Joi.number().required().label('年龄')
    })
    let result = Joi.validate(data, schema);
    if(result.error) {
        return ctx.body = reset.error(400,result.error.details)
    }
    let reqdata = result.value; //经过验证后的数据
    const rsq = await users.create({...reqdata,logindate:new Date()})
    ctx.body = reset.set(rsq)
};
// 登陆
const fn_user_login = async (ctx, next) => {
    let data = ctx.request.body
    let schema = Joi.object().keys({
        username: Joi.string().required(),
        userpwd: Joi.string().required()
    })
    let result = Joi.validate(data, schema);
    if(result.error) {
        return ctx.body = reset.error(3,result.error.details)
    }
    let reqdata = result.value; //经过验证后的数据
    const rsq = await users.create({...reqdata,logindate:new Date()})
    ctx.body = reset.set(rsq)
};

module.exports = {
    'GET /user/list': fn_user_list,
    'POST /user/add': fn_user_add,
    'POST /user/login': fn_user_login
};