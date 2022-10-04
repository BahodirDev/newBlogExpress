const { Router } = require('express');
const router = Router();
const path = require('path');
const Home = require('../controllers/Home');
const pool = require('../db');

router.get("/", Home)

module.exports = router;