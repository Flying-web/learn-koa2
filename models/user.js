/** * 用户信息 */
const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
Schema = mongoose.Schema;
const UserSchema = new Schema({
    username: { type: String, required: [true,'username不能为空']  }, //用户账号 
    userpwd: { type: String, required: [true,'userpwd不能为空']  }, //密码 
    userage: { type: Number }, //年龄 
    logindate: { type: Date } //最近登录时间 
});
module.exports = mongoose.model('User', UserSchema);