/*
let user ={
	name: "John",
	surname: "Smith"
}
user.name="Pete";
delete user.name;
console.log(user);

isEmpty(user);

function isEmpty(user){
	let status="true"
	for(let key in user){
	if(typeof(user[key])!='undefined'){
		status="false";
	}
}
console.log(status);
}

let salaries={
	John: 100,
	Ann: 160,
	Pete: 130
}

sum(salaries);

function sum(obj){
	let sum=0;
	let text="Sum=";
	for(let key in salaries){
		if(typeof(salaries[key])=='number'){
		sum= sum+salaries[key];
	}
}
console.log(text+sum);
}

let menu={
	width: 100,
	height: 300,
	title: "My menu"
}

multiplyNumeric(menu);
function multiplyNumeric(obj){
	for(let key in menu){
		if(typeof(menu[key])=='number'){
		menu[key]=menu[key]*2;
	}
}
}
console.log(menu);
let obj={
	name: "Ivanchenko",
	m:function(){
		console.log(this);
	}
}

obj.m();

function makeUser(){
	return {
		name: "asd",
		surname: "dfs",
		ref (){
			return this;
		}
	};
}
let user1= makeUser();
console.log(user1);

// обьект калькуятор с 3 методами: read()– запрашивает 2 значения, sum()–сумировать, mul()-
let calculator={
	a: 0,
	b: 0,
	read:function(){
		this.a=prompt("Vvedite znachenie",0);
		this.b=prompt("Vvedite znachenie",0);
	},
	sum:function(){
		let sum;
		sum=this.a+this.b;
		return sum;
	},
	mul:function(){
		let mul;
		mul=this.a*this.b;
		return mul;
	}
}



let ladder={
	step: 0,
	up:function(){
		this.step=this.step+1;
	},
	down:function(){
		this.step=this.step-1;
	},
	showStep:function(){
		alert("Step="+this.step);
		console.log("Step="+this.step);
	}
}
function calculator(a,b){
	this.read=function(){
		this.a=prompt("Vvedite znachenie",0);
		this.b=prompt("Vvedite znachenie",0);
	},
	this.sum=function(){
		let sum;
		sum=this.a+this.b;
		return sum;
	},
	this.mul=function(){
		let mul;
		mul=this.a*this.b;
		return mul;
	}
}

let constr = new calculator(0,0);



function constructor(startingValue){
	this.startingValue=startingValue,
	Value=this.startingValue,
	this.add=function()
	{
		let newValue;
		newValue=prompt("Vvedite znachenie",0);
		this.Value=this.Value+this.newValue;
		return this;
	}
}

let pr = new constructor(15);

console.log(pr.add());
*/
function readNumber(){
	let znach;
	do{
		znach =prompt("Vvedite znachenie")
	}while(znach != undefined && znach != '')
	return znach;
}



function Random(min,max) {
  alert( min + Math.random() * (max - min))

}

function sum(){
	var a=prompt("Vvedite a",0);
	var b=prompt("Vvedite b",0);
	var sum = (+a)+(+b);
	alert(sum);
	return sum;
}



function strJS(){
	let array=[
	" Спочатку JavaScript був створений, щоб зробити веб-сторінки живими ", 
	" Різні двигуни мають різні «кодові імена».",
 	" Коли JavaScript створювався, він мав інше ім'я – «LiveScript» ",
 	" Повна інтеграція з HTML/CSS "
]
	for(let i=0; i<4;i++){
		if(array[i].indexOF('JavaScript')>-1){
			console.log(array[i]);
		}
	}
}

function corect_str(){
	let s=prompt("Vvedite stroky");
	if(s.length) 
    {
        s = s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
    }
    return s;
	alert(s);
}





