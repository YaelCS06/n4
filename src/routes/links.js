const { request } = require('express');
const express = require('express');
const router = express.Router();

const pool = require('../database');

//Examen
    router.get('/examen', (req, res) =>{
        res.render('links/examen')
    });

//Comipems
    router.get('/comipems', (req, res) =>{
        res.render('links/comipems')
    });

//Escuelas

    router.get('/escuelas', (req, res) =>{
        res.render('links/escuelaspag')
    });
    router.get('/cecyt1', (req, res) =>{
        res.render('escuelas/cecyt1')
    });
    router.get('/cecyt2', (req, res) =>{
        res.render('escuelas/cecyt2')
    });
    router.get('/cecyt3', (req, res) =>{
        res.render('escuelas/cecyt3')
    });
    router.get('/cecyt4', (req, res) =>{
        res.render('escuelas/cecyt4')
    });
    router.get('/cecyt1', (req, res) =>{
        res.render('escuelas/cecyt5')
    });
    router.get('/cecyt1', (req, res) =>{
        res.render('escuelas/cecyt6')
    });
    router.get('/cecyt1', (req, res) =>{
        res.render('escuelas/cecyt7')
    });
    router.get('/cecyt1', (req, res) =>{
        res.render('escuelas/cecyt8')
    });
    router.get('/cecyt1', (req, res) =>{
        res.render('escuelas/cecyt9')
    });
    router.get('/cecyt1', (req, res) =>{
        res.render('escuelas/cecyt10')
    });
    router.get('/cecyt1', (req, res) =>{
        res.render('escuelas/cecyt11')
    });
    router.get('/cecyt1', (req, res) =>{
        res.render('escuelas/cecyt12')
    });
    router.get('/cecyt1', (req, res) =>{
        res.render('escuelas/cecyt13')
    });
    router.get('/cecyt1', (req, res) =>{
        res.render('escuelas/cecyt14')
    });
    router.get('/cecyt1', (req, res) =>{
        res.render('escuelas/cecyt15')
    });
    router.get('/cet1', (req, res) =>{
        res.render('escuelas/cet1')
    });
//Chat

router.get('/chat', (req, res) =>{
    res.render('links/chat')
});

router.get('/aula', (req, res) =>{
    res.render('links/aula')
});


















router.get('/add', (req, res) =>{
    res.render('links/add')
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