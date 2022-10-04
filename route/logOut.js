const { Router } = require('express');
const router = Router();
const path = require('path');
const LogOut = require('../controllers/LogOut');
const pool = require('../db');

router.get("/", LogOut)

module.exports = router;