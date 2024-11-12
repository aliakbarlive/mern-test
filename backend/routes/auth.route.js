const express = require('express');
const router = express.Router();

const { register, login } = require('../controller/auth.controller');
const validateUser = require('../middleware/validate.user');
const upload = require('../config/multerConfig');

router.post('/register',upload.single('image'),validateUser, register);
router.post('/login', login);

module.exports = router;
