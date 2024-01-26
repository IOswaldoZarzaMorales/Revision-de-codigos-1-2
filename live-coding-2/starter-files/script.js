// API
//Calificacion 3/4
//Oswaldo Ivan Zarza Morales
//Elizabeth Razo Kerbber
const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */
function fetchAnswer(){
    fetch("https://yesno.wtf/api")
}
.then(response => response.json())
.then(data => {
    document.getElementById('answer').innerText = data.answer;

    setTimeout(()) => {
        document.getElementById('').value = "";
        document.getElementById('').value = "";

    }, )

}

    .catch( error => console.error("error en la solicitud", error));


