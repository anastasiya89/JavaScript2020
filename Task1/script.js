'use strict';

let money, time;

function start(){
	money = +prompt("Ваш бюджет на месяц?");
	time = prompt("Введите дату в формате YYYY-MM-DD");

	while(isNaN(money) || money == "" || money == null){
		money = +prompt("Ваш бюджет на месяц?");
	}
}

start();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true 	
};

function chooseExpenses(){
	for (let i = 0; i < 2; i++){	
		let	a = prompt("Введите обязательную статью расходов в этом месяце", ""),
			b = +prompt("Во сколько обойдется?", "");
	
		if (typeof(a)==="string" && typeof(a) != null && typeof(b) != null &&
			a != "" && b != "" && !isNaN(b) && a.length <50){
				console.log("done");
				appData.expenses[a] = b;
		} else {
			--i;
			alert("Вы ввели не верные данные, повторите еще раз");
		}	
	}
}

chooseExpenses();

function detectDayBudget(){
	appData.moneyPerDay = (appData.budget / 30).toFixed();
	alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

detectDayBudget();


function detectLevel(){
	if (appData.moneyPerDay < 100){
		console.log("Минимальный уровень достатка");
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
		console.log("Средний уровень достатка");
	} else if (appData.moneyPerDay > 2000){
		console.log("Высокий уровень достатка");
	} else {
		console.log("Произошла ошибка");
	}
}

detectLevel();

function chooseOptExpenses(){
	for(let i=1; i <= 3; i++){
		let	a = prompt("Статья необязательных расходов?", "");
	
		if (typeof(a) === "string" && typeof(a) != null  && a != "" && a.length <50){
				appData.optionalExpenses[i] = a;
		} else {
			--i;
			alert("Вы ввели не верные данные, повторите еще раз");
		}	
	}	
}

chooseOptExpenses();

function checkSavings(){
	if(appData.savings == true){
		let save = +prompt("Cумма накоплений?"),
			percent = +prompt("Под какой процент?");
		
		appData.monthIncom = save/100/12 * percent;
		alert("Доход в месяц с вашего депозита: " + appData.monthIncom);
	}
}

checkSavings();

console.log(appData);



/*
let i = 0;
do {
	let	a = prompt("Введите обязательную статью расходов в этом месяце", ""),
		b = +prompt("Во сколько обойдется?", "");

	if (typeof(a)==="string" && typeof(a) != null && typeof(b) != null &&
		a != "" && b != "" && !isNaN(b) && a.length <50){
			console.log("done");
			appData.expenses[a] = b;
			i ++;
	} else {
		alert("Вы ввели не верные данные, повторите еще раз");
	}	
} while (i < 2)

let i = 0;
while (i < 2)  {
	let	a = prompt("Введите обязательную статью расходов в этом месяце", ""),
		b = +prompt("Во сколько обойдется?", "");

	if (typeof(a)==="string" && typeof(a) != null && typeof(b) != null &&
		a != "" && b != "" && !isNaN(b) && a.length <50){
			console.log("done");
			appData.expenses[a] = b;
			i ++;
	} else {
		alert("Вы ввели не верные данные, повторите еще раз");
	}	
}
*/
	
