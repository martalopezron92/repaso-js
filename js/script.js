
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
let suma = 0;
ejemplo.forEach((pepito, i) =>{
    console.log(i + 1);
    suma = suma + parseFloat(pepito.textContent)
})

const media = suma/ejemplo.length;
const salida = document.querySelector(".media");
salida.textContent = media;


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
let nombres = document.querySelectorAll(".ejemplo2");
let concatenar = [];
nombres.forEach(nombre =>{
    concatenar.push(nombre.textContent);
})
const salida_cadena = document.querySelector(".salida-cadena");
salida_cadena.textContent = concatenar;

// 3. ¿Como creamos eventos?
const btn = document.querySelector(".boton_formulario"); // Seleccionamos el elemento que queremos que active el evento
// Creamos el evento
// btn.addEventListener("click", function(){
//     // Entrada de información a através de la etiqueta input
//     const peso = document.querySelector(".peso"); 
//     const altura = document.querySelector(".altura");
//     // Para acceder al contenido de texto de una etiqueta tipo input utilizamos la funcion value
//     const IMC = parseFloat(peso.value)/(parseFloat(altura.value)*parseFloat(altura.value));
//     console.log(IMC);

//     // Si queremos que se visualice el resultado en una etiqueta html utilizamos textContent
//     const salida_IMC = document.querySelector(".IMC");
//     salida_IMC.textContent = "Tu imc corporal es de " + IMC; 
// });


// 4. ¿Como accedemos y modificamos las propiedades (css) de nuestro elemento seleccionado?
// Ejemplo de cambiar un color de un titulo a traves de un evento

btn_color = document.querySelector(".cambio_color");

btn_color.addEventListener("click", function(){
    tit = document.querySelector("h1");
    tit.style.color = "#ed5656"; // Accediendo a la propiedad que queremos modificar, a traves de style
    tit.style.backgroundColor = "black";
    tit.style.padding = "5rem";
    tit.style.fontSize = "15rem";
})

// ¿Y si queremos volver al color original cuando volvemos a pulsar el boton?
// Para esto utilizamos el metodo classList. Este metodo necesita de una clase creada previamente en css
btn_color.addEventListener("click", function(){
    subtit = document.querySelector("h2");
    //subtit.classList.add("color-modificado"); // Esta funcion nos permite añadir clases
    subtit.classList.toggle("color-modificado"); // Esta funcion nos permite alternar clases (es decir, añadir y eliminar en funcion de si existen o no)


    // La funcion contains nos devueñve true si el objeto contiene la clase especificada y false si no
    const dosclases = document.querySelector(".numero");
    if(dosclases.classList.contains("ejemplo") == true){
        dosclases.style.color = "red";
    }

})

subtit = document.querySelector("h2");
subtit.classList.remove("subtitulo"); // Esta funcion nos permite eliminar clases

// El método classList nos permite trabajar con las clases de nuestro objeto como si fueran elementos de un array
const dosclases = document.querySelector(".numero");
// Con la funcion .length nos devuelve el numero de clases asociadas
console.log("El numero de clases de este objeto es: " + dosclases.classList.length);
// Podemos acceder a las clases por su posicion (como en los arrays)
console.log(dosclases.classList[0]);
console.log(dosclases.classList[1]);
// Recorrerlos con un forEach también
dosclases.classList.forEach((clase, i) =>{
    console.log("clase " + (i + 1) + ": " + clase);
})


// 5. ¿Como podemos modificar O ACCEDER a atributos de nuestros objetos?
// La diferencia en propiedad y atributo es muy importante. Llamaremos propiedad a todo lo que podemos
// modificar desde css y atributo a los parámetros que vienen indicados en la propia etiqueta html
const nombre = document.querySelector(".nombre");
let nombre_variable = nombre.getAttribute("placeholder") + " por favor"; //Con la funcion .getAttribute accedemos y obtenemos el valor del atributo
nombre.setAttribute("placeholder", "DIME TU NOMBRE"); //La función .setAttribute nos sirve para modificar el valor del atributo
nombre.style.width = "20rem"; //Modifiicando una propiedad (css)
nombre.removeAttribute("placeholder"); //La funcion .removeAttribbute nos sirve para eliminar un atributo
console.log(nombre.getAttribute("class"));

