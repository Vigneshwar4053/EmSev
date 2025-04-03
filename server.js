const express = require('express');
const path = require('path');
const app = express();

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, JS, XML, images, etc.) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for index page - This ensures index.ejs loads first
app.get('/', (req, res) => {
    res.render('index');
});

// Route to serve other pages
app.get('/hosp', (req, res) => {
    res.render('hosp');
});

app.get('/pharmacies', (req, res) => {
    res.render('pha');
});

app.get('/diseases', (req, res) => {
    res.render('diseases');
});

app.get('/ngo', (req, res) => {
    res.render('ngo');
});

// Serve the XML file directly (if needed)
app.get('/en_product4.xml', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'en_product4.xml'));
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
