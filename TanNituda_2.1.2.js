const pool =  require("./db");

const sql = 'SELECT rating, SUM(rental_duration) FROM film GROUP BY rating ORDER BY rating';

pool.query(sql, (err, res) => {
    try{
        console.log(res.rows);
    } catch(err){
        console.error(err.message);
    }
});

pool.end();