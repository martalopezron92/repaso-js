
// Ejemplo inicial: Utilizamos defer para poder vincular el archivo js en el head de nuestro html
texto = document.querySelector("p");
texto.addEventListener("click", function(){
    alert("Hola mundo");
});

//----------------------- APUNTES -------------------------//

// // Declaracion e inicilizacion (definicion) de variable

let variable_nueva; //Declaracion de la variable
console.log(variable_nueva);
variable_nueva = 25; //Defino la variable => significa asignarle un valor
console.log(variable_nueva);
variable_nueva = 30; //Las variable declaradas con la particula let nos permiten modificar y actulizar su valor
const constante = 27; //Siempre la declaro y la defino en el momento
variable_nueva = variable_nueva + constante; // Las variables constantes las podemos usar pero no modificarles su valor

// Tipos de variables primitivas
let variable = 5; // Variable numerica (tipo entero)
let palabra1 = "Hola"; // Cadena de texto
let palabra2 = 'Javi'; // Cadena de texto
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


// // Funcion alert: print de python pero en una pestaña emergente.Nos permite:

// // Visualizar variables (pero no objetos)
// alert(variable)

// //Visualizar cadenas de texto y encandenar cadenas de texto
// alert("Hola, que tal");
// alert(palabra1 + " " + palabra2);

// // Visualizar operaciones matematicas mostrando el resultado
// alert(5*3-17+28%3);

// // Nos permite mezclar cadenas de textos y datos de tipo numerico
// alert("Tengo " + variable + " perros");


// Alcance de las variables (alcance en bloque: solo existe dentro del bloque donde se ha creado)
// Ejemplo
function prueba (){

    let variableEjemplo; 
    //La declaro en el mismo bloque en el que existe la funcion console.log
    const ejemplo = 3.14;

    if(true){
        variableEjemplo = true; //Defino su valor o lo actualizo
    }

    console.log(variableEjemplo);  
    console.log(ejemplo);
    
}

prueba();
// // ¿Que va a devolver? Si declaramos la variable dentro del if da error porque no esta definida. Lo solucionamos declarandola fuera.


// // Funcion prompt: Nos permite pedir informacion al usuario y almacenarla en una variable con la que poder trabajar

// Se complementa esta funcion con las funciones:
// - parseInt (transforma cadena de texto a numero entero) 
// - parseFloat (transforma cadena de texto a numero decimal)
// const num1 = parseFloat(prompt("Introduce un numero"));
// const num2 = parseFloat(prompt("Introduce un numero"));
// const suma = num1 + num2;
// alert("El resultado es " + suma);

// let n = 5;
// console.log(n > 10);


/// Funciones para que sirven y como utilizarlas
// Ejemplo de cuando se puede utilizar

// Ejercicio: Calcula el valor de la suma de los siguientes numeros:
// - 1 a 10
// - 1 a 50
// - 10 a 100
// - 50 a 1000

// let suma1 = 0;
// for(let i = 1; i <= 10; i++){
//     suma1 = suma1 + i;
// }
// console.log(suma1);

// let suma2 = 0;
// for(let i = 1; i <= 50; i++){
//     suma2 = suma2 + i;
// }
// console.log(suma2);

// let suma3 = 0;
// for(let i = 10; i <= 100; i++){
//     suma3 = suma3 + i;
// }
// console.log(suma3);

// let suma4 = 0;
// for(let i = 50; i <= 1000; i++){
//     suma4 = suma4 + i;
// }
// console.log(suma4);

// Como hacerlo con funciones

// Lo primero que tenemos que hacer es definir la funcion
function suma_numeros(){

    let inicio = parseInt(prompt("Introduce el primer numero"));
    let fin = parseInt(prompt("Introduce el segundo numero"));

    let suma = 0;
    for(let i = inicio; i <= fin; i++){
        suma = suma + i;
    }
    console.log(suma);
    return suma; // Devuelve un valor y nos permite trabajar con una variable definada dentro de un funcion, fuera de su ámbito

}


// Lo segundo: usar la funcion (Llamar o invocar a la funcion)
// let ejemplo = suma_numeros();
// console.log(ejemplo*3/100);
// suma_numeros();
// suma_numeros();
// suma_numeros();



// ------------------------ JAVASCRIPT DOM ------------------------------


// 1. ¿Como seleccionamos los elementos de nuestro DOM?

// Para seleccionar UN UNICO elemento utilizaremos la funcion document.querySelector().
// Los objetos que nos devuelve el selector son datos de tipo NO PRIMITIVO.
const titulo = document.querySelector("h1"); // selecciona utilizando la etiqueta
console.log(titulo);

const subtitulo = document.querySelector(".ejemplo"); // selecciona utilizando la clase
console.log(subtitulo);

const click = document.querySelector("#click"); // Selecciona utilizando el id
console.log(click);

