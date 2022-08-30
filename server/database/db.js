const Pool = require('pg')
const pg = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'prj3',
    password: '123456',
    port: '5432'
});

module.exports = pg