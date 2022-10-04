const pool = require("../db");
const validatePost = require("../middleware/validatePost");

const setPage = async(req,res)=>{
    try {
  
        res.render('inputBar')
    } catch (error) {
        res.status(500).json({error:error.message})
    }
    // res.sendFile(path.resolve(__dirname, '..', 'pages/index.html'))
}
const getAll = async(req,res)=>{
    try {
        let answ = await pool.query("SELECT posts.*, author.first_name FROM posts JOIN author ON author.id = posts.postedBy");
        res.status(200).json(answ.rows)
    } catch (error) {
        
        res.render('inputBar')
    }
    // res.sendFile(path.resolve(__dirname, '..', 'pages/index.html'))
}

// const AddPost = async(req,res)=>{
   
//     try {
//         // res.sendFile(path.resolve(__dirname, '..', 'pages/index.html'))
//         const {title,body,postedBy} = req.body;
//         const {image} = req.files;
//         await image.mv(path.resolve(__dirname, '..', 'public/images', image.name),async(e)=>{
//             let answ = await  pool.query('INSERT INTO posts (title,body,postedBy,img) VALUES ($1,$2,$3,$4) RETURNING *',[title,body,postedBy,`/images/${image.name}`])
//              res.redirect('/')
//         })
//     } catch (error) {
//        res.status(500).json({error:error.message})
//     }
  
// }
const GetOne = async(req,res)=>{
    let answ = await pool.query(`SELECT posts.*, author.first_name FROM posts JOIN author ON author.id = posts.postedBy where posts.id=${req.params.id}`);
        console.log(answ.rows[0],'SALOM');
    res.render('post',{post:answ.rows[0]})
}
const UpdateOne = async(req,res)=>{
    let answ = await pool.query(`UPDATE posts SET istrue = ${true} where id = ${req.params.id}`);
        console.log(answ.rows[0],'SALOM');
        return  res.redirect('/admincontrol')
}
const UpdateTwo = async(req,res)=>{
    let answ = await pool.query(`UPDATE posts SET istrue = ${false} where id = ${req.params.id}`);
        console.log(answ.rows[0],'SALOM');
        return  res.redirect('/admincontrol')
}
const DeleteOne = async(req,res)=>{
    let answ = await pool.query(`DELETE FROM posts WHERE id = ${req.params.id}`);
    let newMass  = await pool.query("SELECT posts.*, author.first_name FROM posts LEFT JOIN author ON author.id = posts.postedby");
    console.log(newMass.rows);
  return  res.redirect('/admincontrol')
}

module.exports = {setPage,getAll,GetOne,UpdateOne,DeleteOne,UpdateTwo}