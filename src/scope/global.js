var hello = "hello";
let world = "Hello world";
const helloworld = "Hello world!";

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloworld);
}

anotherFunction();

const hellowWorld = () => {
    globalVar = "I'm global"
}

helloworld();

console.log(globalVar);

const local = () => {
    var locarVar = globalVarA = "I'm global"
}

local();

console.log(globalVarA);