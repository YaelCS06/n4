const express = require('express');
const router = express.Router();
const {isLoggedIn, isNotLoggedIn} =require('../lib/auth');

router.get('/',  async (req, res) => {
    res.render('index');
    res.sendFile(__dirname + '/index.html');
});





module.exports = router;