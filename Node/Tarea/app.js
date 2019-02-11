const express = require('express');
var app = express();

var db = {
    initDB = function(){
        //this.alumnos = require('./alumnos');
        var fs = require('fs');
        var contents = fs.readFileSync('./alumnos.json');
        this.alumnos = JSON.parse(contents);
    },
    getAlumnoBy : function(filter, value){
        console.log("filtro: " + filter + "valor: " + value);
        var selected = null;
        this.alumnos.array.forEach(alumno => {
            console.log(alumno);
            console.log(alumno[filter]);
            if(alumno[filter] == value)
            {
                selected = alumno;
            }
        });
     return selected;
    }
};

app.post('/alumnos', (req,res) => {
    db.initDB();
    res.json(db.alumnos);
});

app.post('/alumnos/:clave', (req, res) => {
    db.initDB();
    var clave = req.params.clave;
    var alumno = db.getAlumnoBy('clave', clave);
    res.json(alumno);
});

app.listen(300, ()=> {
    console.log("app listening on port 3000");
})