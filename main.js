/*Declarada*/
/* const a=1;
const b=2;
function sumar(){
    let suma=a+b;
    console.log(suma);
}
sumar(); */
/* function sumar(a,b){
    let suma=a+b;
    console.log(suma);
}
sumar(2,1); */

/*Expresada*/
/* const sumar = function(a,b){
    let suma=a+b;
    console.log(suma);
}
sumar(2,1); */
/* sumar(2,1);
const sumar = function(a,b){
    let suma=a+b;
    console.log(suma);
} */
/* sumar(2,1); */
/* arrow function */
/* const sumar = (a,b) =>{
    let suma=a+b;
    console.log(suma);
}
sumar(2,3); */
/*Funcion que capture un numero y muestre la tabla de multiplicar de ese numero*/
/* let number=+prompt("Give me a number");
for(let i=1;i<10;i++){
    document.write(`${number}x${i}=${number*i}<br>`);
} */
/* scope global y local */
function sumar(a,b){
    let result=a+b;
    /* console.log(result); */
    return result;
}
function restar(a,b){
    let result=a-b;
    /* console.log(result); */
    return result;
}
/* sumar(2,2);
restar(3,2); */
console.log(sumar(2,2));
console.log(restar(3,2));
let suma=sumar(2,2);
let resta=restar(3,2);