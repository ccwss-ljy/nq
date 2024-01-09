const mysql = require('mysql')

const db = mysql.createPool({
    host:'sh-cynosdbmysql-grp-2b5s17bu.sql.tencentcdb.com',
    port:'20412',
    user:'root',
    password:'l19980119!',
    database:'nodejs_demo'
})

module.exports = db