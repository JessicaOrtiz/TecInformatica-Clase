const express = require('express');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json);

app.get('/', function(req, res){
    res.sendFile("index.html");
});

app.post('/user', function(req, res){
    var user_name= req.body.user;
    var password = req.body.password;

    console.log("user name = " + user_name + ", password is " + password);
    res.json({'status': 'ok'});
});

app.listen(4000, () => console.log('app listening on port 3000') );
