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
router.get('/resultadosexm', isLoggedIn, async (req,res) =>{
  const resultadosexm = await pool.query('SELECT * FROM examen where Id_user =?', [req.user.ID]);
  res.render('links/examenresult', {resultadosexm});
});

//Redirect de admin
router.get('/administrator', isAdmin, async (req,res) =>{
  const usuarios = await pool.query('SELECT * FROM usuarios');
  res.render('links/list', {usuarios});
});

router.get('/resultados', isAdmin, async (req,res) =>{
  const resultados = await pool.query('SELECT u.Ap_pat,u.Ap_mat,u.Nombre, c.resultado from usuarios as u inner join cuestionario as c on u.ID=c.user_id');
  res.render('links/listresult', {resultados});
});

router.get('/examenes', isAdmin, async (req,res) =>{
  const resultados = await pool.query('SELECT u.Ap_pat,u.Ap_mat,u.Nombre, e.resultado from usuarios as u inner join examen as e on u.ID=e.Id_user');
  res.render('links/listexam', {resultados});
});

router.get('/adminexam', isAdmin, async (req,res) =>{
  res.render('links/examenadmin');
});

router.post('/adminexam', isAdmin, async (req,res) =>{
  const { Pregunta, A, B, C, D } = req.body;
  const newAsk = {
      Pregunta,
      A,
      B,
      C,
      D
  };
  await pool.query('INSERT INTO preguntas set ?', [newAsk]);
  res.redirect('/adminexam');
});

router.get('/modifyexam', isAdmin, async (req,res) =>{
  const exam = await pool.query('SELECT * FROM preguntas')
  res.render('links/tablaexamen', {exam: exam});
});
router.get('/cuest', isAdmin, async (req,res) =>{
  const exam = await pool.query('SELECT * FROM preguntas')
  res.render('links/cuestadmin', {exam: exam});
});
router.get('/delete/:pregunta', async (req,res) =>{
  const {pregunta} = req.params;
  await pool.query('DELETE FROM preguntas where Pregunta = ?', [pregunta]);
  res.redirect('/modifyexam');
});
router.get('/deleteuser/:username', async (req,res) =>{
  const {username} = req.params;
  await pool.query('DELETE FROM usuarios where username = ?', [username]);
  res.redirect('/administrator');
});

router.get('/edit/:numero', async (req,res) =>{
  const {numero} = req.params;
  const pregunta = await pool.query('SELECT * FROM preguntas WHERE numero = ?', [numero])
  res.render('links/edit', {pregunta: pregunta[0]});
});

router.post('/edit/:numero', async (req,res) =>{
  const { numero } = req.params;
  const {Pregunta, A, B, C, D} = req.body;
  const actAsk = {
    Pregunta,
    A,
    B,
    C,
    D
  }
  await pool.query('UPDATE preguntas set ? WHERE numero = ?', [actAsk, numero]);
  res.redirect('/modifyexam');
});

router.get('/chat', isLoggedIn,(req, res) =>{
  res.render('links/chat')
});

//Cerrar sesion
router.get('/logout', (req, res) =>{
  req.logOut();
  res.redirect('/signin')
});


module.exports = router;