var a = 1
var b = 2
var r = 0

console.log("Suma " + a + "+" + b );
r = a + b;
console.log(r);

console.log("Multiplicación de " + a + " * " + b);
r = a * b;
console.log(r);

console.log("Resta " + b + " - " + a );
r = b - a;
console.log(r);


var alumno = {
	"nombre": "Memo",
	"Clave": 123,
	"getName": function(){
	return this.nombre;
	}
 };

console.log(alumno);
console.log(alumno.getName());

function saludar(n){
	console.log(n);
}

saludar("hola");

var arr = [1,2,3, "hola"]
console.log(arr);

var arreglo = [alumno, {"name": "Jessica"}]
console.log(arreglo);

