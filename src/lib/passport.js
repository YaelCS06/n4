const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const pool = require('../database');
const helpers = require('../lib/helpers');

passport.use('local.signin', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
    }, async (req, username, password, done) =>{
        const rows = await pool.query('SELECT * FROM usuarios WHERE username = ?', [username]);
        
        if(rows.length > 0){
            const user = rows[0];
            const validPassword = await helpers.matchPassword(password, user.password);
            if(validPassword){
             
              return done(null, user.ID);
            }else{
            return  done(null, false);
            }
        }else{
          return done(null, false);
        }

}));

passport.use('local.signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
    },async (req, username, password, done) => {
        const {Nombre} = req.body;
        const {Ap_pat} = req.body;
        const {Ap_mat} = req.body;
        const {correo} = req.body;
        const newUser ={
            Nombre,
            Ap_pat,
            Ap_mat,
            correo,
            username,
            password
        };
        newUser.password = await helpers.ecryptPassword(password);
        const result = await pool.query('INSERT INTO usuarios set ?', [newUser]);
        newUser.id = result.insertId;
        return done(null, newUser.id);
}));

passport.serializeUser((user, done) => {
  return done(null, user);
});

passport.deserializeUser(async (id, done) => {
  const rows = await pool.query('SELECT * FROM usuarios WHERE ID = ?', [id]);
  done(null, rows[0]);
});