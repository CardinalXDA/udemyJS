var money = prompt("Ваш бюджет на месяц?", ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

var appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

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


/*//Используем цикл WHILE
var i = 0;
while (i < 2) {
    var a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");
    if ((typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
        appData.expenses[a] = b;
    } else {
        console.log("Ошибочное значение");
        i--;
    }
    i++;
};

//Используем цикл DO WHILE
var i = 0;
do {
    var a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");
    if ((typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
        appData.expenses[a] = b;
    } else {
        console.log("Ошибочное значение");
        i--;
    }
    i++;
}
while (i < 2);*/

appData.monetPerDay = appData.budget / 30;
alert("Ежедневный бюджет: " + appData.monetPerDay);