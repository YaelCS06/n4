const express = require('express');
const router = express.Router();
const passport = require('passport');
const {isLoggedIn, isNotLoggedIn} =require('../lib/auth');
const pool = require('../database');

router.get('/signup', isNotLoggedIn, (req, res) => {
  res.render('auth/signup');
});

router.post('/signup', passport.authenticate('local.signup', {
  successRedirect: '/profile',
  failureRedirect: '/signup',
  failureFlash: true
}));

router.get('/signin', isNotLoggedIn, (req, res) =>{
  res.render('auth/signin')
});

router.post('/signin',  (req, res, next) =>{
  passport.authenticate('local.signin', {
    successRedirect: '/profile',
    failureRedirect: '/signin',
    failureFlash: true
  })(req, res, next)
});


router.get('/profile', isLoggedIn, async (req,res) =>{
  const resultados = await pool.query('SELECT * FROM examen where ID_examen =?', [req.user.ID]);
  res.render('profile', {resultados});
});



router.get('/logout', (req, res) =>{
  req.logOut();
  res.redirect('/signin')
});


module.exports = router;