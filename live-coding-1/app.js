/// En app.js
//Calificacion 3/4
//Oswaldo Ivan Zarza Morales
//Elizabeth Razo Kerbber
// Función que filtra palabras más largas
function bigWords(inputString, stringArray) {
    const resultArray = stringArray.filter(word => word.length > inputString.length);
    return resultArray;
}
