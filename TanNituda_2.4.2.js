const pool =  require("./db");

const sql =  'SELECT * FROM public.count_rating(6)';

pool.query(sql, (err, res) => {
    try{
        console.log(res.rows);
    } catch(err){
        console.error(err.message);
    }
});

pool.end();