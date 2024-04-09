const { Router }= require('express')
const router = Router();
const {Register}= require('../controllers/Register')


router.post('/register', Register)

module.exports = router