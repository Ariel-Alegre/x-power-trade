const { Router } = require('express');
const router = Router();
const { createPayment } = require('../controllers/Transaction/Transaction')


router.post('/pay', createPayment);









module.exports = router



