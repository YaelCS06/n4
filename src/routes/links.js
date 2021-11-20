const { request } = require('express');
const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/add', (req, res) =>{
    res.render('links/add')
});
router.get('/examen', (req, res) =>{
    res.render('links/examen')
});



router.get('/chat', (req, res) =>{
    res.render('links/chat')
});























router.post('/add', async(req, res) =>{
    const { Nombre, Ap_pat,Ap_mat,correo,usuario,contra} =req.body;
    const newLink ={
        Nombre,
        Ap_pat,
        Ap_mat,
        correo,
        usuario,
        contra
    };
    await pool.query('INSERT INTO usuarios set ?', [newLink]);
    res.redirect('/links');

});

router.get('/', async (req,res) =>{
    const usuarios = await pool.query('SELECT * FROM usuarios');
    res.render('links/list', {usuarios});

});

router.get('/delete/:usuario', async(req, res) =>{
    const {usuario} = req.params;
    await pool.query('DELETE FROM usuarios WHERE username = ?',[usuario]);
    res.redirect('/links');
});


module.exports = router;