
// Ejemplo inicial: Utilizamos defer para poder vincular el archivo js en el head de nuestro html
texto = document.querySelector("p");
texto.addEventListener("click", function(){
    alert("Hola mundo");
    console.log(variable);
});

//----------------------- APUNTES -------------------------//

// Declaracion e inicilizacion (definicion) de variable

let variable_nueva; //Declaracion de la variable
variable_nueva = 25; //Defino la variable => significa asignarle un valor
variable_nueva = 30; //Las variable declaradas con la particula let nos permiten modificar y actulizar su valor
const constante = 27; //Siempre la declaro y la defino en el momento
variable_nueva = variable_nueva + constante; // Las variables constantes las podemos usar pero no modificarles su valor

// Tipos de variables primitivas
let variable = 5; // Variable numerica (tipo entero)
let palabra1 = "Hola"; // Cadena de texto
let palabra2 = "Javi"; // Cadena de texto
let bool1 = true; // Booleana
let bool2 = false; // Booleana
let variable2 = null; // Sin valor 

// Console log: print de python pero en el inspeccionar. Nos permite:

// Visualizar variable y objetos
console.log(texto); //objeto
console.log(variable);

//Visualizar cadenas de texto y encandenar cadenas de texto
console.log("Hola, que tal");
console.log(palabra1 + " " + palabra2);

// Visualizar operaciones matematicas mostrando el resultado
console.log(5*3-17+28%3);

// Nos permite mezclar cadenas de textos y datos de tipo numerico
console.log("Tengo " + variable + " perros");

// Visualizar booleanos
console.log(bool1); // Tienen asociada el valor numerico true = 1
console.log(bool2); // Tienen asociada el valor numerico false = 0
console.log(bool1 + bool1); // Nos permite operaar con ellas como si fueran datos numericos

// Visualizar variables null
console.log(variable2);


// Funcion alert: print de python pero en una pestaña emergente.Nos permite:

// Visualizar variables (pero no objetos)
alert(variable)

//Visualizar cadenas de texto y encandenar cadenas de texto
alert("Hola, que tal");
alert(palabra1 + " " + palabra2);

// Visualizar operaciones matematicas mostrando el resultado
alert(5*3-17+28%3);

// Nos permite mezclar cadenas de textos y datos de tipo numerico
alert("Tengo " + variable + " perros");


// Alcance de las variables (alcance en bloque: solo existe dentro del bloque donde se ha creado)
// Ejemplo
function prueba (){

    let variableEjemplo; //La declaro en el mismo bloque en el que existe la funcion console.log
    const ejemplo = 3.14;

    if(true){
        variableEjemplo = true; //Defino su valor o lo actualizo
    }

    console.log(variableEjemplo); 
    console.log(ejemplo);
    
}

prueba();
// ¿Que va a devolver? Si declaramos la variable dentro del if da error porque no esta definida. Lo solucionamos declarandola fuera.


// Funcion prompt: Nos permite pedir informacion al usuario y almacenarla en una variable con la que poder trabajar

// Se complementa esta funcion con las funciones:
// - parseInt (transforma cadena de texto a numero entero) 
// - parseFloat (transforma cadena de texto a numero decimal)
const num1 = parseInt(prompt("Introduce un numero"));
const num2 = parseInt(prompt("Introduce un numero"));
const suma = num1 + num2;
alert("El resultado es " + suma);