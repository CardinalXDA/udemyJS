var money = +prompt("Ваш бюджет на месяц", "");
var time = prompt("Введите дату в формате YYYY-MM-DD", "");

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: null,
    income: null,
    savings: false,
};

var question1 = prompt("Введите обязательную статью расходов в этом месяце", "");
var question2 = prompt("Во сколько обойдется?", "");
appData.expenses.question1 = question2;

alert("Бюджет на 1 день сотовляет:" + addData["budget"] / 30);