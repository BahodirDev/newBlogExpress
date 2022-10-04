const pool = require("../db");

module.exports = async(req,res,next)=>{
    let id  = await req.session.userId;
    let user = await pool.query('SELECT * FROM author WHERE id = ($1)',[id]);
    if(user.rows[0]){
        next()
    }else{
        console.log('redirect');
        return res.redirect("/contact/login")
    }
}