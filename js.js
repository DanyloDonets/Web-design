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
function Calculator(a,b){
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

let constr = new Calculator(0,0);



function Constructor(startingValue){
	this.startingValue=startingValue,
	this.startingValue += +prompt('Vvedste znachenie', 0);
}

let pr = new Constructor(15);

console.log(pr.add());
*/
console.log(document.body.firstElementChild)
console.log(document.body.lastElementChild.previousElementSibling)
console.log(document.body.lastElementChild.previousElementSibling.lastElementChild)

//task2
console.log(document.body.children)
console.log(document.body.firstElementChild)
console.log(document.body.lastElementChild)



