//parte 1: variables locales no existen en scope global
const fruits = () => {
    const fruit = "apple";
    console.log(fruit);
}

fruits();
console.log(fruit);

//parte 2:
const anotherFunction = () => {
    var x = 1;
    var x = 2;
    let y = 1;
    console.log(x);
    console.log(y);
}

anotherFunction();