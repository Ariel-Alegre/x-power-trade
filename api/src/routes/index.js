const { Router } = require('express');
const router = Router();
const MarketsRouter = require('./EndPoint_Markets_Routers');
const SearchRouter = require('./EndPoint_Markets_Routers');
const UserRouter = require('./User_Router');

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;



// Configurar estrategia de autenticación de Google
passport.use(
  new GoogleStrategy(
    {
      clientID: '995759871583-n65ceorovh77fhnl34rv4sgu4ses1nog.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:3001/auth/google/callback',
      scope: ["profile", "email"]
    },
    (accessToken, refreshToken, profile, done) => {
      // Aquí puedes guardar o actualizar los datos del usuario en tu base de datos
      // profile contiene los datos del usuario obtenidos de Google
      // ...
      done(null, profile);
    }
  )
);

// Configurar serialización y deserialización de usuarios
passport.serializeUser((user, done) => {
  // Aquí puedes guardar la información necesaria del usuario en la sesión
  // Por ejemplo, puedes guardar el ID de usuario en la sesión
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  // Aquí puedes recuperar la información del usuario a partir del ID guardado en la sesión
  // Por ejemplo, puedes obtener los datos completos del usuario desde la base de datos
  const user = getUserById(id);
  done(null, user);
});

// Ruta de inicio de sesión con Google
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Ruta de callback después de la autenticación de Google
router.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Aquí puedes redirigir al usuario a la página de inicio de sesión exitosa
    res.redirect('/dashboard');
  }
);

router.use('/markets', MarketsRouter, SearchRouter);
router.use('/', UserRouter)




module.exports= router