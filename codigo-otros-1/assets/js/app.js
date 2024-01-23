//integrantes // Calificacion
//Fernanda Carmona Huerta         (4/5)
//Lizbeth Alejandra Cerón Flores  (5/5)
//Oswaldo Ivan Zarza Morales      (4/5)

// Establecer el punto de partida para obtener datos de GitHub
const baseEndpoint = 'https://api.github.com';

// Crear el enlace completo para obtener información de usuarios en GitHub
const usersEndpoint = `${baseEndpoint}/users`;

// Seleccionar elementos en la página web para mostrar información de usuario
const $n = document.querySelector('.name'); // Elemento para mostrar el nombre
const $b = document.querySelector('.blog'); // Elemento para mostrar el blog (página web)
const $l = document.querySelector('.location'); // Elemento para mostrar la ubicación

// Función para mostrar la información de un usuario de GitHub
async function displayUser(username) {
    // Mostrar un mensaje de carga mientras se obtiene la información
    $n.textContent = 'cargando...';

    try {
        // Obtener la información del usuario desde GitHub
        const response = await fetch(`${usersEndpoint}/${username}`);
        const data = await response.json(); // Convertir la respuesta a formato JSON
        console.log(data);

        // Mostrar el nombre, el blog y la ubicación del usuario
        $n.textContent = `Nombre: ${data.name}`;
        $b.textContent = `Blog: ${data.blog}`;
        $l.textContent = `Ubicación: ${data.location}`;
    } catch (err) {
        // Manejar cualquier error que pueda ocurrir durante el proceso
        handleError(err);
    }
}

// Función para manejar y mostrar errores
function handleError(err) {
    console.log('¡OH NO!');
    console.log(err);
    $n.textContent = `Algo salió mal: ${err}`;
}

// Llamar a la función displayUser con el nombre de usuario 'stolinski' y manejar errores si los hay
displayUser('stolinski').catch(handleError);
