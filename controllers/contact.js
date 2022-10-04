module.exports = (req,res)=>{
    // res.sendFile(path.resolve(__dirname, '..', 'pages/index.html'));
    res.render('contect',{
        errors:req.flash('data'),
        // name:req.flash('data')
    })
}