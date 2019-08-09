var mysql = require('mysql');
 
//创建连接池
var pool  = mysql.createPool({
    host: '47.99.89.71',    
    user: 'root',
    password: '123456',
    database: 'danmu'
});
 
//监听connection事件
pool.on('connection', function(connection) {  
    connection.query('SET SESSION auto_increment_increment=1'); 
    console.log("mysql连接成功...IP：" + connection.config.host);
});
 

exports.pool = pool;