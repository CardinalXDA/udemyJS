'use strict';

var startBtn = document.getElementById("start"), //получение по id
	budgetValue = document.getElementsByClassName('budget-value')[0], //получение по class
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0], //получение по class
	levelValue = document.getElementsByClassName('level-value')[0], //получение по class
	expensesValue = document.getElementsByClassName('expenses-value')[0], //получение по class
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0], //получение по class
	incomeValue = document.getElementsByClassName('income-value')[0], //получение по class
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0], //получение по class
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0], //получение по class

	expensesItem = document.getElementsByClassName('expenses-item'), //получение по class
	expensesBtn = document.getElementsByTagName('button')[0], //получение по имени тега
	optionalExpensesBtn = document.getElementsByTagName('button')[1], //получение по имени тега
    countBtn = document.getElementsByTagName('button')[2], //получение по имени тега
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'), //Возвращает список элементов в пределах документа (поиск осуществляется в пределах указанного элемента)
	incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

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
for (var key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}