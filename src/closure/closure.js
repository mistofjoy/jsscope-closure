//no closure. variable no recuerda valores anteriores
const moneyBox = (coins) => {
    var saveMoney = 0;
    saveMoney += coins;
    console.log(`MoneyBox: ${saveMoney}`);
}

moneyBox(5);
moneyBox(10);

//si closure. variable si recuerda valores anteriores
const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: ${saveCoins}`);
    }
    return countCoins;
}

let myMoneyBox = moneyBox();
myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);