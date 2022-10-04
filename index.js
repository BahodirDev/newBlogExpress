const express = require('express');
const { config, engine } = require('express-edge');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const {MONGO_URI}  = require('./config/keys');
const fileUpload = require('express-fileupload');
const Expsession = require('express-session');
const connectFlash = require('connect-flash')
require('dotenv').config();


app.use(Expsession({
    secret:"session"
}))
app.use(fileUpload())
app.use(connectFlash())
app.use(engine);
app.set('views', `${__dirname}/views`);
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use((req,res,next)=>{
    app.locals.auth = req.session.userId;
    next()
})

// app.get("/",(req,res)=>{
//     res.sendFile(path.resolve(__dirname, 'pages/index.html'))
// })

const PORT = process.env.PORT || 5000;


mongoose.connect(MONGO_URI,()=>{
    console.log('Connected');
})
// VWNxkKWbSNuwbtr1


app.use(express.static("public"));
app.use('/*',require('./route/index'))

app.listen(PORT,()=>console.log(`Server has been started on port ${PORT}`));

// last lesson is three;