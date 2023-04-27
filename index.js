// let does not support hoisting; i.e it's declaration is not hoisted/ taken to the top of the scope , rather accessible only from within the declaration block also it does not allow redeclaration of variables within same scope

let flowers = ['jasmine', 'rose','lavender']
console.log(flowers)

function letDisplay(){
	let a = 45;
  console.log(a);
   //let a;
  let flowers = ['marigold', 'poppy', 'daisy']
  document.querySelector("h1").innerText = flowers
}
letDisplay();

// var supports hoisting ;i.e. the variables declarations are taken to the top of scope and before any code execution thus we can access the variables even before they have been declared and also allowing redeclaration of variables in same scope and values overridden only when new assignment occurs
var plants = ['jade', 'bamboo']
function varDisplay(){
	var a = 45;
  console.log(a);
  var a = 90;
  console.log(a);
  
}
var plants = ['snake', 'dieffenbachia']
document.querySelector("h1").innerText = plants
varDisplay();
