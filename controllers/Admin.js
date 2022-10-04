const pool = require("../db")

module.exports = async(req,res)=>{
    let posts = await pool.query('SELECT posts.*,author.first_name FROM posts LEFT JOIN author ON posts.postedby = author.id ');
   
    res.render('admin',{posts:posts.rows})
}