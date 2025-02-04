const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log(Received message from ${name} (${email}): ${message});
    res.send('Thank you for your message!');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});