const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { User_Register } = require('./src/database/models')


passport.use(
    new GoogleStrategy(
      {
        clientID: "890443228339-me6dsuhe0enme32salgmttkgg4g7g8sj.apps.googleusercontent.com",
        clientSecret: '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',
        callbackURL: '/auth/google/callback',
        scope: ["profile", "email"]
      },
      (accessToken, refreshToken, profile, done) => {
        // Aquí guardamos o actualizamos el usuario en la base de datos
     const user = {
          googleId: profile.id,
          email: profile.emails[0].value,
        }; 
        // Guardar el usuario en la base de datos o hacer cualquier otra operación necesaria
        // ...
    
  
        done(null, user);
      }
    )
  );
  
  // Configuración de rutas
  app.get('/', (req, res) => {
    res.send('¡Inicio de sesión con Google!');
  });
  
  app.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
  );
  
  app.get(
    '/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
      // Aquí puedes redirigir al usuario a la página de inicio de sesión exitosa
      res.redirect('/dashboard');
    }
  );
  
  // Configuración de express-session
  