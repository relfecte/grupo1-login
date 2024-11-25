//Arreglo que contiene las preguntas
const preguntas = [
    {
        id:1,
        categoria:"general",
        titulo:"¿Cuál es el planeta más grande de nuestro sistema solar?",
        opcionA:"Tierra",
        opcionB:"Marte",
        opcionC:"Jupiter",
        opcionD:"Saturno",
        correcta:"c"
        
    },
    {
        id:2,
        categoria:"general",
        titulo:"¿Quién escribió 'Cien años de soledad'?",
        opcionA:"Gabriel García Márquez",
        opcionB:"Julio Cortázar",
        opcionC:"Isabel Allende",
        opcionD:"Mario Vargas Llosa",
        correcta:"a"
    },
    {
        id:3,
        categoria:"general",
        titulo:"¿Cuál es el río más largo del mundo?",
        opcionA:"Amazonas",
        opcionB:"Nilo",
        opcionC:"Paraná",
        opcionD:"Misisipi",
        correcta:"a"
    },
    {
        id:4,
        categoria:"general",
        titulo:"¿Cuál es el componente principal del aire que respiramos?",
        opcionA:"Nitrogeno",
        opcionB:"Oxígeno",
        opcionC:"Dióxido de carbono",
        opcionD:"Hidrógeno",
        correcta:"a"
    },
    {
        id:5,
        categoria:"general",
        titulo:"¿En qué año comenzó la Primera Guerra Mundial?",
        opcionA:"1905",
        opcionB:"1914",
        opcionC:"1923",
        opcionD:"1939",
        correcta:"b"
    },
    {
        id: 6,
        categoria: "general",
        titulo: "¿Quién pintó la Mona Lisa?",
        opcionA: "Vincent van Gogh",
        opcionB: "Leonardo da Vinci",
        opcionC: "Pablo Picasso",
        opcionD: "Claude Monet",
        correcta: "b"
    },
    {
        id: 7,
        categoria: "general",
        titulo: "¿Cuál es el río más largo del mundo?",
        opcionA: "Nilo",
        opcionB: "Amazonas",
        opcionC: "Yangtsé",
        opcionD: "Misisipi",
        correcta: "b"
    },
    {
        id: 8,
        categoria: "general",
        titulo: "¿Cuál es la capital de Japón?",
        opcionA: "Pekín",
        opcionB: "Tokio",
        opcionC: "Seúl",
        opcionD: "Bangkok",
        correcta: "b"
    },
    {
        id: 9,
        categoria: "general",
        titulo: "¿Qué metal es líquido a temperatura ambiente?",
        opcionA: "Mercurio",
        opcionB: "Oro",
        opcionC: "Plomo",
        opcionD: "Plata",
        correcta: "a"
    },
    {
        id: 10,
        categoria: "general",
        titulo: "¿En qué continente se encuentra Egipto?",
        opcionA: "Asia",
        opcionB: "África",
        opcionC: "Europa",
        opcionD: "Oceanía",
        correcta: "b"
    },
    {
        id: 11,
        categoria: "general",
        titulo: "¿Quién escribió 'Don Quijote de la Mancha'?",
        opcionA: "Gabriel García Márquez",
        opcionB: "Miguel de Cervantes",
        opcionC: "Lope de Vega",
        opcionD: "Federico García Lorca",
        correcta: "b"
    },
    {
        id: 12,
        categoria: "general",
        titulo: "¿Cuál es el océano más grande del mundo?",
        opcionA: "Atlántico",
        opcionB: "Índico",
        opcionC: "Ártico",
        opcionD: "Pacífico",
        correcta: "d"
    },
    {
        id: 13,
        categoria: "general",
        titulo: "¿En qué año llegó el hombre a la Luna?",
        opcionA: "1965",
        opcionB: "1969",
        opcionC: "1972",
        opcionD: "1963",
        correcta: "b"
    },
    {
        id: 14,
        categoria: "general",
        titulo: "¿Qué país es famoso por el tango?",
        opcionA: "Brasil",
        opcionB: "España",
        opcionC: "Argentina",
        opcionD: "México",
        correcta: "c"
    },
    {
        id: 15,
        categoria: "general",
        titulo: "¿Cuál es el idioma más hablado del mundo?",
        opcionA: "Inglés",
        opcionB: "Español",
        opcionC: "Chino mandarín",
        opcionD: "Hindú",
        correcta: "c"
    },
    {
        id: 16,
        categoria: "general",
        titulo: "¿Qué instrumento tocaba Ludwig van Beethoven?",
        opcionA: "Violín",
        opcionB: "Flauta",
        opcionC: "Piano",
        opcionD: "Guitarra",
        correcta: "c"
    },
    {
        id: 17,
        categoria: "general",
        titulo: "¿Cuál es el país más grande del mundo por área?",
        opcionA: "Canadá",
        opcionB: "China",
        opcionC: "Estados Unidos",
        opcionD: "Rusia",
        correcta: "d"
    },
    {
        id: 18,
        categoria: "general",
        titulo: "¿Qué inventó Alexander Graham Bell?",
        opcionA: "Teléfono",
        opcionB: "Radio",
        opcionC: "Televisión",
        opcionD: "Cámara",
        correcta: "a"
    },
    {
        id: 19,
        categoria: "general",
        titulo: "¿Cuál es el animal terrestre más rápido?",
        opcionA: "León",
        opcionB: "Guepardo",
        opcionC: "Tigre",
        opcionD: "Caballo",
        correcta: "b"
    },
    {
        id: 20,
        categoria: "general",
        titulo: "¿Cuántos días tiene un año bisiesto?",
        opcionA: "364",
        opcionB: "365",
        opcionC: "366",
        opcionD: "368",
        correcta: "c"
    },
    {
        id: 21,
        categoria: "general",
        titulo: "¿Cuál es la moneda oficial de Japón?",
        opcionA: "Won",
        opcionB: "Yen",
        opcionC: "Dólar",
        opcionD: "Euro",
        correcta: "b"
    },
    {
        id: 22,
        categoria: "general",
        titulo: "¿Qué elemento químico tiene el símbolo 'O'?",
        opcionA: "Oxígeno",
        opcionB: "Oro",
        opcionC: "Ósmio",
        opcionD: "Oxalato",
        correcta: "a"
    },
    {
        id: 23,
        categoria: "general",
        titulo: "¿Cuál es el nombre del héroe mitológico griego que venció a Medusa?",
        opcionA: "Aquiles",
        opcionB: "Hércules",
        opcionC: "Perseo",
        opcionD: "Teseo",
        correcta: "c"
    },
    {
        id: 24,
        categoria: "general",
        titulo: "¿Qué país tiene la torre Eiffel?",
        opcionA: "Italia",
        opcionB: "Francia",
        opcionC: "España",
        opcionD: "Alemania",
        correcta: "b"
    },
    {
        id: 25,
        categoria: "general",
        titulo: "¿Quién es conocido como el padre de la teoría de la relatividad?",
        opcionA: "Isaac Newton",
        opcionB: "Albert Einstein",
        opcionC: "Galileo Galilei",
        opcionD: "Niels Bohr",
        correcta: "b"
    },
    {
        id: 26,
        categoria: "general",
        titulo: "¿Qué ciudad es conocida como 'La Gran Manzana'?",
        opcionA: "Los Ángeles",
        opcionB: "Chicago",
        opcionC: "Nueva York",
        opcionD: "San Francisco",
        correcta: "c"
    },
    {
        id: 27,
        categoria: "general",
        titulo: "¿Cuál es el segundo planeta más cercano al sol?",
        opcionA: "Marte",
        opcionB: "Venus",
        opcionC: "Mercurio",
        opcionD: "Tierra",
        correcta: "b"
    },
    {
        id: 28,
        categoria: "general",
        titulo: "¿En qué país se encuentra la Gran Muralla?",
        opcionA: "Corea del Sur",
        opcionB: "China",
        opcionC: "Japón",
        opcionD: "India",
        correcta: "b"
    },
    {
        id: 29,
        categoria: "general",
        titulo: "¿Qué vitamina es producida por el cuerpo al exponerse al sol?",
        opcionA: "Vitamina C",
        opcionB: "Vitamina A",
        opcionC: "Vitamina D",
        opcionD: "Vitamina B12",
        correcta: "c"
    },
    {
        id: 30,
        categoria: "general",
        titulo: "¿Quién es conocido como el 'Rey del Rock and Roll'?",
        opcionA: "Elvis Presley",
        opcionB: "Chuck Berry",
        opcionC: "Little Richard",
        opcionD: "Buddy Holly",
        correcta: "a"
    },
    
    {
        id: 6,
        categoria: "musica",
        titulo: "¿Quién es conocido como el pimer Rey del Pop?",
        opcionA: "Elvis Presley",
        opcionB: "Michael Jackson",
        opcionC: "Madonna",
        opcionD: "Prince",
        correcta: "b"
    },
    {
        id: 7,
        categoria: "musica",
        titulo: "¿Cuál es el género musical más popular en todo el mundo?",
        opcionA: "Rock",
        opcionB: "Electrónica",
        opcionC: "Rap",
        opcionD: "Pop",
        correcta: "d"
    },
    {
        id: 8,
        categoria: "musica",
        titulo: "¿En qué década surgió el movimiento punk?",
        opcionA: "1960",
        opcionB: "1970",
        opcionC: "1980",
        opcionD: "1990",
        correcta: "b"
    },
    {
        id: 9,
        categoria: "musica",
        titulo: "¿Quién es el famoso guitarrista de la banda Queen?",
        opcionA: "John Lennon",
        opcionB: "Jimi Hendrix",
        opcionC: "Brian May",
        opcionD: "Eric Clapton",
        correcta: "c"
    },
    {
        id: 10,
        categoria: "musica",
        titulo: "¿Cuál es el instrumento principal en una orquesta sinfónica?",
        opcionA: "Guitarra",
        opcionB: "Piano",
        opcionC: "Violín",
        opcionD: "Flauta",
        correcta: "c"
    },
    {
        id: 11,
        categoria: "deportes",
        titulo: "¿En qué deporte se utiliza una pelota de baloncesto?",
        opcionA: "Fútbol",
        opcionB: "Baloncesto",
        opcionC: "Golf",
        opcionD: "Tenis",
        correcta: "b"
    },
    {
        id: 12,
        categoria: "deportes",
        titulo: "¿Cuál es el país de origen de la artista del tenis Serena Williams?",
        opcionA: "Estados Unidos",
        opcionB: "Francia",
        opcionC: "España",
        opcionD: "Australia",
        correcta: "a"
    },
    {
        id: 13,
        categoria: "deportes",
        titulo: "¿Cuántos jugadores conforman un equipo de fútbol estándar en el campo durante un partido?",
        opcionA: "8",
        opcionB: "10",
        opcionC: "11",
        opcionD: "12",
        correcta: "c"
    },
    {
        id: 14,
        categoria: "deportes",
        titulo: "¿Quién es considerado el mejor nadador de todos los tiempos?",
        opcionA: "Michael Phelps",
        opcionB: "Usain Bolt",
        opcionC: "Simone Biles",
        opcionD: "Roger Federer",
        correcta: "a"
    },
    {
        id: 15,
        categoria: "deportes",
        titulo: "¿En qué deporte se compite por la Copa Davis?",
        opcionA: "Fútbol",
        opcionB: "Tenis",
        opcionC: "Golf",
        opcionD: "Balonmano",
        correcta: "b"
    },
    {
        id: 16,
        categoria: "programacion",
        titulo: "¿Cuál de los siguientes lenguajes de programación es de tipado fuerte?",
        opcionA: "JavaScript",
        opcionB: "Python",
        opcionC: "C++",
        opcionD: "Java",
        correcta: "c"
    },
    {
        id: 17,
        categoria: "programacion",
        titulo: "¿Qué significa HTML en el contexto de desarrollo web?",
        opcionA: "HyperText Markup Language",
        opcionB: "High-Level Text Management Language",
        opcionC: "HyperTransfer Markup Language",
        opcionD: "High-Level Transfer Management Language",
        correcta: "a"
    },
    {
        id: 18,
        categoria: "programacion",
        titulo: "¿Cuál es el propósito principal de CSS en desarrollo web?",
        opcionA: "Manejar la lógica del lado del servidor",
        opcionB: "Estilizar la presentación de las páginas web",
        opcionC: "Gestionar la interactividad del usuario",
        opcionD: "Definir las rutas de la aplicación",
        correcta: "b"
    },
    {
        id: 19,
        categoria: "programacion",
        titulo: "¿Qué es un bucle 'for' en la programación?",
        opcionA: "Un tipo de dato",
        opcionB: "Una estructura condicional",
        opcionC: "Una función",
        opcionD: "Una estructura de control de flujo que se repite",
        correcta: "d"
    },
    {
        id: 20,
        categoria: "programacion",
        titulo: "¿Cuál de los siguientes no es un sistema de gestión de bases de datos?",
        opcionA: "MySQL",
        opcionB: "MongoDB",
        opcionC: "Express",
        opcionD: "SQLite",
        correcta: "c"
    },
    {
        id: 21,
        categoria: "juegos",
        titulo: "¿Cuál es el fontanero más famoso en el mundo de los videojuegos?",
        opcionA: "Sonic",
        opcionB: "Link",
        opcionC: "Mario",
        opcionD: "Master Chief",
        correcta: "c"
    },
    {
        id: 22,
        categoria: "juegos",
        titulo: "¿En qué año se lanzó el juego 'The Legend of Zelda: Ocarina of Time'?",
        opcionA: "1996",
        opcionB: "1998",
        opcionC: "2000",
        opcionD: "2002",
        correcta: "b"
    },
    {
        id: 23,
        categoria: "juegos",
        titulo: "¿Cuál es la empresa creadora de la consola PlayStation?",
        opcionA: "Microsoft",
        opcionB: "Sony",
        opcionC: "Nintendo",
        opcionD: "Sega",
        correcta: "b"
    },
    {
        id: 24,
        categoria: "juegos",
        titulo: "¿Quién es el protagonista del juego 'The Witcher 3: Wild Hunt'?",
        opcionA: "Geralt of Rivia",
        opcionB: "Ezio Auditore",
        opcionC: "Aloy",
        opcionD: "Joel",
        correcta: "a"
    },
    {
        id: 25,
        categoria: "juegos",
        titulo: "¿Cuál es el juego más vendido de todos los tiempos?",
        opcionA: "Minecraft",
        opcionB: "Tetris",
        opcionC: "Grand Theft Auto V",
        opcionD: "Super Mario Bros.",
        correcta: "b"
    },
    {
        id: 26,
        categoria: "peliculas",
        titulo: "¿Cuál es el nombre del león protagonista en 'El Rey León'?",
        opcionA: "Simba",
        opcionB: "Mufasa",
        opcionC: "Scar",
        opcionD: "Timón",
        correcta: "a"
    },
    {
        id: 27,
        categoria: "peliculas",
        titulo: "¿Qué juguete es el protagonista de la película 'Toy Story'?",
        opcionA: "Buzz Lightyear",
        opcionB: "Woody",
        opcionC: "Slinky",
        opcionD: "Mr. Potato Head",
        correcta: "b"
    },
    {
        id: 28,
        categoria: "peliculas",
        titulo: "¿Cuál es el título de la película de Disney en la que una sirena sueña con vivir en la tierra?",
        opcionA: "Cenicienta",
        opcionB: "La Sirenita",
        opcionC: "Blancanieves",
        opcionD: "Mulan",
        correcta: "b"
    },
    {
        id: 29,
        categoria: "peliculas",
        titulo: "¿Quién es el monstruo protagonista en 'Monsters, Inc.'?",
        opcionA: "Sulley",
        opcionB: "Mike Wazowski",
        opcionC: "Randall",
        opcionD: "Boo",
        correcta: "a"
    },
    {
        id: 30,
        categoria: "peliculas",
        titulo: "¿Cuál es el título de la película de Pixar sobre emociones que viven en la mente de una niña?",
        opcionA: "Inside Out",
        opcionB: "Finding Nemo",
        opcionC: "Up",
        opcionD: "Ratatouille",
        correcta: "a"
    }
]




