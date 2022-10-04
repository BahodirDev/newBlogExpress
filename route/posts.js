const { Router } = require('express');
const router = Router();
const path = require('path');
const { setPage, getAll, AddPost, GetOne, UpdateOne, DeleteOne, UpdateTwo } = require('../controllers/posts');
const pool = require('../db');
const validatePost = require('../middleware/validatePost');
const validateSession = require('../middleware/validateSession');

router.get("/",validateSession, setPage)
// ma`luotlarni ko`rish
router.get("/getAll",getAll);
// post qo`shish
router.post("/addpost",validateSession,validatePost,async(req,res)=>{
   
    try {
        // res.sendFile(path.resolve(__dirname, '..', 'pages/index.html'))
        const {title,body} = req.body;
        let postedBy = req.session.userId
        const {image} = req.files;
        await image.mv(path.resolve(__dirname, '..', 'public/images', image.name),async(e)=>{
            let answ = await  pool.query('INSERT INTO posts (title,body,postedBy,img,istrue) VALUES ($1,$2,$3,$4,$5) RETURNING *',[title,body,postedBy,`/images/${image.name}`,false])
             res.redirect('/')
        })
    } catch (error) {
       res.status(500).json({error:error.message})
    }
  
});
// bitta ma'lumotni olish
router.get('/post/:id',validateSession,GetOne)
router.post('/update/:id',validateSession,UpdateOne)
router.post('/update2/:id',validateSession,UpdateTwo)
router.post('/delete/:id',validateSession,DeleteOne)

module.exports = router;