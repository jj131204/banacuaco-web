const express = require('express');
const router = express.Router();

router.get('/home', (req, res) => {
    res.render('home', { title: 'home' });
});

router.get('/servicios', (req, res) => {
    res.render('services', { title: 'services' });
});


router.get('/contacto', (req, res) => {
    res.render('contact', { title: 'contact' });
});

router.get('/nosotros', (req, res) => {
    res.render('nosotros', { title: 'nosotros' });
});

router.get('/producciones', (req, res) => {
    res.render('productions', { title: 'nosotros' });
});

router.get('/produccion', (req, res) => {
    res.render('productionEspc', { title: 'nosotros' });
});

router.get('/produccion2', (req, res) => {
    res.render('productionEspc2', { title: 'nosotros' });
});


router.get('/galeria', (req, res) => {
    res.render('galery', { title: 'nosotros' });
});



module.exports = router;