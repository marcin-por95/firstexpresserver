const express = require('express');
const path = require('path');

const app = express();
const PORT = 8000;


app.use((req, res, next) => {
    res.show = (name) => {
        res.sendFile(path.join(__dirname, `views/${name}`));
    };
    next();
});
app.use(express.static(path.join(__dirname, '/public')));

// Endpointy
app.get('/', (req, res) => {
    res.show('home.html');
});

app.get('/home', (req, res) => {
    res.show('home.html');
});

app.get('/about', (req, res) => {
    res.show('about.html');
});


app.use('/user/', (req, res, next) => {
    res.show('forbidden.html');
});


app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views/404.html'));
});

app.get('/image', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/404.jpg'));
});
app.use((req, res) => {
    res.status(404).render('404');
});



app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
