const pool =  require("./db");

const sql =  'SELECT actor()';

pool.query(sql, (err, res) => {
    try{
        console.log(res.rows);
    } catch(err){
        console.error(err.message);
    }
});

pool.end();