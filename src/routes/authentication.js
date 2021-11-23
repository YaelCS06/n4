const express = require('express');
const router = express.Router();
const passport = require('passport');
const {isLoggedIn, isNotLoggedIn, isAdmin} =require('../lib/auth');
const pool = require('../database');

//Render y redirect de registro
router.get('/signup', isNotLoggedIn, (req, res) => {
  res.render('auth/signup');
});

router.post('/signup', passport.authenticate('local.signup', {
  successRedirect: '/profile',
  failureRedirect: '/signup',
  failureFlash: true
}));

//Render y redirect de inicio de sesion
router.get('/signin', isNotLoggedIn, (req, res) =>{
  res.render('auth/signin')
});

router.post('/signin',  (req, res, next) =>{
  passport.authenticate('local.signin', {
    successRedirect: '/administrator',
    failureRedirect: '/signin',
    failureFlash: true
  })(req, res, next)
});


//Redirect de usuario
router.get('/profile', isLoggedIn, async (req,res) =>{
  const resultadoscuest = await pool.query('SELECT * FROM cuestionario where user_id =?', [req.user.ID]);
  res.render('profile', {resultadoscuest});
});


//Redirect de admin
router.get('/administrator', isAdmin, async (req,res) =>{
  const usuarios = await pool.query('SELECT * FROM usuarios');
  res.render('links/list', {usuarios});
});

//Cerrar sesion
router.get('/logout', (req, res) =>{
  req.logOut();
  res.redirect('/signin')
});


module.exports = router;