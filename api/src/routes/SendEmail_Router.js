const { Router } = require('express');
const router = Router();
const {SendEmail} = require('../controllers/SendEmail/SendEmail')

router.post('/send-email', SendEmail)

module.exports= router