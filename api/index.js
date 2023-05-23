require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const routers = require('./src/routes/index');
const session = require('express-session');
const bodyParser = require('body-parser');
const multer = require('multer');




app.use(session({
  secret: 'secreto', // Clave secreta para firmar el ID de sesión
  resave: false, // No guardar la sesión en cada petición
  saveUninitialized: false // No guardar sesiones vacías
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(routers);



// Rutas de autenticación


app.listen(3001, () => {
  console.log("Server on")
})