// Seleccionamos los elementos del DOM que se van a manipular
const txtPuntaje = document.querySelector("#puntos"); // Elemento donde se mostrará el puntaje actual
const nombre = document.querySelector("#nombre"); // Elemento donde se mostrará el nombre del jugador

// Recuperamos y mostramos el nombre del jugador desde el Local Storage
nombre.innerHTML = localStorage.getItem("nombre"); 

// Inicializamos el índice de la pregunta actual
let numPreguntaActual = 0; 

// Recuperamos el puntaje total si ya existe en el Local Storage, o lo inicializamos en 0
let puntajeTotal = 0;
if (!localStorage.getItem("puntaje-total")) { 
    // Si no hay puntaje almacenado, inicializamos en 0
    puntajeTotal = 0;
    txtPuntaje.innerHTML = puntajeTotal;
} else { 
    // Si existe, lo convertimos a número y lo mostramos
    puntajeTotal = parseInt(localStorage.getItem("puntaje-total"));
    txtPuntaje.innerHTML = puntajeTotal;
}

// Filtramos las preguntas según la categoría seleccionada almacenada en el Local Storage
const categoriaActual = localStorage.getItem("categoria-actual"); // Recuperamos la categoría actual
const preguntasCategoria = preguntas.filter(pregunta => pregunta.categoria === categoriaActual); // Filtramos las preguntas por categoría

