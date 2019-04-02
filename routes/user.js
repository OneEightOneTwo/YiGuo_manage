let db = require('./mysql.js');
db('select * from user', null, (data) => {
    // console.log(data);
    
});