const peso = document.querySelector(".peso");
let text_peso = peso.getAttribute("placeholder"); // Sirve para acceder al valor del atributo indicado, NO para modificarlo
text_peso = text_peso + " por favor";
console.log("El valor del placeholder es :" + text_peso);
peso.setAttribute("placeholder", "Introduce tu peso en kg");
peso.removeAttribute("placeholder");


// 6. ¿Como creamos elementos y objetos nuevos en nuestro html de manera dinámica?
// 1. Utilizamos la funcion createElement para crear el elemento
// 2. Modificamos su contenido y apariencia utilizando textContent, classList o cualquiera de los métodos que ya conocemos
// 3. Posicionamos el elemento dentro de nuestro html utilizando la funcion .appendChild. Esta funcion coloca 
// el nuevo elemento como el ultimo hijo de la etiqueta padre que lo contiene.

// EJEMPLO 1
btn.addEventListener("click", function(){
    // Entrada de información a através de la etiqueta input
    const peso = document.querySelector(".peso"); 
    const altura = document.querySelector(".altura");
    // Para acceder al contenido de texto de una etiqueta tipo input utilizamos la funcion value
    const IMC = parseFloat(peso.value)/(parseFloat(altura.value)*parseFloat(altura.value));
    // console.log("salida:" + IMC);

    // Previamente a crear el nuevo objeto, para que no se vayan creando elementos uno detras de otro,
    // comprobamos si existe.
    // Para ello, seleccionamos el objeto a través del selector .nextElementSibling, que nos devuelve el 
    // objeto hermano (si existiera) del elemento indicado 
    const formulario = document.querySelector("form"); //El formulario es el elemento hermano en este ejemplo
    let salida = formulario.nextElementSibling;

    // Si existe, lo eliminamos utilizando la funcion .remove. Si no existe no se hace nada.
    if(salida){
        salida.remove();
    }

    // Creamos el elemento para que nos aparezca siempre una unica vez
    salida = document.createElement("p"); //Creamos el nuevo elemento
    salida.innerHTML = "Tu imc corporal es de " + IMC; //Modificamos su contenido
    // Modificamos sus propiedades css
    if(IMC < 20){
        salida.style.color = "red";
    }
    else if(IMC >= 20 && IMC < 24){
        salida.style.color = "green";
    }else{
        salida.style.color = "black";
    }

    // Posicionamos el nuevo elemento.
    // Para añadir como ultimo elemento de una etiqueta padre se utiliza la funcion appendChild
    const elemento_referencia = document.querySelector("form");
    elemento_referencia.parentNode.insertBefore(salida, elemento_referencia.nextElementSibling);

});


// EJEMPLO 2

// 1. CReamos los elementos
const new_btn = document.createElement("button");
const new_inp = document.createElement("input");

// 2. Modificamos su contenido y atributos
new_btn.textContent = "Click aqui";
new_inp.setAttribute("placeholder", "Introduce tu nombre");
console.log(new_btn);
console.log(new_inp);

// 3. Modificamos su apariencia
new_btn.classList.add("new-btn");
new_inp.classList.add("new-input");

// 3. Posicionamiento de nuestro nuevo elemento
// a) appendChild: Posiciona el objeto como el ultimo hijo de la etiqueta padre seleccionada

// Ejemplo 1: Lo posicionamos como los ultimos elementos dentro del body
const body = document.querySelector("body");
body.appendChild(new_inp);
body.appendChild(new_btn);

// Ejemplo 2: Lo posicionamos con los ultimos elementos dentro del form
// const form = document.querySelector("form");
// form.appendChild(new_inp);
// form.appendChild(new_btn);


// b) padre.insertBefore(nuevo elemento, elemento de referencia): Posiciona el objeto antes de otro objeto
//    nextSiblingElement: Selecciona al siguiente hermano adyacente
//    parentNode: Nos devuelve el elemento padre a partir de uno de sus hijos
const new_p = document.createElement("p");
new_p.textContent = 4;
new_p.style.color = "green";

const p_before = document.querySelector(".numero");
p_before.parentNode.insertBefore(new_p, p_before.nextElementSibling);

console.log(p_before.parentNode); // Nos devuelve el objeto padre seleccionado
console.log(p_before.nextElementSibling); // Nos devuelve el objeto hermano adyacente del elemento seleccionado


// 7. ¿Como eliminamos elementos de manera dinamica?
const elemento_eliminar = p_before.nextElementSibling; // Lo seleccionamos como hermano adyacente
elemento_eliminar.remove();















