const { Router } = require('express');
const router = Router();
const path = require('path');
const AboutContrller = require('../controllers/about')

router.get("/",AboutContrller)

module.exports = router;