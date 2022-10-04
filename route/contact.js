const { Router } = require('express');
const router = Router();
const path = require('path');
const Contact = require('../controllers/contact.js');
const login = require('../controllers/login.js');

router.get("/",Contact);
router.get("/login",login);

module.exports = router;