require('dotenv').config();
const bcrypt = require('bcrypt');
const { jwtVerify } = require("jose");
const crypto = require('crypto');
const algorithm = 'aes-192-cbc';
const key = '111111111111111111111111' // hard code
const iv = '2222222222222222'// Vector de inicialización aleatorio (16 bytes)

function encryptToken(token) {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encryptedToken = cipher.update(token, 'utf8', 'hex');
  encryptedToken += cipher.final('hex');
  return encryptedToken;
}

function decryptToken(encryptedToken) {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decryptedToken = decipher.update(encryptedToken, 'hex', 'utf8');
  decryptedToken += decipher.final('utf8');
  return decryptedToken;
}
module.exports = {

  DetailUser: async (req, res) => {
    const { authorization } = req.headers;

    if (!authorization) return res.sendStatus(401);
  
    try {

      const descrypt = decryptToken(authorization)
      const encoder = new TextEncoder();
      const { payload } = await jwtVerify(
        descrypt,
        encoder.encode('asfdafsdsdfasdfasdf')
      );
      
  
      return res.send(payload);
     

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  }
}

