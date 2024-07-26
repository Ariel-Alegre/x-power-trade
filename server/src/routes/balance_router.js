const { Router }= require('express')
const router = Router();
const authenticateToken = require('../middleware/auth');
const {WalletBalance}= require('../controllers/WalletBalance');
const {BuyCoins}= require('../controllers/BuyCoins');
const {WalletPersonal}= require('../controllers/WalletPersonal');
const { SellCoins } = require('../controllers/SellCoins');
const { PurchasedCoins } = require('../controllers/PurchasedCoins');
const { Withdraw } = require('../controllers/Withdraw');




router.post('/balance', authenticateToken, WalletBalance)
router.post('/buy',authenticateToken,  BuyCoins)
router.get('/wallet',authenticateToken,  WalletPersonal)
router.post('/sell', authenticateToken, SellCoins);
router.get('/transaction', authenticateToken, PurchasedCoins);
router.post('/retirar', Withdraw);






  

module.exports = router 