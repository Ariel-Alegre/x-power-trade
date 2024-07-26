const { Router }= require('express')
const router = Router();
const {Users}= require('../controllers/Users');
const {DetailsPersonal}= require('../controllers/DetailsPersonal');
const {DetailsUser}= require('../controllers/DetailsUser');
const {InfoUsers}= require('../controllers/InfoUsers');
const {UpdateWallets}= require('../controllers/UpdateWallets');
const {UpdatePersonal}= require('../controllers/UpdatePersonal');
const {Identify}= require('../controllers/Identify');
const {SoportSend}= require('../controllers/SoportSend');

const authenticateToken = require('../middleware/auth');






  


router.get('/users', Users);
 router.get('/user', DetailsPersonal); 
 router.get('/userdata/:walletId', DetailsUser); 
 router.get('/userdata', InfoUsers); 
 router.put('/editwallet/:walletId', UpdateWallets); 
 router.put('/update-personal', UpdatePersonal); 
 router.put('/upload-identify', Identify);
 router.post('/soport-send', SoportSend);





 




module.exports = router 