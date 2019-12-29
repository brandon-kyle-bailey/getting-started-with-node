import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import formData from 'form-data';

// GLOBALS
const __dirname = path.resolve();
const PORT = 3000;
const urlEncoded = bodyParser.urlencoded({ extended: true });

// Express
const app = express();

//MIDDLEWARE
app.use(bodyParser.json());
app.use(urlEncoded);
app.use(express.static(__dirname + '/app/public'));

// ROUTES
app.get('/', (req, res) => {
    // res.send('Hello World!');
    res.sendFile(path.join(__dirname + '/app/public/index.html'));
});


app.post('/submit', (req, res) => {
    console.log(req.body);
});


// SERVER MOUNTING
app.listen(PORT, () => {
    console.log(`Server running on: http://localhost:${PORT}`);
});