const { Router } = require('express');
const router = Router();
const path = require('path');
const AboutContrller = require('../controllers/about');
const admin = require('../controllers/admin');

router.get("/",admin)

module.exports = router;