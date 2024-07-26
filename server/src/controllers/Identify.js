require('dotenv').config();
const { User } = require('../db');
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Configuración de Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configuración de CloudinaryStorage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'identify', // Carpeta en Cloudinary donde se almacenarán las imágenes
    format: async (req, file) => 'png', // Formato del archivo
    public_id: (req, file) => Date.now() + '-' + file.originalname, // Nombre del archivo
  },
});

const upload = multer({ storage: storage });

// Middleware de multer para manejar múltiples archivos
const uploadFiles = upload.fields([{ name: 'identifyFront' }, { name: 'identifyBack' }]);

module.exports = {
  Identify: async (req, res) => {
    uploadFiles(req, res, async (err) => {
      if (err) {
        console.error('Error subiendo archivos:', err);
        return res.status(500).json({ message: 'Error subiendo archivos' });
      }

      const { userId } = req.body;

      // Validar la presencia de userId en el cuerpo de la solicitud
      if (!userId) {
        return res.status(400).json({ message: 'Faltan datos en la solicitud' });
      }

      try {
        let identifyFront = '';
        let identifyBack = '';

        const identifyFrontFile = req.files && req.files['identifyFront'] && req.files['identifyFront'][0];
        const identifyBackFile = req.files && req.files['identifyBack'] && req.files['identifyBack'][0];

        // Subir imagen frontal
        if (identifyFrontFile) {
          const cloudinaryUploadResult = await cloudinary.uploader.upload(identifyFrontFile.path, {
            resource_type: 'image',
            quality: 'auto:low',
            fetch_format: 'auto',
          });
          console.log('Imagen de comprobante de documento frontal subida:', cloudinaryUploadResult.secure_url);
          identifyFront = cloudinaryUploadResult.secure_url;
        }

        // Subir imagen dorsal
        if (identifyBackFile) {
          const cloudinaryUploadResult = await cloudinary.uploader.upload(identifyBackFile.path, {
            resource_type: 'image',
            quality: 'auto:low',
            fetch_format: 'auto',
          });
          console.log('Imagen de comprobante de documento trasero subida:', cloudinaryUploadResult.secure_url);
          identifyBack = cloudinaryUploadResult.secure_url;
        }

        // Buscar el usuario en la base de datos
        const user = await User.findByPk(userId);
        if (!user) {
          console.log('El usuario no existe');
          return res.status(404).send({ success: false, message: 'El usuario no existe' });
        }

        // Actualizar el usuario con las URLs de las imágenes
        const updatedUser = await user.update({
          front: identifyFront,
          back: identifyBack,
        });

        res.status(200).send({ success: true, data: updatedUser });
        console.log('Documento subido correctamente');
      } catch (error) {
        console.error('Error en el servidor:', error);
        res.status(500).json({ message: 'Error en el servidor' });
      }
    });
  },
};