// Para seleccionar MULTIPLES ELEMENTOS de la misma clase o la misma etiqueta utilizamos la
// funcion document.querySelectorAll(). IMPORTANTE: SIEMPRE NOS DEVUELVE UN ARRAY DE OBJETOS
const ejemplo = document.querySelectorAll(".ejemplo"); // selecciona utilizando la clase
console.log(ejemplo);
// Si solo quiero acceder a un elemento concreto del array utilizo su posicion
console.log(ejemplo[0]);
console.log(ejemplo[1]);
console.log(ejemplo[2]);

// Manera que ya conocemos de recorrer un array
for(let i = 0; i < ejemplo.length; i++){
    console.log(ejemplo[i]);
}


// Existe otra manera de trabajar con bucles y objetos, con el forEach
ejemplo.forEach((objeto, pos) =>{
    console.log("Elemento:" + pos);
    console.log(objeto);
})


// 2. ¿Cómo podemos acceder a las propiedades y atributos de nuestros objetos y modificarlos?

// Para acceder y modificar contenido de texto de una etiqueta html (objeto) podemos utilizar
// dos funciones, textConte e innerHTML:
console.log(titulo.textContent); //Nos devuelve un tipo de dato primitivo. Asi accedemos y visualizamos la propiedad
titulo.textContent = "Bienvenidos a vuestra a peor pesadilla <br> JAJAJA";

const sub = document.querySelector(".subtitulo");
sub.textContent = "Que pasa <br> chavales";

console.log(titulo.innerHTML); //La diferencia con textContent es que permite intrepretar etiquetas html dentro del texto
titulo.innerHTML = "Bienvenidos a vuestra a peor pesadilla <br> JAJAJA";
sub.innerHTML = "Que pasa <br> <br> chavales";

// EJEMPLO USANDO FOREACH y TEXTCONTENT
let suma = 0;
ejemplo.forEach(nota =>{
    suma = suma + parseFloat(nota.textContent);
})

const media = suma/ejemplo.length;
const salida = document.querySelector(".media");
salida.textContent = suma;

let nombres = document.querySelectorAll(".ejemplo2");
let concatenar = [];
nombres.forEach(nombre =>{
    concatenar.push(nombre.textContent);
})
const salida_cadena = document.querySelector(".salida-cadena");
salida_cadena.textContent = concatenar;

// 3. ¿Como creamos eventos?
const btn = document.querySelector("button"); // Seleccionamos el elemento que queremos que active el evento
// Creamos el evento
btn.addEventListener("click", function(){
    // Entrada de información a através de la etiqueta input
    const peso = document.querySelector(".peso"); 
    const altura = document.querySelector(".altura");
    // Para acceder al contenido de texto de una etiqueta tipo input utilizamos la funcion value
    const IMC = parseFloat(peso.value)/(parseFloat(altura.value)*parseFloat(altura.value));
    console.log(IMC);

    // Si queremos que se visualice el resultado en una etiqueta html utilizamos textContent
    const salida_IMC = document.querySelector(".IMC");
    salida_IMC.textContent = "Tu imc corporal es de " + IMC; 
});

const enlace = document.querySelector(".enlace");
enlace.addEventListener("click", function(){
    const saludo = document.querySelector(".saludo");
    saludo.textContent = "HOLA";
})

const btn_enviar = document.querySelector(".enviar");
btn_enviar.addEventListener("click", function(){
    // Cuando accedemos al contenido de etiquetas de tipo input utilizamos el método value. Value es lo mismo que textContent pero solo
    // tiene sentido y se puede y se debe utilizar con las etiquetas input
    let edad = document.querySelector(".edad");
    let anyo_nacimiento = document.querySelector(".nacimiento");
    const anyos = document.querySelector(".años");

    if(2025 - edad.value != anyo_nacimiento.value){
        anyos.textContent = "Los datos introducidos no son correctos";
    }else{
        anyos.textContent = "Los datos introducidos si son correctos";
    }
})


// 4. ¿Como podemos acceder y modificar propiedades del estilo css de nuestro objeto?
// 1. Accediendo directamente a la propiedad del objeto y modificandola, a traves del método style
const color = document.querySelector(".cambio_color");
color.addEventListener("click", function(){
    titulo.style.color = "#e67655";
    titulo.style.fontSize = "5rem";
    titulo.style.backgroundColor = "black";

    // sub.classList.add("color", "espacio");
})

// 2. Creando clases en css y asociandolas a nuestros objetos a través del método classList
color.addEventListener("click", function(){
    //sub.classList.add("color", "espacio"); //Añadimos clases creadas PREVIAMENTE en css con las propiedades que queremos modificar
    //sub.classList.remove("subtitulo"); // Eliminamos una clase ya asociada al objeto
    sub.classList.toggle("color");
})



