var money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
};
start();

var appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true
};

function chooseExpenses() {
    for (var i = 0; i < 2; i++) {
        var a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');
        if ((typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
            appData.expenses[a] = b;
        } else {
            console.log("Ошибочное значение");
            i--;
        }
    };
};
chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert ("Ежедневный бюджет " + appData.moneyPerDay);
};
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log ("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log ("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        console.log ("Это высокий уровень достатка!");
    } else {
        console.log ("Произошла ошибка");
    }
};
detectLevel();

function checkSavings(argument) {
    if (appData.savings == true) {
        var save = +prompt("Какова сумма накоплений?", ''),
            persent = +prompt("Под какой процент?", '');
        appData.montIncome = save/100/12*persent;
        alert("Доход с вашего депозита: " + appData.montIncome);
    }
};
checkSavings();

function chooseOptExpenses() {
    for (var i = 1; i <= 3; i++) {
        var questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }
};
chooseOptExpenses();