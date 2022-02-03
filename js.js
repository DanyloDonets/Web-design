/*
console.log(document.body.firstElementChild)
console.log(document.body.lastElementChild.previousElementSibling)
console.log(document.body.lastElementChild.previousElementSibling.lastElementChild)

//task2
console.log(document.body.children)
console.log(document.body.firstElementChild)
console.log(document.body.lastElementChild)
*/
console.log("Task 1")
	let lis = document.body.getElementsByTagName("li");


	for (let i = 0; i < lis.length; i++) {

	 	let num = lis[i].getElementsByTagName("li").length;
	 	let name = lis[i].firstChild.nodeValue.trim();


	 	console.log(`${name}: ${num}`);
	}
console.log("Task2")
alert(document.body.lastChild.nodeType+", тип вузла елемента")



