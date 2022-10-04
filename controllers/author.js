const pool = require("../db");
const bcrypt = require('bcrypt')

const getAll = async(req,res)=>{
    // res.sendFile(path.resolve(__dirname, '..', 'pages/about.html'));
    try {
        let answ = await pool.query("SELECT * FROM  author");
        res.status(200).json(answ.rows)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
    // res.render('about')
}

// Foydalanuvchini qp'shish

const addAuth = async(req,res)=>{
    // res.sendFile(path.resolve(__dirname, '..', 'pages/about.html'));
   try {
    const {first_name,login,password} = req.body;
    const salt = await bcrypt.genSalt(10)
    const validaPassword = await bcrypt.hash(password,salt)
    let answ = await pool.query("INSERT INTO author (first_name,login,password) VALUES ($1,$2,$3) RETURNING *",[first_name,login,validaPassword])
    res.redirect('/contact/login')
   } catch (error) {
    res.status(500).json({error:error.message})
   }
}     

// Foydalanuvchini login tekshirish
const checkAuth = async(req,res)=>{
    try {
        const {password,login} = req.body;
        let user = await pool.query(`SELECT * FROM author WHERE login LIKE '%${login}%'`);
        if(user.rows[0]){
            let checkOut = await bcrypt.compare(password,user.rows[0].password);
            if(checkOut){
                req.session.userId = user.rows[0].id;
                return res.redirect('/')
            }else{
                return res.redirect('/contact/login')
            }
        }else{
            return res.redirect('/contact/login')
        }
    } catch (error) {
        console.log(Object.keys(error.errors));
    }
}

module.exports ={getAll, addAuth, checkAuth} 