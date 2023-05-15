const { Router } = require('express');
const router = Router();
const { RegisterUser } = require('../controllers/Users/RegisterUser');
const {LoginUser, LoginGoogle } =  require('../controllers/Users/LoginUser')
const {AllUsers } =  require('../controllers/Users/Allusers')
const {DetailUser } =  require('../controllers/Users/DetailUser')





router.post('/auth/register', RegisterUser);
router.post('/auth/login', LoginUser);
router.get('/users', AllUsers)
router.get('/user', DetailUser)
router.post('/auth/google', LoginGoogle )











module.exports = router