// Función para cargar la siguiente pregunta
function cargarSiguientePregunta(num) {
    // Seleccionamos los elementos donde se mostrará la información de la pregunta
    const numPregunta = document.querySelector("#num-pregunta"); // Elemento para el número de la pregunta
    const txtPregunta = document.querySelector("#txt-pregunta"); // Elemento para el texto de la pregunta
    const opcionA = document.querySelector("#a"); // Botón para la opción A
    const opcionB = document.querySelector("#b"); // Botón para la opción B
    const opcionC = document.querySelector("#c"); // Botón para la opción C
    const opcionD = document.querySelector("#d"); // Botón para la opción D

    // Actualizamos los contenidos de la pregunta y las opciones
    numPregunta.innerHTML = num + 1; // Mostramos el número de la pregunta
    txtPregunta.innerHTML = preguntasCategoria[num].titulo; // Mostramos el texto de la pregunta
    opcionA.innerHTML = preguntasCategoria[num].opcionA; // Mostramos la opción A
    opcionB.innerHTML = preguntasCategoria[num].opcionB; // Mostramos la opción B
    opcionC.innerHTML = preguntasCategoria[num].opcionC; // Mostramos la opción C
    opcionD.innerHTML = preguntasCategoria[num].opcionD; // Mostramos la opción D

    // Reiniciamos los botones de respuesta eliminando eventos y estilos previos
    const botonesRespuesta = document.querySelectorAll(".opcion"); // Seleccionamos todos los botones de opciones
    botonesRespuesta.forEach(opcion => {
        opcion.removeEventListener("click", (e) => {}); // Quitamos cualquier evento previo
        opcion.classList.remove("correcta", "incorrecta", "no-events"); // Eliminamos clases de estado
    });

    // Agregamos un nuevo event listener a los botones de respuesta
    botonesRespuesta.forEach(opcion => {
        opcion.addEventListener("click", agregarEventListenerBoton); // Asignamos el evento para manejar la respuesta
    });

    // Quitamos efectos visuales previos del puntaje
    txtPuntaje.classList.remove("efecto");
}

