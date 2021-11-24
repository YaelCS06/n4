const { request } = require('express');
const express = require('express');
const router = express.Router();
const {isLoggedIn,isAdmin} =require('../lib/auth');
const pool = require('../database');


//Examen
router.get('/examen', isLoggedIn, (req, res) =>{
    res.render('links/examen');
});
router.post('/examen', async (req, res) => {
    const { cuadrito, matematicas, espa, biologia, fisica, quimica, historia, geografia, formacion } = req.body;
    const newExam = {
        resultado: cuadrito,
        Id_user: req.user.ID,
        matematicas: matematicas,
        espa: espa,
        biologia: biologia,
        fisica: fisica,
        quimica: quimica,
        historia: historia,
        geografia: geografia,
        formacion: formacion
    };
    await pool.query('INSERT INTO examen set ?', [newExam]);
    res.redirect('/resultadosexm');
});
    
//Cuestionario
router.get('/cuestionario', isLoggedIn, (req, res) =>{
    res.render('links/cuestionario')
});
router.post('/cuestionario', async(req, res) =>{
    const { cuadrito } = req.body;
    const newCuest = {
        resultado: cuadrito,
        user_id: req.user.ID
    };
    await pool.query('INSERT INTO cuestionario set ?', [newCuest]);
    res.redirect('/profile');
});


//Comipems
router.get('/comipems', isLoggedIn,(req, res) =>{
    res.render('links/comipems')
});

//Escuelas

router.get('/escuelas',isLoggedIn, (req, res) =>{
    res.render('links/escuelaspag')
});
router.get('/cecyt1', isLoggedIn,(req, res) =>{
    res.render('escuelas/cecyt1')
});
router.get('/cecyt2', isLoggedIn, (req, res) =>{
    res.render('escuelas/cecyt2')
});
router.get('/cecyt3', isLoggedIn,(req, res) =>{
    res.render('escuelas/cecyt3')
});
router.get('/cecyt4', isLoggedIn,(req, res) =>{
    res.render('escuelas/cecyt4')
});
router.get('/cecyt1', isLoggedIn, (req, res) =>{
    res.render('escuelas/cecyt5')
});
router.get('/cecyt1', isLoggedIn,(req, res) =>{
    res.render('escuelas/cecyt6')
});
router.get('/cecyt1', isLoggedIn,(req, res) =>{
    res.render('escuelas/cecyt7')
});
router.get('/cecyt1', isLoggedIn,(req, res) =>{
    res.render('escuelas/cecyt8')
});
router.get('/cecyt1', isLoggedIn, (req, res) =>{
    res.render('escuelas/cecyt9')
});
router.get('/cecyt1', isLoggedIn,(req, res) =>{
    res.render('escuelas/cecyt10')
});
router.get('/cecyt1', isLoggedIn,(req, res) =>{
    res.render('escuelas/cecyt11')
});
router.get('/cecyt1', isLoggedIn,(req, res) =>{
    res.render('escuelas/cecyt12')
});
router.get('/cecyt1', isLoggedIn,(req, res) =>{
    res.render('escuelas/cecyt13')
});
router.get('/cecyt1', isLoggedIn,(req, res) =>{
    res.render('escuelas/cecyt14')
});
router.get('/cecyt1', isLoggedIn,(req, res) =>{
    res.render('escuelas/cecyt15')
});
router.get('/cet1',isLoggedIn, (req, res) =>{
    res.render('escuelas/cet1')
});
//Chat

router.get('/chat', isLoggedIn,(req, res) =>{
    res.render('links/chat')
});

//aula
router.get('/aula', isLoggedIn,(req, res) =>{
    res.render('links/aula')
});

module.exports = router;