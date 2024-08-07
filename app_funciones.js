//1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
function paridad (num1)
{
    let resto = num1%2;
    if (resto === 0) 
    {
        return true;
    }
    else if (restro != 0)
    {
        return false;
    }
}

/*2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, 
y si ninguno lo es, indicar por consola que son iguales.*/

function numMayor (num1, num2)
{
    if (num1 === num2)
    {
        console.log("Los numeros "+ num1 +" y " + num2 + " son iguales.");
    }
    else if (num1 < num2)
    {
        console.log("El numero "+ num2 + " es mayor que "+ num1);
    }
    else if (num1 > num2)
    {
        console.log("El numero "+ num1 + "es mayor que "+ num2);
    }
}

//3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

function multiplo_5 (num1)
{
    let resto = num1 %5;
    if (resto === 0) 
    {
        return true;
    }
    else if (resto != 0)
    {
        return false;
    }
}

/*4- Crear una función que reciba un número por parámetro e imprima por consola todos los números 
desde el 0 hasta llegar a ese número.*/

function imprimir_X_Cant_Numeros(num1)
{
    for (let index = 0; index <= num1; index++) {
        console.log(index);
    }
}

/*5 - Crear una función que reciba una palabra y un número por parámetro 
e imprima por consola  esa palabra la cantidad correspondiente al número indicado.*/

function imprimirPalabra ( num1, palabra)
{
    for (let index = 0; index < num1; index++) {
        //console.log(index);
        console.log(palabra);
    }
}

//6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

const imprimirArray = function ( array)
{
    for (const valor of array) 
    {
        console.log(valor);        
    }
}

/*7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, 
menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".*/

const imprimir_Array_Menos_el_5 = function ( array)
{
    for (const valor of array) 
    {
        if (valor === array[4])
        {
            continue;
        }
        console.log(valor);
    }
}

/*8 - Crea una función que reciba un array de números y un número por parámetro
 e imprima por consola cada número del array multiplicado por el número pasado por parámetro.*/

const Imprimir_Item_Array_X_Veces = function ( array, num1)
{
    for (const numero of array) 
    {
        console.log(numero * num1);
    }
}

/*
//Probando Funciones

let numero1 = 16;
let numero2 = 31;
let palabra1 = "Hola Mundo";
let array1 = ["Nombre", "DNI" , "Correo" , "Edad" , "Nacionalidad"];
let arrayNumeros =[1,2,3,4,5,6,7,8,9,10];

//1

if (paridad (numero1)){
    console.log("Es multiplo de 2");
}else{
    console.log("No es multiplo de 2");
}

//2
numMayor(numero1, numero2)

//3
if (multiplo_5 (numero1)){
    console.log("Es multiplo de 5");
}else{
    console.log("No es multiplo de 5");
}

//4
imprimir_X_Cant_Numeros(numero1);

//5
imprimirPalabra (7, palabra1)

//6
imprimirArray (array1);

//7
imprimir_Array_Menos_el_5 (arrayNumeros);

//8
Imprimir_Item_Array_X_Veces (arrayNumeros, 2);

*/