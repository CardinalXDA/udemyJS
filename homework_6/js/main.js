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

expensesBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBtn.disabled = true;

startBtn.addEventListener('click', function() {
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt("Ваш бюджет на месяц?", '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    };
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed(); //запись значения money в lable budgetValue с округлением
    yearValue.value = new Date(Date.parse(time)).getFullYear(); // парс времени в поля
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    expensesBtn.disabled = false;
    optionalExpensesBtn.disabled = false;
    countBtn.disabled = false;
});

expensesBtn.addEventListener('click', function() {
	var sum = 0;
	for (var i = 0; i < expensesItem.length; i++) {
        var a = expensesItem[i].value,
            b = expensesItem[++i].value;
        if ((typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
            appData.expenses[a] = b;
            sum += +b;
        } else {
            console.log("Ошибочное значение");
            i--;
        }
    }
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function() {
	for (var i = 0; i < optionalExpensesItem.length; i++) {
        var questionOptExpenses = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = questionOptExpenses;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBtn.addEventListener('click', function() {

	if (appData.budget != undefined) {

		appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

		if (appData.moneyPerDay < 100) {
	        levelValue.textContent = "Это минимальный уровень достатка!";
	    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	        levelValue.textContent = "Это средний уровень достатка!";
	    } else if (appData.moneyPerDay > 2000) {
	        levelValue.textContent = "Это высокий уровень достатка!";
	    } else {
	        levelValue.textContent = "Произошла ошибка";
	    }
	} else {
		dayBudgetValue.textContent = "Произошла ошибка";
	}
});

incomeItem.addEventListener('input', function() {
	var items = incomeItem.value;
	appData.income = items.split(", ");
	incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function() {
	if (appData.savings == true) {
		appData.savings = false;
	} else {
		appData.savings = true;
	}
});

sumValue.addEventListener('input', function() {
	if (appData.savings == true) {
		var sum 	= +sumValue.value,
			persent = +percentValue.value;
		appData.monthIncome = sum/100/12*persent;
		appData.yearIncome = sum/100*persent;

		monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});
percentValue.addEventListener('input', function() {
	if (appData.savings == true) {
		var sum 	= +sumValue.value,
			persent = +percentValue.value;
		appData.monthIncome = sum/100/12*persent;
		appData.yearIncome = sum/100*persent;

		monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});

var appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};
