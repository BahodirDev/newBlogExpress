const { Router } = require('express');
const redirectAuth = require('../middleware/redirectAuth');
const router = Router();

router.use('/', require("./home"));
router.use('/about',redirectAuth, require("./about"));
router.use('/post',redirectAuth, require("./posts"));
router.use('/contact', require("./contact"));
router.use('/auth', require("./author"));
router.use('/admincontrol', require('./admin'));
router.use('/logout',redirectAuth, require("./logOut"));

module.exports = router;