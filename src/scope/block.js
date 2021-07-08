//en la función var existe fuera del bloque, let y const no.
const fruits = () => {
    if (true) {
        var fruit1 = "apple";
        let fruit2 = "banana";
        const fruit3 = "kiwi";
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();

//let y const locales no sobreescriben a las globales. var si.
var x = 1;
let y = 1;
const z = 1;
{
    var x = 2;
    let y = 2;
    const z = 2;
    console.log("x = " + x);
    console.log("y = " + y);
    console.log("z = " + z);
}
console.log("x = " + x);
console.log("y = " + y);
console.log("y = " + z);

//comportamiento en loops. var se sobreescribe, let no.
const anotherFunction = () => {
    for (var i = 0; i < 10 ; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
}

anotherFunction();

const anotherFunction2 = () => {
    for (let i = 0; i < 10 ; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }
}

anotherFunction2();