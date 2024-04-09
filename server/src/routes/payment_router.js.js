const { Router }= require('express')
const router = Router();
const {Payment, WebhookHandler} = require('../controllers/Payment');
const authenticateToken = require('../middleware/auth');


router.post('/payment',authenticateToken,  Payment)

router.get('/success', (req, res) => res.send('pago exitoso'))
router.get('/error', (req, res) => res.send('Hubo un error'))


module.exports = router