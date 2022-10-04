module.exports = (req,res,next)=>{
    const {login,password} = req.body
    if(!login || !password){
        return res.redirect('/contact/login')
    }   
    next()
}