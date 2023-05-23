const { File } = require('../../database/models');

module.exports = {
    FilesCreate: async (req, res) => {
        try {
            const { originalname, mimetype, size } = req.file;
        
            const file = await File.create({
              filename: originalname,
              mimetype,
              size,
            });

            res.send('Archivo subido con éxito.');
          } catch (error) {
            console.error(error);
            res.status(500).send('Error al subir el archivo.');
          }
    },

    FilesDetail: async (req, res) => {
        try {
            const { id } = req.params;
        
            const file = await File.findByPk(id);
        
            if (!file) {
              return res.status(404).send('Archivo no encontrado.');
            }
        
            res.setHeader('Content-Type', file.mimetype);
            res.send(file.data);
          } catch (error) {
            console.error(error);
            res.status(500).send('Error al obtener el archivo.');
          }
    },
  

  
}