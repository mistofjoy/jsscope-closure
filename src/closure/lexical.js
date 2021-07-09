//creas el closure
const buildCount = (i) => {
    let count = i;
    const displayCount = () => {
        console.log(count++);
    }
    return displayCount;
}

//creamos una tercera funcion para ejecutar el closure
const myCount = buildCount(1);
myCount();
myCount();
myCount();

//si creamos una 4ta funcion, esta no afecta el valor almacenado en la anterior
const myOtherCount = buildCount(10);
myOtherCount();
myOtherCount();