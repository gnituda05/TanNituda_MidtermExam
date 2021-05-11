const pool =  require("./db");

const sql =  'SELECT c.first_name "Customer First Name", c.last_name "Customer Last Name", p.customer_id "Customer ID", p.amount "Customer paid $" FROM customer c JOIN payment p ON c.customer_id = p.customer_id';

pool.query(sql, (err, res) => {
    try{
        console.log(res.rows);
    } catch(err){
        console.error(err.message);
    }
});

pool.end();