// Función para manejar el evento de clic en las opciones
function agregarEventListenerBoton(e) {
    console.log(e.currentTarget.id); // Mostramos el ID del botón seleccionado
    console.log(numPreguntaActual); // Mostramos el índice de la pregunta actual
    console.log(preguntas[numPreguntaActual].correcta); // Mostramos la respuesta correcta de la pregunta actual

    // Verificamos si la respuesta seleccionada es correcta
    if (e.currentTarget.id === preguntasCategoria[numPreguntaActual].correcta) {
        e.currentTarget.classList.add("correcta"); // Agregamos la clase "correcta" si la respuesta es correcta
        puntajeTotal += 100; // Incrementamos el puntaje total en 100
        txtPuntaje.innerHTML = puntajeTotal; // Actualizamos el puntaje en la interfaz
        localStorage.setItem("puntaje-total", puntajeTotal); // Guardamos el puntaje actualizado en el Local Storage
        txtPuntaje.classList.add("efecto"); // Agregamos un efecto visual al puntaje
    } else {
        e.currentTarget.classList.add("incorrecta"); // Agregamos la clase "incorrecta" si la respuesta es incorrecta
        const correcta = document.querySelector("#" + preguntasCategoria[numPreguntaActual].correcta); // Buscamos el botón con la respuesta correcta
        correcta.classList.add("correcta"); // Marcamos la respuesta correcta
    }

    // Deshabilitamos los botones de respuesta para que no se puedan seleccionar más
    const botonesRespuesta = document.querySelectorAll(".opcion");
    botonesRespuesta.forEach(opcion => {
        opcion.classList.add("no-events"); // Agregamos la clase "no-events" para deshabilitar
    });
}

// Cargamos la primera pregunta al cargar el script
cargarSiguientePregunta(numPreguntaActual);

// Seleccionamos el botón de "Siguiente" y manejamos el evento de clic
const btnSiguiente = document.querySelector("#siguiente");
btnSiguiente.addEventListener("click", () => {
    numPreguntaActual++; // Incrementamos el índice de la pregunta actual
    if (numPreguntaActual <= 4) { // Si todavía hay preguntas por mostrar
        cargarSiguientePregunta(numPreguntaActual); // Cargamos la siguiente pregunta
    } else {
        // Verificamos cuántas categorías ya se han jugado
        const categoriasJugadasLS = JSON.parse(localStorage.getItem("categorias-jugadas"));
        console.log(categoriasJugadasLS.length); // Mostramos cuántas categorías ya se han jugado
        if (parseInt(categoriasJugadasLS.length) < 6) {
            // Si hay menos de 6 categorías jugadas, redirigimos a la pantalla principal
            location.href = "principal.html";
        } else {
            // Si todas las categorías han sido jugadas, redirigimos a la pantalla final
            location.href = "final.html";
        }
    }
});
