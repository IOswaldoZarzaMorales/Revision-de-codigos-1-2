/// En app.js
//Calificacion 3/4 --->Elizabeth Razo Kerbber
//Reclutador -->  Oswaldo Ivan Zarza Morales 
// Función que filtra palabras más largas
//Retroalimentación : ¡Es evidente que estás dando tus primeros pasos en programación y eso es fantástico! Aunque no hayas completado la prueba técnica en JavaScript, recuerda que cada desafío es una oportunidad de aprendizaje. Es normal enfrentarse a dificultades al principio. Te animo a revisar los conceptos clave y a practicar más problemas relacionados con JavaScript. No te desanimes, este proceso de aprendizaje es parte fundamental del crecimiento como programador. Estoy seguro de que con dedicación y práctica, superarás este obstáculo. ¡Sigue adelante y no dudes en pedir ayuda si la necesitas!"

// Escribe tu código aquí.
document.addEventListener('DOMContentLoaded', function() {
    // Función que devuelve un array con las palabras más largas que la palabra dada
    function bigWords(word, array) {
      return array.filter((item) => item.length > word.length);
    }
  
    // Función que imprime un array en una lista en el HTML
    function printArray(array) {
      const ul = document.getElementById('myList');
  
      array.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
      });
    }
  
    // Array de palabras
    const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
  
    // Palabra de referencia
    const referenceWord = 'bocina';
  
    // Filtrar palabras más largas que la palabra de referencia
    const filteredArray = bigWords(referenceWord, myArray);
  
    // Imprimir el array filtrado en el HTML
    printArray(filteredArray);
  });