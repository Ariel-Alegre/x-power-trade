const { Router }= require('express')
const router = Router();
const {Users}= require('../controllers/Users');
const {DetailsPersonal}= require('../controllers/DetailsPersonal');
const {DetailsUser}= require('../controllers/DetailsUser');
const {InfoUsers}= require('../controllers/InfoUsers');
const {UpdateWallets}= require('../controllers/UpdateWallets');






router.get('/users', Users);
 router.get('/user', DetailsPersonal); 
 router.get('/userdata/:walletId', DetailsUser); 
 router.get('/userdata', InfoUsers); 
 router.put('/editwallet/:walletId', UpdateWallets); 



 




module.exports = router 