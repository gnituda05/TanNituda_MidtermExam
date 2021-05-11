const pool =  require("./db");

const sql =  'SELECT a.first_name, a.last_name, fa.actor_id, f.film_id, f.title FROM actor a JOIN film_actor fa ON a.actor_id = fa.actor_id JOIN film f ON f.film_id = fa.film_id';
                   
pool.query(sql, (err, res) => {
    try{
        console.log(res.rows);
    } catch(err){
        console.error(err.message);
    }
});

pool.end();