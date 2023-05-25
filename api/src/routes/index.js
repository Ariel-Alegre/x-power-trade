const { Router } = require('express');
const router = Router();
const MarketsRouter = require('./EndPoint_Markets_Routers');
const SearchRouter = require('./EndPoint_Markets_Routers');
const UserRouter = require('./User_Router');
const TransactionRouter = require('./Transaction_Router');
const FilesRouter = require('./Files_Routers')
const SendRouter = require('./SendEmail_Router')

router.use('/markets', MarketsRouter, SearchRouter);
router.use('/', UserRouter, );
router.use('/', TransactionRouter);
router.use('/', FilesRouter)
router.use('/', SendRouter)




module.exports= router