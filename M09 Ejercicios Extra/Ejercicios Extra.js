/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   var arrayDeObjetos = [];
   var arrayIndice = [];
   for (var indice in objeto){
      arrayIndice.push(indice);
      arrayIndice.push(objeto[indice]);
      arrayDeObjetos.push(arrayIndice);
      arrayIndice = [];
   }
   return arrayDeObjetos;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   var aux = 0;
   var stringObjeto = [];
   var objeto = {};
   var cantidadLetras = 0;
   var iterador = 0;
   var arrayString = string.split('');
   for (let i = 0; i < arrayString.length; i++){
      for (let j = 0; j < arrayString.length - 1; j++){
          if (arrayString[j].charCodeAt(0) > arrayString[j + 1].charCodeAt(0)){
             aux = arrayString[j];
             arrayString[j] = arrayString[j + 1];
             arrayString[j + 1] = aux;
          }
      }
   }
   stringObjeto[0] = arrayString[0];
   cantidadLetras ++;
   for (let i = 0; i < arrayString.length - 1; i++){
      if (arrayString[i] === arrayString[i + 1]){
         cantidadLetras ++;
      } else {
         stringObjeto[iterador] += cantidadLetras;
         cantidadLetras = 0;
         iterador ++;
         cantidadLetras ++;
         stringObjeto[iterador] = arrayString[i + 1];
      }
   }
   stringObjeto[iterador] += cantidadLetras;
   stringObjeto.forEach((elemento) => {
      objeto[elemento[0]] = parseInt(elemento[1]);
   })
   return objeto;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   var arrayString = string.split('');
   var arrayMinusculas = [];
   var arrayMayusculas = [];
   var indiceMinuscula = 0;
   var indiceMayuscula = 0;
   arrayString.forEach((elemento) => {
      if (elemento === elemento.toUpperCase()) {
         arrayMayusculas[indiceMayuscula] = elemento; 
         indiceMayuscula ++;
      } else {
         arrayMinusculas[indiceMinuscula] = elemento;
         indiceMinuscula ++;
      }
   })
   return arrayMayusculas.concat(arrayMinusculas).join('');
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   var arrayFrase = frase.split('');
   var arrayPalabras = [];
   var indice = 0;
   arrayPalabras[0] = '';
   var fraseInversa = '';
   arrayFrase.forEach((elemento) => {
      if (elemento === " "){
         indice ++;
         arrayPalabras[indice] = '';
      } else {
         arrayPalabras[indice] += elemento;
      }
   });
   while (arrayPalabras.length){
      for (let i = arrayPalabras[0].length-1; i >= 0; i--){
         fraseInversa += arrayPalabras[0][i];
      }
      fraseInversa += ' ';
      arrayPalabras.shift();
   }
   fraseInversa = fraseInversa.substring(0, fraseInversa.length - 1); 
   return fraseInversa;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   var arrayNumero = numero.toString().split('');
   var arrayCapicua = [];
   for (let i = arrayNumero.length - 1; i >= 0; i--){
      arrayCapicua.push(arrayNumero[i]);
   }
   if (arrayCapicua.join('') === arrayNumero.join('')){
      return "Es capicua";
   } else {
      return "No es capicua";
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   var arrayString = string.split('');
   var nuevoString = [];
   arrayString.forEach((elemento) => {
      if (elemento !== "a" && elemento !== "b" && elemento !== "c"){
         nuevoString.push(elemento);
      }
   })
   return nuevoString.join('');
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   var aux = 0;
   for (let i = 0; i < arrayOfStrings.length; i++){
      for (let j = 0; j < arrayOfStrings.length - 1; j++){
          if (arrayOfStrings[j].length > arrayOfStrings[j + 1].length){
             aux = arrayOfStrings[j];
             arrayOfStrings[j] = arrayOfStrings[j + 1];
             arrayOfStrings[j + 1] = aux;
          }
      }
   }
   return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   var arrayUnion = [];
   array1.forEach((elemento1) => {
      array2.forEach((elemento2) => {
         if (elemento1 === elemento2){
            arrayUnion.push(elemento1);
         }
      })
   })
   return arrayUnion;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
