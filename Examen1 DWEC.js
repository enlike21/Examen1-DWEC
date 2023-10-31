window.alert("Vamos a crear una cuenta");
const nombre = prompt("Introduce tu nombre");
const apellido = prompt("Introduce tu apellido");
const apellido2 = prompt("Introduce tu segundo apellido");
const dni = prompt("Introduce tu dni");

var letra1_nombre = nombre.charAt(0);
var letras3_1apellido = apellido.substring(0, 3);
var letras3_2apellido = apellido2.substring(0, 3);
var cifras2_dni = dni.substring(0, 2);

let nombredeusuario = letra1_nombre + letras3_1apellido + letras3_2apellido + cifras2_dni;

console.log("Tu nombre de usuario es: " + nombredeusuario);
window.alert("Tu nombre de usuario es: " + nombredeusuario);
window.alert("Ahora vamos a crear una contraseña");

let contrasena = prompt("Introduce una contraseña");
let simbolos_aceptados = ["!", "\"\"", "#", "$", "%", "&", "\\(\\)", "*", "+", "-", "<", "=", ">", "?"];

let contrasenaValida = true; // Variable para verificar si la contraseña es válida

longitud_contraseña(contrasena);
simbolos_validos(simbolos_aceptados, contrasena);
letras_acentuadas_eñes(contrasena);
letra_numero_signo_simbolo(contrasena, simbolos_aceptados);
no_similar_dni(dni, contrasena);
no_similar_nombre_apellido_usuario(nombre, apellido, apellido2, nombredeusuario, contrasena);

if (contrasenaValida) {
    console.log("Contraseña creada exitosamente");
    window.alert("Contraseña creada exitosamente");
}

function longitud_contraseña(contrasena) {
    if (contrasena.length < 8) {
        contrasenaValida = false;
        window.alert("La contraseña tiene una longitud demasiado corta, mínimo tiene que tener 8 caracteres");
    } else {
        console.log("La contraseña tiene una longitud óptima");
    }
}

function simbolos_validos(simbolos_aceptados, contrasena) {
    var contiene_simbolos = false;
    for (var i = 0; i < simbolos_aceptados.length; i++) {
        if (contrasena.includes(simbolos_aceptados[i])) {
            contiene_simbolos = true;
            break;
        }
    }
    if (contiene_simbolos) {
        console.log("La contraseña contiene símbolos aceptados");
    } else {
        contrasenaValida = false;
        window.alert("La contraseña no contiene símbolos aceptados");
    }
}

function letras_acentuadas_eñes(contrasena) {
    var letras_acentuadas_e_eñe = /[á-úñÁ-ÚÑ]/;
    if (contrasena.match(letras_acentuadas_e_eñe)) {
        contrasenaValida = false;
        window.alert("La contraseña no puede contener acentos ni la letra \"ñ\"");
    } else {
        console.log("La contraseña contiene letras aceptadas");
    }
}

function letra_numero_signo_simbolo(contrasena, simbolos_aceptados) {
    var letra = /[a-zA-Z]/;
    var numero = /\d/;
    var simbolo = new RegExp("[" + simbolos_aceptados.join("") + "]");
    if (letra.test(contrasena) && numero.test(contrasena) && simbolo.test(contrasena)) {
        console.log("La contraseña contiene al menos una letra, un número y un símbolo de puntuación o símbolo de la lista");
    } else {
        contrasenaValida = false;
        window.alert("La contraseña no contiene al menos una letra, un número y un símbolo de puntuación o símbolo de la lista");
    }
}

function no_similar_dni(dni, contrasena) {
    let dni_1_part = dni.split("");
    let dni_2_part = dni.split("");
    for (var i = 0; i < 4; i++) {
        dni_1_part.pop();
    }
    for (var i = 0; i < 4; i++) {
        dni_2_part.shift();
    }
    if (contrasena.match(dni_1_part.join("")) || contrasena.match(dni_2_part.join(""))) {
        contrasenaValida = false;
        window.alert("La contraseña no puede contener tu dni");
    } else {
        console.log("La contraseña no contiene el dni, es válida");
    }
}

function no_similar_nombre_apellido_usuario(nombre, apellido, apellido2, nombredeusuario, contrasena) {
    if (contrasena.includes(nombre) || contrasena.includes(apellido) || contrasena.includes(apellido2) || contrasena.includes(nombredeusuario)) {
        contrasenaValida = false;
        window.alert("La contraseña no puede ser similar a tu nombre, apellido o nombre de usuario");
    } else {
        console.log("La contraseña no es similar al nombre, apellido ni nombre de usuario, es válida");
    }
}