const { Router } = require('express');
const router = Router();
const path = require('path');
const { getAll, addAuth, checkAuth } = require('../controllers/author');
const pool = require('../db');
const validatePerson = require('../middleware/validatePerson');
const validLogin = require('../middleware/validLogin');

router.get("/", getAll)

router.post("/addauth", validatePerson, addAuth)
router.post("/checkauth", validLogin,checkAuth )

module.exports = router;