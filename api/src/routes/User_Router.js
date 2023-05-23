const { Router } = require('express');
const router = Router();
const { RegisterUser } = require('../controllers/Users/RegisterUser');
const {LoginUser, LoginGoogle } =  require('../controllers/Users/LoginUser');
const {DetailUser } =  require('../controllers/Users/DetailUser');
const {AllUser } =  require('../controllers/Users/AllUsers')






router.post('/auth/register', RegisterUser);
router.post('/auth/login', LoginUser);
router.get('/users', AllUser)

router.get('/user', DetailUser)
router.post('/auth/google', LoginGoogle )











module.exports = router



