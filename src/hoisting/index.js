// ejemplo 1: funciona
a = 2;
var a;
console.log(a); // 2

//ejemplo 2: no funciona
console.log(a); //undefined
var a = 2;

//Ejemplo 3> con funciones
nameOfDog(`elmo`);

function nameOfDog(name) {
    console.log(name);
}