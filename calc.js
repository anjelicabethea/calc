let input1= document.getElementById('input1');
let input2= document.getElementById('input2')
let result= document.getElementById('result')
let addition=document.getElementById('addition')
let subtract= document.getElementById('subtract')
let multiply=document.getElementById('multiply')
let divide= document.getElementById('divide')


addition.addEventListener('click',function addition() {

  result.value = Number(input1.value )+ Number(input2.value)
  console.log(input1.value, input2.value,result.value );

})

subtract.addEventListener('click',function subtract() {

  result.value = Number(input1.value )- Number(input2.value)
  console.log(input1.value, input2.value,result.value );

})

multiply.addEventListener('click',function multiply() {

  result.value = Number(input1.value )* Number(input2.value)
  console.log(input1.value, input2.value,result.value );

})

divide.addEventListener('click',function divide() {

  result.value = Number(input1.value )/ Number(input2.value)
  console.log(input1.value, input2.value,result.value );

})
