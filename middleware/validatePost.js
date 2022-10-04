module.exports = (req,res,next)=>{
    if(!(req.files && req.files.image) || !req.body.title || !req.body.body ){
      return  res.redirect('/post')
    } 
    next()
}