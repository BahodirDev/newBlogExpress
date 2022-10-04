const pool = require("../db");

module.exports = async(req,res)=>{
    // res.sendFile(path.resolve(__dirname, '..', 'pages/index.html'));
    const answ = await pool.query("SELECT *, posts.id as id, author.id as aid FROM posts JOIN author ON author.id = posts.postedBy");
    res.render('index', {posts:answ.rows})
}