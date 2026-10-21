const express = require('express');
const useragent = require('express-useragent');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(useragent.express());

// Ruta 1: RWD (Responsive)
app.get('/responsive', (req, res) => {
    res.render('responsive');
});

// Ruta 2: AWD (Adaptativo)
app.get('/adaptive', (req, res) => {
    if (req.useragent.isMobile) {
        res.render('mobile'); 
    } else {
        res.render('desktop'); 
    }
});

app.listen(3000, () => {
    console.log('Servidor ejecutándose en http://localhost:3000');
});