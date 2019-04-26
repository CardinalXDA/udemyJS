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
    savings: true,
    chooseExpenses: function() {
        for (var i = 0; i < 2; i++) {
            var a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", '');
            if ((typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
                appData.expenses[a] = b;
            } else {
                console.log("Ошибочное значение");
                i--;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert ("Ежедневный бюджет " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log ("Это минимальный уровень достатка!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log ("Это средний уровень достатка!");
        } else if (appData.moneyPerDay > 2000) {
            console.log ("Это высокий уровень достатка!");
        } else {
            console.log ("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            var save = +prompt("Какова сумма накоплений?", ''),
                persent = +prompt("Под какой процент?", '');
            appData.montIncome = save/100/12*persent;
            alert("Доход с вашего депозита: " + appData.montIncome);
        }
    },
    chooseOptExpenses: function() {
        for (var i = 1; i <= 3; i++) {
            var questionOptExpenses = prompt("Статья необязательных расходов?", '');
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function() {
        var items = prompt("Что принесёт дополнительный доход? (перечислить через запятую)", '');
        if (typeof(items) != "string" || items == "" || typeof(items) == null) {
            console.log("Вы вели некоректное значение");
        } else {
            appData.income = items.split(", ");
            var endItem = prompt("Может что-то еще?");
                if (typeof(endItem) != "string" || endItem == "" || typeof(endItem) == null) {
                    console.log("Вы вели некоректное значение дополнительного зароботка");
                } else {
                    appData.income.push(endItem);
                }
            appData.income.sort();
        }
        appData.income.forEach (function (element, i) {
            alert("Способы доп. заработка: " + (i+1) + " - " + element);
        });        
    }
};
for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}
