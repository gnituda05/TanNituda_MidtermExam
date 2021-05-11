const pool =  require("./db");

const sql = 'SELECT * FROM  midterm_list_of_films_per_category';

pool.query(sql, (err, res) => {
    try{
        console.log(res.rows);
    } catch(err){
        console.error(err.message);
    }
});

pool.end();