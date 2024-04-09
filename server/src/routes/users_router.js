const { Router }= require('express')
const router = Router();
const {Users}= require('../controllers/Users')
const {DetailsPersonal}= require('../controllers/DetailsPersonal')
const {DetailsUser}= require('../controllers/DetailsUser')
const {InfoUsers}= require('../controllers/InfoUsers')





router.get('/users', Users);
 router.get('/user', DetailsPersonal); 
 router.get('/user/:userId', DetailsUser); 
 router.get('/userdata/:userId', InfoUsers); 


 
 




module.exports = router 