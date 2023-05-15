const { Router } = require('express');
const router = Router();
const { Markets } = require('../controllers/Markets/Markets')
const { SearchMarkets } = require('../controllers/Markets/Markets')


router.get('/', Markets);
router.get('/?name=', SearchMarkets);








module.exports = router



