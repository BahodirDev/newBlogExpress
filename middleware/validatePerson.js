module.exports = (req,res,next)=>{
    const {first_name,login,password} = req.body;
    try {
        if(!first_name || !login || !password){
            if(req.body.first_name){
                console.log(req.body.first_name);
                req.flash('data',req.body.first_name)
            }
            if(req.body.login){
                console.log(req.body.login);
                req.flash('data',req.body.login)

            }
            if(req.body.password){
                console.log(req.body.password);
                req.flash('data',req.body.password)

            }
            if(!req.body.first_name && !req.body.login && !req.body.password){
                req.flash('data','All fields are required')
            }
            return res.redirect('/contact')
        }  
        next()
    } catch (error) {
        console.log(error);
    }
  
}