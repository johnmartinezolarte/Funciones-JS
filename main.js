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
let number=+prompt("Give me a number");
for(let i=1;i<10;i++){
    document.write(`${number}x${i}=${number*i}<br>`);
}
