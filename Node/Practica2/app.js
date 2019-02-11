const express = require('express');
const app = express();

// app.get('/:name', (req, res) => {
//     //console.log(req.query);
//     console.log(req.params.name);
//     res.send('Hello! ' + req.params.name)
// });

app.get('/json', (req, res) => {
    res.json({'name': 'Jessica'});
});

app.post('/json', (req, res) => {
    res.json({'name': 'Dani'});
});

app.listen(3000, () => console.log('app listening on port 3000'));