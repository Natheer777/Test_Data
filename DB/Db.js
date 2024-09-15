const mysql = require('mysql2')
const db = mysql.createPool({
    host:'bsykmlvhx1my6dknsl9l-mysql.services.clever-cloud.com',
    port :3306,
    database:'bsykmlvhx1my6dknsl9l',
    password:'YBBaJj60WIeV4A8KWkfL',
    user:'up07jtqks2nbbjss'
})
db.getConnection((err , connection) =>{
    if(err){
        console.error('error',err);
        return;
    }
    console.log('connection good');
    connection.release()

})

module.exports = db