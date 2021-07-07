//parte 1: variables locales son inaccesibles en global
const helloWorld = () => {
    const hello = "hello world";
    console.log(hello);
}

helloWorld();

console.log(hello);

//Parte 2: ámbito léxico
var scope = "i am global";

const functionScope = () => {
    const scope = "i am local";
    const func = () => {
        return scope;
    }
    console.log(func());
}

functionScope();
console.log(scope);