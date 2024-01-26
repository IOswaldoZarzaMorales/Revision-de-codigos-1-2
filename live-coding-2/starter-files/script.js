// API
/// En app.js
//Calificacion 3/4 ---> Oswaldo Ivan Zarza Morales
//Reclutador --> Elizabeth Razo Kerbber
//Retroalimentación ---> ibas muy bien, veo que le sabes, solo trata de considerar mas el tiempo, si vemos que ya esta por agotarse, es mejor explicar la logica, es lo que mas les interesa a los reclutadores

// const API_ENDPOINT = 'https://yesno.wtf/api';

// /**
//  * STEPS:
//  *
//  * 1. Create a fetchAnswer function and call the API
//  * 2. Output the API's response
//  * 3. Attach fetchAnswer to an event listener
//  * 4. Clear output after 3 seconds
//  * 5. Optional: add loading/error states
//  *
//  */
// function fetchAnswer(){
//     fetch("https://yesno.wtf/api")
// }
// .then(response => response.json())
// .then(data => {
//     document.getElementById('answer').innerText = data.answer;

//     setTimeout(()) => {
//         document.getElementById('').value = "";
//         document.getElementById('').value = "";

//     }, )

// }

//     .catch( error => console.error("error en la solicitud", error));
document.addEventListener('DOMContentLoaded', () => {
    // Paso 1: Crear la función fetchAnswer
    const fetchAnswer = async () => {
      try {
        // Realizar la petición al API
        const response = await fetch(API_ENDPOINT);
        
        // Verificar si la petición fue exitosa (código 200)
        if (response.ok) {
          // Convertir la respuesta a formato JSON
          const data = await response.json();
          
          // Paso 2: Mostrar la respuesta en el HTML
          const answerDiv = document.getElementById('answer');
          answerDiv.textContent = data.answer;
  
          // Paso 4: Limpiar la pregunta y la respuesta después de 5 segundos
          setTimeout(() => {
            document.getElementById('input').value = '';
            answerDiv.textContent = '';
          }, 5000);
        } else {
          throw new Error('Error en la petición al API');
        }
      } catch (error) {
        console.error(error);
        // Manejar el error, podrías mostrar un mensaje al usuario
      }
    };
  
    // Paso 3: Agregar fetchAnswer a un eventListener
    const button = document.getElementById('button');
    button.addEventListener('click', () => {
      // Validar que el input no esté vacío (Bonus)
      const input = document.getElementById('input');
      if (input.value.trim() !== '') {
        fetchAnswer();
      } else {
        document.getElementById('error').textContent = 'Por favor, ingresa una pregunta.';
      }
    });
  
    // Bonus: Limpiar el mensaje de error cuando se comienza a escribir en el input
    const input = document.getElementById('input');
    input.addEventListener('input', () => {
      document.getElementById('error').textContent = '';
    });
  
    // Bonus: Validar que no se pueda dar click al botón si el input está vacío
    input.addEventListener('keyup', () => {
      const buttonDisabled = input.value.trim() === '';
      button.disabled = buttonDisabled;
    });
  });
  


