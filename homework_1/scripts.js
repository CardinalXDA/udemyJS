var money = +prompt("Ваш бюджет на месяц", "");
var time = prompt("Введите дату в формате YYYY-MM-DD", "");
var question1 = prompt("Введите обязательную статью расходов в этом месяце", "");
var question2 = prompt("Во сколько обойдется?", "");

var addData = {
    budget: money,
    timeData: time,
    expenses: {question1: question2},
    optionalExpenses: null,
    income: null,
    savings: false, 
};
alert("Бюджет на 1 день сотовляет:" + addData["budget"] / 30);