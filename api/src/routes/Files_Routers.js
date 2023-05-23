const { Router } = require('express');
const router = Router();
const multer = require('multer');
const upload = multer();
const { FilesCreate, FilesDetail  } = require('../controllers/File/File')


router.post('/upload', upload.single('file'), FilesCreate);
router.get('/files/:id', FilesDetail);





module.exports = router



