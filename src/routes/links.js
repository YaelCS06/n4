const { request } = require('express');
const express = require('express');
const router = express.Router();

const pool = require('../database');

//Examen
    router.get('/examen', (req, res) =>{
        res.render('links/examen')
    });
    router.post('/examen', async (req, res) => {
            const newexam ={ID_us,ID_examen};
            const newresult ={ID_us,ID_examen};
            const newmater ={IDExm,Biologia,Quimica,Formacion,Geografia,Historia,Español,Matemaicas,Fisica};

            await pool.query('INSERT INTO resultados_examenes set ?', [newexam]);
            await pool.query('INSERT INTO examen set ?', [newresult]);
            await pool.query('INSERT INTO materia set ?', [newmater]);
            res.redirect('/profile');
    });
    
//Cuestionario
router.get('/cuestionario', (req, res) =>{
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




//

router.get('/archivos', (req, res) =>{
    res.render('links/add')
});



router.get('/delete/:usuario', async(req, res) =>{
    const {usuario} = req.params;
    await pool.query('DELETE FROM usuarios WHERE username = ?',[usuario]);
    res.redirect('/administrator');
});


module.exports = router;