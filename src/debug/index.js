//Ejemplo 1
var a = `hello`;

function hello() {
    let b = `hello world`;
    const c = `hello world!`;
    if (true) {
        let d = `hello world!!`;
        debugger;
    }
}

hello();

//Ejemplo 2
const moneyBox = () => {
    debugger;
    var saveCoins = 0;
    const countCoins = (coins) => {
        debugger;
        saveCoins += coins;
        console.log(`MoneyBox: ${saveCoins}`);
    }
    return countCoins;
}

let myMoneyBox = moneyBox();
myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);