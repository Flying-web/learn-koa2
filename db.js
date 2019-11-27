// var mongoose = require('mongoose'),

//     DB_URL = 'mongodb://localhost:27017/qingyun'; /** * 连接 */

// mongoose.connect(DB_URL,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// });
// /** * 连接成功 */
// mongoose.connection.on('connected', function () {  

//     console.log('Mongoose connection open to ' + DB_URL);
// });
// /** * 连接异常 */
// mongoose.connection.on('error', function (err) {

//     console.log('Mongoose connection error: ' + err);
// }); 
// /** * 连接断开 */
// mongoose.connection.on('disconnected', function () {   

//     console.log('Mongoose connection disconnected');
// });

// module.exports = mongoose;

// config/mongo.js
const mongoose = require('mongoose').set('debug', true);
const options = {
    autoReconnect: true,
    useNewUrlParser: true,
    useUnifiedTopology:true
}

// username 数据库用户名
// password 数据库密码
// localhost 数据库ip
// dbname 数据库名称
const url = 'mongodb://localhost:27017/qingyun'

module.exports = {
    connect: ()=> {            
        mongoose.connect(url,options)
        let db = mongoose.connection
        db.on('error', console.error.bind(console, '连接错误:'));
        db.once('open', ()=> {
            console.log('mongodb connect suucess');
        })
    }
}