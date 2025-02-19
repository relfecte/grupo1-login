-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-02-2025 a las 22:50:23
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `quizshow`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calificaciones`
--

CREATE TABLE `calificaciones` (
  `calificacion_id` int(11) NOT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `tests_totales` int(11) DEFAULT 0,
  `preguntas_acertadas_totales` int(11) DEFAULT 0,
  `tests_tipo_general` int(11) DEFAULT 0,
  `preguntas_acertadas_tipo_general` int(11) DEFAULT 0,
  `tests_tipo_musica` int(11) DEFAULT 0,
  `preguntas_acertadas_tipo_musica` int(11) DEFAULT 0,
  `tests_tipo_deportes` int(11) DEFAULT 0,
  `preguntas_acertadas_tipo_deportes` int(11) DEFAULT 0,
  `tests_tipo_programacion` int(11) DEFAULT 0,
  `preguntas_acertadas_tipo_programacion` int(11) DEFAULT 0,
  `tests_tipo_juegos` int(11) DEFAULT 0,
  `preguntas_acertadas_tipo_juegos` int(11) DEFAULT 0,
  `tests_tipo_peliculas` int(11) DEFAULT 0,
  `preguntas_acertadas_tipo_peliculas` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `calificaciones`
--

INSERT INTO `calificaciones` (`calificacion_id`, `usuario_id`, `tests_totales`, `preguntas_acertadas_totales`, `tests_tipo_general`, `preguntas_acertadas_tipo_general`, `tests_tipo_musica`, `preguntas_acertadas_tipo_musica`, `tests_tipo_deportes`, `preguntas_acertadas_tipo_deportes`, `tests_tipo_programacion`, `preguntas_acertadas_tipo_programacion`, `tests_tipo_juegos`, `preguntas_acertadas_tipo_juegos`, `tests_tipo_peliculas`, `preguntas_acertadas_tipo_peliculas`) VALUES
(1, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(2, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(9, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(10, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(11, 16, 37, 109, 33, 97, 2, 7, 1, 5, 0, 0, 0, 0, 2, 0),
(12, 17, 3, 30, 0, 0, 3, 30, 0, 0, 0, 0, 0, 0, 0, 0),
(13, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(14, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(15, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(16, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(17, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(18, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(19, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(20, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(21, 26, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(22, 27, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(23, 28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(24, 29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(25, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(26, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(32, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preguntas`
--

CREATE TABLE `preguntas` (
  `pregunta_id` int(11) NOT NULL,
  `categoria` varchar(50) DEFAULT NULL,
  `pregunta` varchar(255) DEFAULT NULL,
  `opcion_correcta` varchar(255) DEFAULT NULL,
  `opcion2` varchar(255) DEFAULT NULL,
  `opcion3` varchar(255) DEFAULT NULL,
  `opcion4` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `preguntas`
--

INSERT INTO `preguntas` (`pregunta_id`, `categoria`, `pregunta`, `opcion_correcta`, `opcion2`, `opcion3`, `opcion4`) VALUES
(1, 'general', '¿Cuál es el planeta más grande de nuestro sistema solar?', 'Jupiter', 'Tierra', 'Marte', 'Saturno'),
(2, 'general', '¿Quién escribió \"Cien años de soledad\"?', 'Gabriel García Márquez', 'Julio Cortázar', 'Isabel Allende', 'Mario Vargas Llosa'),
(3, 'general', '¿Cuál es el río más largo del mundo?', 'Amazonas', 'Nilo', 'Paraná', 'Misisipi'),
(4, 'general', '¿Cuál es el componente principal del aire que respiramos?', 'Nitrogeno', 'Oxígeno', 'Dióxido de carbono', 'Hidrógeno'),
(5, 'general', '¿En qué año comenzó la Primera Guerra Mundial?', '1914', '1905', '1923', '1939'),
(6, 'general', '¿Quién pintó la Mona Lisa?', 'Leonardo da Vinci', 'Vincent van Gogh', 'Pablo Picasso', 'Claude Monet'),
(7, 'general', '¿Cuál es el río más largo del mundo?', 'Nilo', 'Amazonas', 'Yangtsé', 'Misisipi'),
(8, 'general', '¿Cuál es la capital de Japón?', 'Tokio', 'Pekín', 'Seúl', 'Bangkok'),
(9, 'general', '¿Qué metal es líquido a temperatura ambiente?', 'Mercurio', 'Oro', 'Plomo', 'Plata'),
(10, 'general', '¿En qué continente se encuentra Egipto?', 'África', 'Asia', 'Europa', 'Oceanía'),
(11, 'general', '¿Quién escribió \"Don Quijote de la Mancha\"?', 'Miguel de Cervantes', 'Gabriel García Márquez', 'Lope de Vega', 'Federico García Lorca'),
(12, 'general', '¿Cuál es el océano más grande del mundo?', 'Pacífico', 'Atlántico', 'Índico', 'Ártico'),
(13, 'general', '¿En qué año llegó el hombre a la Luna?', '1969', '1965', '1972', '1963'),
(14, 'general', '¿Qué país es famoso por el tango?', 'Argentina', 'Brasil', 'España', 'México'),
(15, 'general', '¿Cuál es el idioma más hablado del mundo?', 'Chino mandarín', 'Inglés', 'Español', 'Hindú'),
(16, 'general', '¿Qué instrumento tocaba Ludwig van Beethoven?', 'Piano', 'Violín', 'Flauta', 'Guitarra'),
(17, 'general', '¿Cuál es el país más grande del mundo por área?', 'Rusia', 'Canadá', 'China', 'Estados Unidos'),
(18, 'general', '¿Qué inventó Alexander Graham Bell?', 'Teléfono', 'Radio', 'Televisión', 'Cámara'),
(19, 'general', '¿Cuál es el animal terrestre más rápido?', 'Guepardo', 'León', 'Tigre', 'Caballo'),
(20, 'general', '¿Cuántos días tiene un año bisiesto?', '366', '364', '365', '368'),
(21, 'general', '¿Cuál es la moneda oficial de Japón?', 'Yen', 'Won', 'Dólar', 'Euro'),
(22, 'general', '¿Qué elemento químico tiene el símbolo \"O\"?', 'Oxígeno', 'Oro', 'Ósmio', 'Oxalato'),
(23, 'general', '¿Cuál es el nombre del héroe mitológico griego que venció a Medusa?', 'Perseo', 'Aquiles', 'Hércules', 'Teseo'),
(24, 'general', '¿Qué país tiene la torre Eiffel?', 'Francia', 'Italia', 'España', 'Alemania'),
(25, 'general', '¿Quién es conocido como el padre de la teoría de la relatividad?', 'Albert Einstein', 'Isaac Newton', 'Galileo Galilei', 'Niels Bohr'),
(26, 'general', '¿Qué ciudad es conocida como \"La Gran Manzana\"?', 'Nueva York', 'Los Ángeles', 'Chicago', 'San Francisco'),
(27, 'general', '¿Cuál es el segundo planeta más cercano al sol?', 'Venus', 'Marte', 'Mercurio', 'Tierra'),
(28, 'general', '¿En qué país se encuentra la Gran Muralla?', 'China', 'Corea del Sur', 'Japón', 'India'),
(29, 'general', '¿Qué vitamina es producida por el cuerpo al exponerse al sol?', 'Vitamina D', 'Vitamina C', 'Vitamina A', 'Vitamina B12'),
(30, 'general', '¿Quién es conocido como el \"Rey del Rock and Roll\"?', 'Elvis Presley', 'Chuck Berry', 'Little Richard', 'Buddy Holly'),
(31, 'musica', '¿Quién es conocido como el primer Rey del Pop?', 'Michael Jackson', 'Elvis Presley', 'Madonna', 'Prince'),
(32, 'musica', '¿Cuál es el género musical más popular en todo el mundo?', 'Pop', 'Rock', 'Electrónica', 'Rap'),
(33, 'musica', '¿En qué década surgió el movimiento punk?', '1970', '1960', '1980', '1990'),
(34, 'musica', '¿Quién es el famoso guitarrista de la banda Queen?', 'Brian May', 'John Lennon', 'Jimi Hendrix', 'Eric Clapton'),
(35, 'musica', '¿Cuál es el instrumento principal en una orquesta sinfónica?', 'Violín', 'Guitarra', 'Piano', 'Flauta'),
(36, 'deportes', '¿En qué deporte se utiliza una pelota de baloncesto?', 'Baloncesto', 'Fútbol', 'Golf', 'Tenis'),
(37, 'deportes', '¿Cuál es el país de origen de la artista del tenis Serena Williams?', 'Estados Unidos', 'Francia', 'España', 'Australia'),
(38, 'deportes', '¿Cuántos jugadores conforman un equipo de fútbol estándar en el campo durante un partido?', '11', '8', '10', '12'),
(39, 'deportes', '¿Quién es considerado el mejor nadador de todos los tiempos?', 'Michael Phelps', 'Usain Bolt', 'Simone Biles', 'Roger Federer'),
(40, 'deportes', '¿En qué deporte se compite por la Copa Davis?', 'Tenis', 'Fútbol', 'Golf', 'Balonmano'),
(41, 'programacion', '¿Cuál de los siguientes lenguajes de programación es de tipado fuerte?', 'C++', 'JavaScript', 'Python', 'Java'),
(42, 'programacion', '¿Qué significa HTML en el contexto de desarrollo web?', 'HyperText Markup Language', 'High-Level Text Management Language', 'HyperTransfer Markup Language', 'High-Level Transfer Management Language'),
(43, 'programacion', '¿Cuál es el propósito principal de CSS en desarrollo web?', 'Estilizar la presentación de las páginas web', 'Manejar la lógica del lado del servidor', 'Gestionar la interactividad del usuario', 'Definir las rutas de la aplicación'),
(44, 'programacion', '¿Qué es un bucle \"for\" en la programación?', 'Una estructura de control de flujo que se repite', 'Un tipo de dato', 'Una función', 'Una estructura condicional'),
(45, 'programacion', '¿Cuál de los siguientes no es un sistema de gestión de bases de datos?', 'Express', 'MySQL', 'MongoDB', 'SQLite'),
(46, 'juegos', '¿Cuál es el fontanero más famoso en el mundo de los videojuegos?', 'Mario', 'Sonic', 'Link', 'Master Chief'),
(47, 'juegos', '¿En qué año se lanzó el juego \"The Legend of Zelda: Ocarina of Time\"?', '1998', '1996', '2000', '2002'),
(48, 'juegos', '¿Cuál es la empresa creadora de la consola Xbox?', 'Microsoft', 'Sony', 'Nintendo', 'Sega'),
(49, 'juegos', '¿Qué videojuego tiene el personaje llamado \"Pikachu\"?', 'Pokémon', 'Mario Bros', 'Super Smash Bros', 'Fortnite'),
(55, 'musica', '¿Cuál es el nombre del primer álbum de los Beatles?', 'Please Please Me', 'Abbey Road', 'Let It Be', 'Revolver'),
(56, 'musica', '¿Qué banda compuso la canción \"Bohemian Rhapsody\"?', 'Queen', 'The Beatles', 'The Rolling Stones', 'Pink Floyd'),
(57, 'musica', '¿Qué instrumento tocaba Louis Armstrong?', 'Trompeta', 'Saxofón', 'Piano', 'Guitarra'),
(58, 'musica', '¿Cuál es el nombre real de Freddie Mercury?', 'Farrokh Bulsara', 'Brian May', 'John Deacon', 'David Bowie'),
(59, 'musica', '¿Quién fue el líder de Nirvana?', 'Kurt Cobain', 'Eddie Vedder', 'Chris Cornell', 'Dave Grohl'),
(60, 'musica', '¿Cuál fue el primer álbum de Taylor Swift?', 'Taylor Swift', 'Fearless', 'Red', '1989'),
(61, 'musica', '¿Qué cantante lanzó el álbum \"Thriller\"?', 'Michael Jackson', 'Madonna', 'Prince', 'Whitney Houston'),
(62, 'musica', '¿Cuál de estos artistas es conocido por tocar la guitarra con los dientes?', 'Jimi Hendrix', 'Eric Clapton', 'Slash', 'Carlos Santana'),
(63, 'musica', '¿Cuál es la canción más escuchada de Spotify en la historia?', 'Blinding Lights', 'Shape of You', 'Rockstar', 'Dance Monkey'),
(64, 'musica', '¿Cuál fue la primera canción en alcanzar mil millones de reproducciones en YouTube?', 'Gangnam Style', 'Despacito', 'See You Again', 'Baby Shark'),
(65, 'musica', '¿Qué cantante es conocido como \"La Reina del Pop\"?', 'Madonna', 'Lady Gaga', 'Britney Spears', 'Beyoncé'),
(66, 'musica', '¿Qué banda creó la canción \"Hotel California\"?', 'Eagles', 'Fleetwood Mac', 'The Doors', 'Lynyrd Skynyrd'),
(67, 'musica', '¿Qué artista escribió \"Shape of You\"?', 'Ed Sheeran', 'Justin Bieber', 'Shawn Mendes', 'Bruno Mars'),
(68, 'musica', '¿De qué país es la banda de rock AC/DC?', 'Australia', 'Estados Unidos', 'Reino Unido', 'Canadá'),
(69, 'musica', '¿Qué festival de música fue emblemático en 1969?', 'Woodstock', 'Glastonbury', 'Coachella', 'Lollapalooza'),
(70, 'musica', '¿Quién fue el vocalista de The Rolling Stones?', 'Mick Jagger', 'Keith Richards', 'Paul McCartney', 'Roger Waters'),
(71, 'musica', '¿Qué significa el nombre de la banda U2?', 'Un avión espía', 'Una calle de Dublín', 'Un código militar', 'Un experimento musical'),
(72, 'musica', '¿Quién fue el guitarrista principal de Led Zeppelin?', 'Jimmy Page', 'Eric Clapton', 'David Gilmour', 'Jeff Beck'),
(73, 'musica', '¿Qué género musical se originó en Nueva Orleans a finales del siglo XIX?', 'Jazz', 'Blues', 'Rock and Roll', 'Reggae'),
(74, 'musica', '¿En qué año se lanzó el álbum \"Dark Side of the Moon\" de Pink Floyd?', '1973', '1969', '1975', '1980'),
(75, 'musica', '¿Qué banda popularizó la canción \"Smells Like Teen Spirit\"?', 'Nirvana', 'Pearl Jam', 'Soundgarden', 'Alice in Chains'),
(76, 'musica', '¿Quién compuso \"La Quinta Sinfonía\"?', 'Beethoven', 'Mozart', 'Bach', 'Tchaikovsky'),
(77, 'musica', '¿Qué banda lanzó el álbum \"Back in Black\"?', 'AC/DC', 'Metallica', 'Guns N Roses', 'Aerosmith'),
(78, 'musica', '¿Quién es el cantante de \"Uptown Funk\"?', 'Bruno Mars', 'Justin Timberlake', 'The Weeknd', 'Pharrell Williams'),
(79, 'deportes', '¿Quién es el máximo goleador histórico de la selección de fútbol de Brasil?', 'Pele', 'Ronaldo', 'Romario', 'Neymar'),
(80, 'deportes', '¿En qué año se celebraron los primeros Juegos Olímpicos modernos?', '1896', '1900', '1880', '1924'),
(81, 'deportes', '¿Qué país ganó la Copa del Mundo de fútbol en 2014?', 'Alemania', 'Brasil', 'Argentina', 'Francia'),
(82, 'deportes', '¿Quién es conocido como \"La Pulga\" en el fútbol?', 'Lionel Messi', 'Cristiano Ronaldo', 'Neymar', 'Luis Suárez'),
(83, 'deportes', '¿En qué ciudad se celebraron los Juegos Olímpicos de 2008?', 'Pekín', 'Londres', 'Atlanta', 'Sídney'),
(84, 'deportes', '¿Qué deportista tiene más medallas olímpicas de la historia?', 'Michael Phelps', 'Usain Bolt', 'Larisa Latynina', 'Mark Spitz'),
(85, 'deportes', '¿Cuántos jugadores hay en un equipo de baloncesto?', '5', '7', '6', '4'),
(86, 'deportes', '¿En qué deporte destaca Serena Williams?', 'Tenis', 'Atletismo', 'Fútbol', 'Natación'),
(87, 'deportes', '¿Qué país ha ganado más Copas del Mundo de fútbol?', 'Brasil', 'Alemania', 'Italia', 'Argentina'),
(88, 'deportes', '¿Qué equipo de fútbol ha ganado más Champions League?', 'Real Madrid', 'Barcelona', 'Bayern Munich', 'AC Milan'),
(89, 'deportes', '¿Cuántos puntos vale un touchdown en el fútbol americano?', '6', '3', '7', '1'),
(90, 'deportes', '¿Quién es el jugador de baloncesto conocido como \"King James\"?', 'LeBron James', 'Kobe Bryant', 'Michael Jordan', 'Shaquille O\'Neal'),
(91, 'deportes', '¿En qué deporte se utiliza el término \"crossover\"?', 'Baloncesto', 'Fútbol', 'Tenis', 'Béisbol'),
(92, 'deportes', '¿Qué atleta jamaicano tiene el récord mundial en los 100 metros planos?', 'Usain Bolt', 'Carl Lewis', 'Tyson Gay', 'Asafa Powell'),
(93, 'deportes', '¿Quién ganó el Tour de Francia en 2019?', 'Egan Bernal', 'Chris Froome', 'Vincenzo Nibali', 'Bradley Wiggins'),
(94, 'deportes', '¿Cuál es el nombre del torneo de tenis que se juega en Wimbledon?', 'The Championships', 'Roland Garros', 'US Open', 'Australian Open'),
(95, 'deportes', '¿Qué país organiza el Gran Premio de Fórmula 1 en Mónaco?', 'Mónaco', 'Francia', 'Italia', 'España'),
(96, 'deportes', '¿En qué deporte se utiliza la pelota amarilla y una raqueta?', 'Tenis', 'Ping pong', 'Bádminton', 'Squash'),
(97, 'deportes', '¿Qué equipo ganó la Eurocopa 2016?', 'Portugal', 'Francia', 'España', 'Italia'),
(98, 'deportes', '¿Cuál es el máximo goleador histórico de la NBA?', 'Kareem Abdul-Jabbar', 'LeBron James', 'Michael Jordan', 'Kobe Bryant'),
(99, 'deportes', '¿En qué año se celebraron los Juegos Olímpicos en Río de Janeiro?', '2016', '2012', '2008', '2004'),
(100, 'deportes', '¿Qué equipo de fútbol tiene el apodo \"Los Red Devils\"?', 'Manchester United', 'Liverpool', 'Chelsea', 'Arsenal'),
(101, 'deportes', '¿Qué deporte se juega en el Tour de Francia?', 'Ciclismo', 'Fútbol', 'Rugby', 'Tenis'),
(102, 'deportes', '¿Cuántos jugadores hay en un equipo de rugby en el campo?', '15', '11', '7', '9'),
(103, 'deportes', '¿Quién fue el primer jugador en alcanzar los 1,000 goles en la historia del fútbol?', 'Pele', 'Cristiano Ronaldo', 'Lionel Messi', 'Romario'),
(104, 'deportes', '¿En qué año comenzó la historia de la Fórmula 1?', '1950', '1960', '1935', '1945'),
(105, 'deportes', '¿Qué deporte se juega en el Madison Square Garden de Nueva York?', 'Baloncesto', 'Fútbol', 'Hockey', 'Béisbol'),
(106, 'deportes', '¿Qué tenista tiene más títulos de Grand Slam?', 'Rafael Nadal', 'Roger Federer', 'Novak Djokovic', 'Pete Sampras'),
(107, 'programacion', '¿Cuál es el lenguaje de programación más utilizado en el desarrollo web?', 'JavaScript', 'Python', 'Java', 'C#'),
(108, 'programacion', '¿Qué hace el comando \"console.log()\" en JavaScript?', 'Imprime un mensaje en la consola', 'Crea una variable', 'Define una función', 'Modifica el DOM'),
(109, 'programacion', '¿Qué significa el acrónimo HTML?', 'HyperText Markup Language', 'High Text Machine Language', 'HyperTool Marking Language', 'Home Tool Markup Language'),
(110, 'programacion', '¿Qué tipo de dato representa un número con decimales en JavaScript?', 'float', 'int', 'double', 'decimal'),
(111, 'programacion', '¿Cuál es el propósito de la función \"push()\" en JavaScript?', 'Añadir un elemento al final de un array', 'Eliminar el último elemento de un array', 'Crear un nuevo array', 'Acceder a un elemento de un array'),
(112, 'programacion', '¿Qué significa \"API\"?', 'Application Programming Interface', 'Active Program Integration', 'Advanced Programming Interface', 'Application Processing Input'),
(113, 'programacion', '¿Qué método se utiliza en JavaScript para convertir una cadena en minúsculas?', 'toLowerCase()', 'toLower()', 'lower()', 'convertToLower()'),
(114, 'programacion', '¿Cuál de los siguientes es un lenguaje de programación de bajo nivel?', 'Assembly', 'Python', 'Ruby', 'Java'),
(115, 'programacion', '¿Qué hace la función \"alert()\" en JavaScript?', 'Muestra un cuadro de diálogo con un mensaje', 'Envía un mensaje al servidor', 'Modifica el contenido HTML', 'Crea un nuevo elemento en la página'),
(116, 'programacion', '¿En qué año fue creado el lenguaje de programación Java?', '1995', '2000', '1989', '1998'),
(117, 'programacion', '¿Qué significa el acrónimo CSS?', 'Cascading Style Sheets', 'Cyclic Style Sheets', 'Customizable Style Sheets', 'Computer Style Sheets'),
(118, 'programacion', '¿Qué operador se utiliza en JavaScript para comparar dos valores sin tipo?', '==', '===', '!=', '!=='),
(119, 'programacion', '¿Qué significa \"DOM\" en el contexto de desarrollo web?', 'Document Object Model', 'Document Online Manager', 'Data Operations Method', 'Domain Object Management'),
(120, 'programacion', '¿Cuál es el uso principal de la palabra clave \"this\" en JavaScript?', 'Hace referencia al objeto actual', 'Crea una nueva función', 'Define una nueva clase', 'Cambia el valor de una variable global'),
(121, 'programacion', '¿Qué operador se utiliza para concatenar cadenas de texto en JavaScript?', '+', '-', '*', '/'),
(122, 'programacion', '¿Cómo se declara una variable constante en JavaScript?', 'const', 'let', 'var', 'define'),
(123, 'programacion', '¿Cuál es el método en JavaScript para convertir un string en un número?', 'parseInt()', 'toString()', 'convertToNumber()', 'number()'),
(124, 'programacion', '¿Qué es un \"array\" en programación?', 'Una colección de datos', 'Una variable de tipo entero', 'Una función de programación', 'Una estructura condicional'),
(125, 'programacion', '¿Qué comando se usa en CSS para cambiar el color de fondo de una página?', 'background-color', 'color', 'bg-color', 'background'),
(126, 'programacion', '¿Cuál es la sintaxis correcta para crear una función en JavaScript?', 'function nombre() {}', 'def nombre() {}', 'create nombre() {}', 'function = nombre() {}'),
(127, 'programacion', '¿Qué es el \"Framework\" React?', 'Una biblioteca de JavaScript para crear interfaces de usuario', 'Un lenguaje de programación', 'Una base de datos', 'Un editor de texto'),
(128, 'programacion', '¿Qué es un \"loop\" en programación?', 'Una estructura que repite un bloque de código', 'Un tipo de variable', 'Una función que retorna valores', 'Una clase de objeto'),
(129, 'programacion', '¿Qué hace el comando \"return\" en una función de JavaScript?', 'Devuelve un valor de la función', 'Llama a la función otra vez', 'Detiene la ejecución de la función', 'Modifica el valor de una variable global'),
(130, 'programacion', '¿Qué es Git?', 'Un sistema de control de versiones', 'Un editor de código', 'Un lenguaje de programación', 'Un framework'),
(131, 'programacion', '¿Cómo se llaman los archivos que contienen código JavaScript?', '.js', '.html', '.css', '.json'),
(132, 'programacion', '¿Qué es la \"herencia\" en programación orientada a objetos?', 'La capacidad de una clase para heredar propiedades de otra clase', 'La creación de funciones dentro de una clase', 'La modificación de variables globales', 'La creación de objetos'),
(133, 'programacion', '¿Qué hace la función \"setTimeout()\" en JavaScript?', 'Ejecuta una función después de un cierto tiempo', 'Define una variable', 'Modifica el DOM', 'Detiene el proceso de ejecución'),
(134, 'programacion', '¿Cuál es el propósito de \"console.warn()\" en JavaScript?', 'Mostrar una advertencia en la consola', 'Mostrar un error en la consola', 'Loggear información en la consola', 'Mostrar una sugerencia en la consola'),
(135, 'programacion', '¿Qué es \"Node.js\"?', 'Un entorno de ejecución para JavaScript en el servidor', 'Un lenguaje de programación', 'Un framework de front-end', 'Una base de datos'),
(136, 'programacion', '¿Qué es la \"promesa\" (Promise) en JavaScript?', 'Una operación asincrónica que eventualmente tendrá un resultado', 'Una variable global', 'Una función de comparación', 'Una estructura condicional'),
(137, 'programacion', '¿Qué significa \"SQL\"?', 'Structured Query Language', 'Simple Query Language', 'Standard Query Language', 'Secure Query Language'),
(138, 'juegos', '¿Cuál es el personaje principal de la saga \"The Legend of Zelda\"?', 'Link', 'Zelda', 'Ganondorf', 'Ganon'),
(139, 'juegos', '¿En qué juego aparece el personaje \"Pikachu\"?', 'Pokémon', 'Super Mario', 'Zelda', 'Minecraft'),
(140, 'juegos', '¿Cuál es el objetivo principal del juego \"Minecraft\"?', 'Sobrevivir y construir', 'Vencer al villano', 'Hacer misiones', 'Recolectar monedas'),
(141, 'juegos', '¿En qué videojuego se lucha contra los \"Titanes\"?', 'Attack on Titan', 'Resident Evil', 'God of War', 'Halo'),
(142, 'juegos', '¿Qué nombre recibe el personaje principal de \"Super Mario\"?', 'Mario', 'Luigi', 'Peach', 'Toad'),
(143, 'juegos', '¿Qué empresa desarrolló el juego \"Fortnite\"?', 'Epic Games', 'Nintendo', 'Sony', 'Activision'),
(144, 'juegos', '¿En qué videojuego aparece el personaje \"Kratos\"?', 'God of War', 'Halo', 'The Last of Us', 'Uncharted'),
(145, 'juegos', '¿En qué juego puedes encontrar el mapa \"Battle Royale\"?', 'Fortnite', 'Call of Duty', 'League of Legends', 'Counter-Strike'),
(146, 'juegos', '¿Cuál es el objetivo principal del juego \"Tetris\"?', 'Acompletar líneas con bloques', 'Construir una torre', 'Luchar contra enemigos', 'Recolectar recursos'),
(147, 'juegos', '¿En qué juego de terror se encuentra la criatura conocida como \"Slender Man\"?', 'Slender: The Eight Pages', 'Resident Evil', 'Amnesia: The Dark Descent', 'Silent Hill'),
(148, 'juegos', '¿Qué nombre recibe la famosa serie de juegos de carreras de Nintendo? ', 'Mario Kart', 'Need for Speed', 'Gran Turismo', 'F1'),
(149, 'juegos', '¿Qué personaje es conocido por decir \"It’s-a me, Mario!\"?', 'Mario', 'Luigi', 'Donkey Kong', 'Yoshi'),
(150, 'juegos', '¿Qué juego tiene un modo en el que los jugadores compiten por sobrevivir en una isla? ', 'PUBG', 'Fortnite', 'Apex Legends', 'Minecraft'),
(151, 'juegos', '¿Quién es el creador del videojuego \"Super Mario Bros\"?', 'Shigeru Miyamoto', 'Yuji Naka', 'Hideo Kojima', 'Naughty Dog'),
(152, 'juegos', '¿En qué juego de la saga \"The Elder Scrolls\" se encuentra la ciudad de \"Whiterun\"?', 'Skyrim', 'Oblivion', 'Morrowind', 'Fallout'),
(153, 'juegos', '¿Qué tipo de juego es \"League of Legends\"?', 'MOBA', 'FPS', 'RPG', 'RTS'),
(154, 'juegos', '¿Cuál es el nombre del protagonista de la saga \"Halo\"?', 'Master Chief', 'Samus Aran', 'Marcus Fenix', 'Kratos'),
(155, 'juegos', '¿Qué juego incluye la famosa frase \"Elige tu propio camino\"?', 'The Witcher 3', 'Mass Effect', 'The Elder Scrolls V: Skyrim', 'Fallout 4'),
(156, 'juegos', '¿En qué videojuego es posible recoger anillos dorados?', 'Sonic the Hedgehog', 'Super Mario Bros', 'Donkey Kong', 'Pac-Man'),
(157, 'juegos', '¿Cuál es el nombre del juego en el que se deben resolver puzzles en una habitación cerrada?', 'Escape Room', 'Portal', 'The Room', 'Myst'),
(158, 'juegos', '¿Qué personaje famoso de videojuegos es conocido por saltar sobre bloques? ', 'Mario', 'Sonic', 'Luigi', 'Samus'),
(159, 'juegos', '¿En qué franquicia se encuentra el personaje \"Zelda\"?', 'The Legend of Zelda', 'Super Mario', 'Final Fantasy', 'Kingdom Hearts'),
(160, 'juegos', '¿Cuál es el nombre del videojuego en el que se debe construir una fortaleza y defenderla? ', 'Fortnite', 'Minecraft', 'Overwatch', 'Call of Duty'),
(161, 'juegos', '¿En qué juego de rol se utiliza el \"V.A.T.S.\" para combatir?', 'Fallout', 'Skyrim', 'Dark Souls', 'Dragon Age'),
(162, 'juegos', '¿En qué juego de aventuras aparece la ciudad de \"Rapture\"?', 'Bioshock', 'Half-Life', 'Doom', 'Far Cry'),
(163, 'juegos', '¿Qué personaje es conocido como \"La Serpiente\" en los juegos de \"Metal Gear\"?', 'Solid Snake', 'Raiden', 'Liquid Snake', 'Big Boss'),
(164, 'juegos', '¿Qué es un \"MOBA\" en los videojuegos?', 'Multiplayer Online Battle Arena', 'Massive Online Battle Arena', 'Multiplayer Online Base Attack', 'Multiple Objective Battle Arena'),
(165, 'juegos', '¿En qué juego se juega con un \"pico\" para recolectar materiales?', 'Minecraft', 'Terraria', 'Fortnite', 'Roblox'),
(166, 'juegos', '¿Cuál es el nombre del personaje principal de \"The Last of Us\"?', 'Joel', 'Ellie', 'Tommy', 'David'),
(167, 'juegos', '¿En qué juego se utiliza la frase \"Apex Legends, aquí vamos!\"?', 'Apex Legends', 'Fortnite', 'Call of Duty', 'Overwatch'),
(168, 'juegos', '¿En qué juego de disparos se juega en equipos de 5 contra 5?', 'Counter-Strike', 'Overwatch', 'Valorant', 'Rainbow Six Siege'),
(169, 'juegos', '¿Qué juego tiene un mapa llamado \"Erangel\"?', 'PUBG', 'Fortnite', 'Apex Legends', 'Call of Duty'),
(170, 'juegos', '¿En qué juego puedes luchar contra criaturas llamadas \"Grimms\"?', 'Hollow Knight', 'Dark Souls', 'Bloodborne', 'Dead Souls'),
(171, 'juegos', '¿En qué juego puedes explorar una ciudad llamada \"Raccoon City\"?', 'Resident Evil', 'Silent Hill', 'Outlast', 'The Evil Within'),
(172, 'juegos', '¿Qué consola de videojuegos fue lanzada por Nintendo en 2017?', 'Nintendo Switch', 'Nintendo Wii', 'PlayStation 4', 'Xbox One'),
(173, 'juegos', '¿Qué personaje es conocido por decir \"¡Me está tocando el corazoncito!\"?', 'Sombra (Overwatch)', 'Tracer (Overwatch)', 'D.Va (Overwatch)', 'Genji (Overwatch)'),
(174, 'juegos', '¿En qué juego se lucha con un \"arma láser\" llamada \"Lightsaber\"?', 'Star Wars: Jedi Fallen Order', 'Minecraft', 'Fortnite', 'Destiny'),
(175, 'juegos', '¿Cuál es el personaje que debe rescatar a la princesa Peach?', 'Mario', 'Luigi', 'Toad', 'Yoshi'),
(176, 'juegos', '¿En qué juego se usan \"V-bucks\"?', 'Fortnite', 'Minecraft', 'PUBG', 'Apex Legends'),
(177, 'juegos', '¿Quién es el protagonista principal de \"Uncharted\"?', 'Nathan Drake', 'Ellie', 'Samus Aran', 'Kratos'),
(178, 'juegos', '¿Cuál es el nombre del videojuego de lucha que incluye personajes de Nintendo?', 'Super Smash Bros.', 'Street Fighter', 'Tekken', 'Mortal Kombat'),
(179, 'juegos', '¿En qué juego de horror se encuentran los \"Lickers\"?', 'Resident Evil', 'Outlast', 'Amnesia', 'Silent Hill'),
(180, 'juegos', '¿Qué personaje de \"Minecraft\" es conocido por su habilidad de volar?', 'El Dragón del End', 'Steve', 'Alex', 'El Wither'),
(181, 'juegos', '¿Qué juego incluye el concepto de \"Zonas de Calor\"?', 'Battlefield 5', 'Fortnite', 'Apex Legends', 'PlayerUnknown Battlegrounds'),
(182, 'juegos', '¿Cuál es el nombre del villano de la serie \"Zelda\"?', 'Ganondorf', 'Ganon', 'Bowser', 'Dr. Eggman'),
(183, 'juegos', '¿Qué tipo de juego es \"Call of Duty\"?', 'FPS', 'RPG', 'MOBA', 'RTS'),
(184, 'juegos', '¿En qué juego se puede encontrar la nave \"Rocinante\"?', 'Star Wars Battlefront', 'No Man’s Sky', 'Elite Dangerous', 'The Expanse'),
(185, 'juegos', '¿Qué nombre tiene la máquina del arcade donde aparece Pac-Man?', 'Pac-Man', 'Space Invaders', 'Asteroids', 'Donkey Kong'),
(186, 'juegos', '¿En qué juego debes recolectar cristales para ganar?', 'Crash Bandicoot', 'Super Mario Bros', 'Rayman', 'Sonic the Hedgehog'),
(187, 'juegos', '¿Quién es el creador del juego \"Minecraft\"?', 'Markus \"Notch\" Persson', 'Shigeru Miyamoto', 'Hideo Kojima', 'John Carmack'),
(188, 'juegos', '¿Qué juego es famoso por el mapa \"Dust 2\"?', 'Counter-Strike', 'Rainbow Six Siege', 'Apex Legends', 'Call of Duty'),
(189, 'juegos', '¿En qué juego aparecen los \"Zerg\"?', 'StarCraft', 'Warcraft', 'Diablo', 'Command and Conquer'),
(190, 'juegos', '¿Qué personaje está presente en \"Super Smash Bros\" y pertenece a la saga de \"Kirby\"?', 'Kirby', 'Pikachu', 'Mario', 'Donkey Kong'),
(191, 'juegos', '¿En qué videojuego se puede encontrar un \"Cubo de Rubik\"?', 'Minecraft', 'Fortnite', 'Sims', 'Roblox'),
(192, 'juegos', '¿Qué género pertenece el juego \"The Witcher 3\"?', 'RPG', 'MOBA', 'FPS', 'Simulador'),
(193, 'programacion', '¿Qué lenguaje de programación es conocido por ser utilizado en aplicaciones web?', 'JavaScript', 'C++', 'Python', 'Swift'),
(194, 'programacion', '¿Qué significa HTML?', 'HyperText Markup Language', 'Hyper Tool Markup Language', 'Home Tool Markup Language', 'HyperText Model Language'),
(195, 'programacion', '¿Qué significa \"IDE\" en programación?', 'Integrated Development Environment', 'Intelligent Development Environment', 'Instant Development Environment', 'Individual Development Environment'),
(196, 'programacion', '¿Qué lenguaje de programación es conocido por ser utilizado en aplicaciones móviles para iOS?', 'Swift', 'Java', 'Python', 'Ruby'),
(197, 'programacion', '¿Qué estructura de datos permite almacenar elementos en una fila?', 'Cola', 'Pila', 'Arreglo', 'Lista enlazada'),
(198, 'programacion', '¿En qué lenguaje está escrito el sistema operativo Linux?', 'C', 'C++', 'Python', 'Java'),
(199, 'programacion', '¿Qué significa CSS?', 'Cascading Style Sheets', 'Creative Style Sheets', 'Coded Style Sheets', 'Computer Style Sheets'),
(200, 'programacion', '¿Qué protocolo se utiliza en las URL para la transmisión de datos de manera segura?', 'HTTPS', 'HTTP', 'FTP', 'SMTP'),
(201, 'programacion', '¿Qué significa \"API\"?', 'Application Programming Interface', 'Application Programming Integration', 'Automated Programming Interface', 'Application Process Input'),
(202, 'programacion', '¿Qué lenguaje de programación es conocido por su simplicidad y legibilidad?', 'Python', 'Java', 'C#', 'Ruby'),
(203, 'programacion', '¿Qué lenguaje de programación es utilizado principalmente en aplicaciones web del lado del servidor?', 'PHP', 'Python', 'Swift', 'JavaScript'),
(204, 'programacion', '¿Qué significa SQL?', 'Structured Query Language', 'Simple Query Language', 'Structured Query List', 'System Query Language'),
(205, 'programacion', '¿Cuál es el propósito de un bucle \"for\" en programación?', 'Repetir un bloque de código', 'Interrumpir un proceso', 'Declarar variables', 'Crear una clase'),
(206, 'programacion', '¿Qué significa \"OOP\" en programación?', 'Object-Oriented Programming', 'Optimized Operational Programming', 'Open Option Programming', 'Object Optimization Process'),
(207, 'programacion', '¿Qué lenguaje de programación es utilizado en el desarrollo de videojuegos en Unity?', 'C#', 'C++', 'Python', 'JavaScript'),
(208, 'programacion', '¿Cuál de las siguientes es una base de datos no relacional?', 'MongoDB', 'MySQL', 'PostgreSQL', 'SQLite'),
(209, 'programacion', '¿Qué significa \"Git\"?', 'Un sistema de control de versiones', 'Un lenguaje de programación', 'Una base de datos', 'Un servidor web'),
(210, 'programacion', '¿Qué función cumple un \"query selector\" en JavaScript?', 'Seleccionar elementos del DOM', 'Crear un evento', 'Modificar una variable', 'Llamar una API'),
(211, 'programacion', '¿Cuál de las siguientes no es un lenguaje de programación?', 'HTML', 'Python', 'C++', 'Java'),
(212, 'programacion', '¿Qué significa \"JSON\"?', 'JavaScript Object Notation', 'Java Object Notation', 'JavaScript Online Notation', 'Joomla Object Notation'),
(213, 'programacion', '¿Qué es un \"Framework\" en programación?', 'Una estructura de trabajo', 'Un servidor', 'Un sistema operativo', 'Un lenguaje de programación'),
(214, 'programacion', '¿Qué es un \"bug\" en programación?', 'Un error en el código', 'Una función útil', 'Una biblioteca de código', 'Un compilador'),
(215, 'programacion', '¿Qué tipo de variable almacena números enteros en programación?', 'Integer', 'Float', 'String', 'Boolean'),
(216, 'programacion', '¿En qué lenguaje fue escrito el navegador Google Chrome?', 'C++', 'Python', 'Java', 'Ruby'),
(217, 'programacion', '¿Qué estructura de control se utiliza para decisiones en programación?', 'If-else', 'For', 'While', 'Switch'),
(218, 'programacion', '¿Qué lenguaje de programación fue creado por James Gosling?', 'Java', 'Python', 'C', 'Ruby'),
(219, 'programacion', '¿Qué es un \"API Rest\"?', 'Un conjunto de funciones para la comunicación entre sistemas', 'Una base de datos', 'Un servidor', 'Un lenguaje de programación'),
(220, 'deportes', '¿Quién tiene el récord mundial de más goles en una Copa del Mundo?', 'Marta', 'Pele', 'Cristiano Ronaldo', 'Miroslav Klose'),
(221, 'deportes', '¿En qué año se celebró el primer Mundial de Fútbol?', '1930', '1928', '1934', '1950'),
(222, 'deportes', '¿En qué deporte se juega el Super Bowl?', 'Fútbol americano', 'Fútbol', 'Básquetbol', 'Béisbol'),
(223, 'deportes', '¿Cuál es el nombre del famoso torneo de tenis que se juega en Londres?', 'Wimbledon', 'Roland Garros', 'US Open', 'Australian Open'),
(224, 'deportes', '¿Cuántos jugadores hay en un equipo de baloncesto?', '5', '7', '9', '10'),
(225, 'deportes', '¿Quién es conocido como el \"Rey del Tenis\"?', 'Roger Federer', 'Rafael Nadal', 'Novak Djokovic', 'Andy Murray'),
(226, 'deportes', '¿Qué selección ganó la Copa Mundial de Fútbol 2018?', 'Francia', 'Brasil', 'Alemania', 'Argentina'),
(227, 'deportes', '¿En qué país se celebró los primeros Juegos Olímpicos modernos?', 'Grecia', 'Francia', 'Inglaterra', 'Italia'),
(228, 'deportes', '¿Qué deportista tiene el récord de más medallas olímpicas?', 'Michael Phelps', 'Usain Bolt', 'Carl Lewis', 'Larisa Latynina'),
(229, 'deportes', '¿Qué deporte se juega con un balón ovalado?', 'Rugby', 'Fútbol americano', 'Fútbol', 'Básquetbol'),
(230, 'deportes', '¿En qué equipo juega Lionel Messi?', 'Paris Saint-Germain', 'Barcelona', 'Juventus', 'Manchester City'),
(231, 'deportes', '¿Cuántos jugadores hay en un equipo de fútbol?', '11', '9', '7', '5'),
(232, 'deportes', '¿Quién ganó el Balón de Oro en 2020?', 'Lionel Messi', 'Cristiano Ronaldo', 'Robert Lewandowski', 'Luka Modrić'),
(233, 'deportes', '¿Cuántos sets se juegan en un partido de tenis masculino en Wimbledon?', '5', '3', '7', '2'),
(234, 'deportes', '¿Quién es el máximo goleador histórico de la selección de Argentina?', 'Lionel Messi', 'Diego Maradona', 'Gabriel Batistuta', 'Carlos Tévez'),
(235, 'deportes', '¿Qué famoso jugador de baloncesto jugó para los Chicago Bulls en la NBA?', 'Michael Jordan', 'LeBron James', 'Kobe Bryant', 'Shaquille O’Neal'),
(236, 'deportes', '¿Qué país es conocido por el deporte del cricket?', 'India', 'Australia', 'Pakistán', 'Sudáfrica'),
(237, 'deportes', '¿En qué ciudad se celebraron los Juegos Olímpicos de 1992?', 'Barcelona', 'Londres', 'Sydney', 'Beijing'),
(238, 'deportes', '¿Quién ganó el Tour de Francia en 2019?', 'Egan Bernal', 'Chris Froome', 'Lance Armstrong', 'Miguel Induráin'),
(239, 'deportes', '¿Quién es el máximo goleador histórico de la NBA?', 'Kareem Abdul-Jabbar', 'LeBron James', 'Michael Jordan', 'Kobe Bryant'),
(240, 'deportes', '¿En qué país se originó el fútbol?', 'Inglaterra', 'Brasil', 'Argentina', 'México'),
(241, 'deportes', '¿Cuántos equipos participan en la Copa del Mundo de Fútbol?', '32', '24', '16', '48'),
(242, 'deportes', '¿Qué futbolista es conocido por su apodo \"CR7\"?', 'Cristiano Ronaldo', 'Neymar', 'Lionel Messi', 'Kylian Mbappé'),
(243, 'deportes', '¿Quién fue el campeón del Mundial de Rugby 2019?', 'Sudáfrica', 'Nueva Zelanda', 'Inglaterra', 'Australia'),
(244, 'deportes', '¿Qué equipo de baloncesto tiene el récord de más títulos de la NBA?', 'Los Angeles Lakers', 'Boston Celtics', 'Golden State Warriors', 'Chicago Bulls'),
(245, 'deportes', '¿Cuántos puntos se necesita para ganar un set en tenis?', '6', '7', '5', '3'),
(246, 'deportes', '¿En qué deporte se utiliza el término \"hat-trick\"?', 'Fútbol', 'Básquetbol', 'Cricket', 'Hockey'),
(247, 'deportes', '¿Quién es el máximo goleador histórico de la selección de Brasil?', 'Pelé', 'Ronaldo', 'Romário', 'Neymar'),
(248, 'musica', '¿Qué banda de rock es conocida por la canción \"Bohemian Rhapsody\"?', 'Queen', 'The Beatles', 'The Rolling Stones', 'Led Zeppelin'),
(249, 'musica', '¿En qué año murió Kurt Cobain, líder de Nirvana?', '1994', '1991', '1995', '1990'),
(250, 'musica', '¿Quién es el famoso \"Rey del Pop\"?', 'Michael Jackson', 'Prince', 'Elvis Presley', 'Freddie Mercury'),
(251, 'musica', '¿Qué género de música se originó en Jamaica?', 'Reggae', 'Rock', 'Jazz', 'Blues'),
(252, 'musica', '¿Quién interpretó la canción \"Like a Rolling Stone\"?', 'Bob Dylan', 'The Beatles', 'The Rolling Stones', 'Elvis Presley'),
(253, 'musica', '¿Qué grupo británico lanzó el álbum \"Abbey Road\"?', 'The Beatles', 'Pink Floyd', 'Led Zeppelin', 'The Who'),
(254, 'musica', '¿Qué instrumento musical toca Jimi Hendrix?', 'Guitarra eléctrica', 'Bajo', 'Piano', 'Batería'),
(255, 'musica', '¿Qué cantante lanzó el álbum \"Lemonade\" en 2016?', 'Beyoncé', 'Rihanna', 'Ariana Grande', 'Lady Gaga'),
(256, 'musica', '¿Qué banda es conocida por la canción \"Stairway to Heaven\"?', 'Led Zeppelin', 'Pink Floyd', 'The Doors', 'Queen'),
(257, 'musica', '¿Qué cantante es conocido como \"El Sol de México\"?', 'Luis Miguel', 'Julio Iglesias', 'José José', 'Carlos Santana'),
(258, 'musica', '¿Quién es el compositor de la famosa ópera \"La Traviata\"?', 'Giuseppe Verdi', 'Wolfgang Amadeus Mozart', 'Ludwig van Beethoven', 'Johann Sebastian Bach'),
(259, 'musica', '¿Qué género musical es conocido por sus improvisaciones y su complejidad armónica?', 'Jazz', 'Rock', 'Pop', 'Reggae'),
(260, 'musica', '¿Qué grupo musical tiene un álbum titulado \"The Dark Side of the Moon\"?', 'Pink Floyd', 'The Rolling Stones', 'The Beatles', 'Led Zeppelin'),
(261, 'musica', '¿Qué cantante británica lanzó el álbum \"Back to Black\"?', 'Amy Winehouse', 'Adele', 'Sade', 'Elton John'),
(262, 'musica', '¿Qué famosa banda de los 80s tiene la canción \"Take On Me\"?', 'A-ha', 'Duran Duran', 'The Cure', 'The Smiths'),
(263, 'musica', '¿Quién compuso la famosa pieza \"El Claro de Luna\"?', 'Ludwig van Beethoven', 'Wolfgang Amadeus Mozart', 'Johann Sebastian Bach', 'Frédéric Chopin'),
(264, 'musica', '¿Quién es conocido como el \"Rey del Reggaetón\"?', 'Daddy Yankee', 'Bad Bunny', 'Don Omar', 'J Balvin'),
(265, 'musica', '¿Qué cantante lanzó la famosa canción \"Someone Like You\"?', 'Adele', 'Celine Dion', 'Whitney Houston', 'Shakira'),
(266, 'musica', '¿Qué banda lanzó la canción \"Smells Like Teen Spirit\"?', 'Nirvana', 'Pearl Jam', 'Soundgarden', 'Alice in Chains'),
(267, 'musica', '¿En qué país nació el grupo musical ABBA?', 'Suecia', 'Noruega', 'Finlandia', 'Dinamarca'),
(268, 'musica', '¿Qué artista ganó el premio Grammy a \"Álbum del Año\" en 2021?', 'Taylor Swift', 'Billie Eilish', 'Ariana Grande', 'Lizzo'),
(269, 'musica', '¿Qué famoso músico es conocido por su interpretación de \"Imagine\"?', 'John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'),
(270, 'musica', '¿Qué género de música está asociado con artistas como Tupac Shakur y Notorious B.I.G.?', 'Hip-Hop', 'Rock', 'Pop', 'Jazz'),
(271, 'musica', '¿Qué famosa cantante lanzó la canción \"Toxic\"?', 'Britney Spears', 'Christina Aguilera', 'Ariana Grande', 'Rihanna'),
(272, 'musica', '¿Qué banda británica lanzó el álbum \"The Joshua Tree\"?', 'U2', 'The Rolling Stones', 'The Beatles', 'Queen'),
(273, 'musica', '¿Qué cantante ganó el concurso \"The Voice\" en 2011?', 'Javier Colon', 'Cassadee Pope', 'Danielle Bradbery', 'Jordan Smith'),
(274, 'general', '¿Cuál es el planeta más grande de nuestro sistema?', 'Júpiter', 'Saturno', 'Marte', 'Tierra'),
(275, 'general', '¿Quién escribió \"Cien años de soledad\"?', 'Gabriel García Márquez', 'Mario Vargas Llosa', 'Julio Cortázar', 'Isabel Allende'),
(276, 'general', '¿Cuál es el río más largo del mundo?', 'Amazonas', 'Nilo', 'Yangtsé', 'Misisipi'),
(277, 'general', '¿Cuál es el componente principal del aire que respiramos?', 'Nitrógeno', 'Oxígeno', 'Dióxido de carbono', 'Hidrógeno'),
(278, 'general', '¿En qué año comenzó la Primera Guerra Mundial?', '1914', '1905', '1939', '1923'),
(279, 'general', '¿Quién pintó la Mona Lisa?', 'Leonardo da Vinci', 'Vincent van Gogh', 'Claude Monet', 'Pablo Picasso'),
(280, 'general', '¿Cuál es la capital de Japón?', 'Tokio', 'Pekín', 'Seúl', 'Bangkok'),
(281, 'general', '¿Cuántos continentes hay en el mundo?', '7', '6', '5', '4'),
(282, 'general', '¿Quién fue el primer presidente de los Estados Unidos?', 'George Washington', 'Abraham Lincoln', 'Thomas Jefferson', 'John Adams'),
(283, 'general', '¿Quién fue el líder de la Revolución Rusa de 1917?', 'Vladimir Lenin', 'Joseph Stalin', 'Mikhail Gorbachev', 'Leon Trotsky'),
(284, 'general', '¿Qué famoso físico desarrolló la teoría de la relatividad?', 'Albert Einstein', 'Isaac Newton', 'Galileo Galilei', 'Nikola Tesla'),
(285, 'general', '¿Cuál es el país con más habitantes en el mundo?', 'China', 'India', 'Estados Unidos', 'Indonesia'),
(286, 'general', '¿En qué país se encuentra el Machu Picchu?', 'Perú', 'Bolivia', 'México', 'Colombia'),
(287, 'general', '¿Qué es la fotosíntesis?', 'El proceso mediante el cual las plantas producen su alimento', 'El proceso de respiración de los animales', 'El proceso de formación de la lluvia', 'El proceso de descomposición de las plantas'),
(288, 'general', '¿Qué continente tiene más países?', 'África', 'Asia', 'Europa', 'América'),
(289, 'general', '¿En qué año llegó el hombre a la Luna?', '1969', '1955', '1971', '1965'),
(290, 'general', '¿Quién fue el primero en escalar el Monte Everest?', 'Edmund Hillary', 'Tenzing Norgay', 'Reinhold Messner', 'Jon Krakauer'),
(291, 'general', '¿Cuántos países forman la Unión Europea?', '27', '30', '25', '23'),
(292, 'general', '¿Qué enfermedad causó la pandemia en 2020?', 'COVID-19', 'Ébola', 'Gripe aviar', 'SARS'),
(293, 'general', '¿Cuál es el idioma más hablado del mundo?', 'Mandarín', 'Inglés', 'Español', 'Hindi'),
(294, 'general', '¿Cuál es el símbolo químico del oro?', 'Au', 'Ag', 'Fe', 'Cu'),
(295, 'general', '¿Quién pintó \"La noche estrellada\"?', 'Vincent van Gogh', 'Claude Monet', 'Pablo Picasso', 'Salvador Dalí'),
(296, 'general', '¿Cuál es el océano más grande del mundo?', 'Pacífico', 'Atlántico', 'Índico', 'Ártico'),
(297, 'general', '¿Cuántos elementos tiene la tabla periódica?', '118', '112', '105', '101'),
(298, 'general', '¿Qué animal es conocido por su habilidad para volar hacia atrás?', 'Colibrí', 'Murciélago', 'Golondrina', 'Pájaro carpintero'),
(299, 'general', '¿Qué autor escribió \"Don Quijote de la Mancha\"?', 'Miguel de Cervantes', 'Gabriel García Márquez', 'Juan Rulfo', 'Pablo Neruda'),
(309, 'general', 'fghjkldfghj', 'sdfghjk', 'sdfghjkl', 'sdfghjkl', 'sdfghjkl');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `usuario_id` int(10) NOT NULL,
  `usuario_nombre` varchar(40) NOT NULL,
  `usuario_apellido` varchar(40) NOT NULL,
  `usuario_usuario` varchar(20) NOT NULL,
  `usuario_clave` varchar(200) NOT NULL,
  `usuario_email` varchar(70) NOT NULL,
  `usuario_admin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`usuario_id`, `usuario_nombre`, `usuario_apellido`, `usuario_usuario`, `usuario_clave`, `usuario_email`, `usuario_admin`) VALUES
(11, 'qwerty', 'qwerty', 'qwerty', '0dd3e512642c97ca3f747f9a76e374fbda73f9292823c0313be9d78add7cdd8f72235af0c553dd26797e78e1854edee0ae002f8aba074b066dfce1af114e32f8', 'qwerty@gmail.com', 1),
(12, 'qwertyqwerty', 'qwertyqwerty', 'qwertyqwerty', 'c8108bc009c772842cbf8437e6acda9c17dcea5523acabca69ae70ec18fd2402ee8b4f62ddb57edce7affe13cc32af785b554ff7bcadb85697a4d386d2dbb932', 'qwertyqwerty@gmail.com', 1),
(14, 'admin', 'admin', 'admin', '8450eca01665516d9aeb5317764902b78495502637c96192c81b1683d32d691a0965cf037feca8b9ed9ee6fc6ab8f27fce8f77c4fd9b4a442a00fc317b8237e6', 'admin@admin.com', 1),
(15, 'Salva', 'Busquets', 'Salva', '671fdf003f669d5d2ca6ab67de793f34c39d17fca43b938817fd43d049aba7dd7d1468ab148a13bf922f82e544f2619beda284dc943318681c32b74b0b3ac313', 'salva@gmail.com', 1),
(16, 'clauclau', 'clauclau', 'clauclau', '7520cad1f7ab396976b3e5bd0b6afc3f78b1424c452c1bf01175ca15545fa6ac9ca31e76b83f3fd6b265656dd152275e809e559ec0f84a9aed4233d8510f35d2', 'clauclau@gmail.com', 0),
(17, 'zxcvbn', 'zxcvbn', 'zxcvbn', 'ccf7d1cdca9a1564e1a20945b54406d65c5c120cef2d4085b1db9cd71d5b60e2cc7401e1cb7d836011781cc0d01484c04fada70d8b57ef313c0755d27af1a8a7', 'zxcvbn@gmail.com', 0),
(18, 'Oscar', 'Oscar', 'Oscar', '69b8ad55ad91f33f76bb341c90b274d87c0c9f0240028cac06f1ca5f23c6287b60208ca95d014b3e8773cc5dc0dde0b64516b2ddf1e84147a1c16bc7b82adf49', 'oscar@gmail.com', 0),
(19, 'Osc', 'Osc', 'Osc', 'f8c52d795dfd360af14747ed01ff2ad4fe2f6b8b29fdb5e0653b3144c9798fe344c58f115185bd3af7b11b8541cc32dba89b77428822cd1ee2fc1b60157fa5ba', 'osc1@gmail.com', 0),
(20, 'amanda', 'amanda', 'amanda', 'd30eaab963aa752d504c2ba4feaae08724d74ee9dcbb9866ee0592c7c6228b433580a70a96c388c6412838da97ebd1d7d005e264f12a0342201af99cddf206b9', 'amanda@gmail.com', 0),
(21, 'pepe', 'pepe', 'pepe', '0941d00d1380e5f11e256afafea335fc4e63ebfb63b88e1dbce429df317192391dc98687a7eb1d822c035c7624d8ba0e0ad38cc5f6f1821b5582c437b7e5a30c', 'pepe@gmail.com', 0),
(22, 'josep', 'josep', 'josep', '4fa06cd8521f524ea02edf60e1f74eb4584a2d1bed93b96eee75daf4cb5d0804c7661f64f5e1ffc8ce0c74af7fd5a45d8b81b7cdeb6e663ff55a5346bfccfb19', 'josep@gmail.com', 0),
(23, 'asdfgasdfg', 'asdfgasdfg', 'asdfgasdfg', 'e7a0a1ead4c2077947e2f2adae8b015817576227c242e2d3bbb91d18ac1c032d70b5fe88cd0dde2161ab03919efece21a5e7883acc4715926d3aa3ae4d011bf8', 'asdfgasdfg@gmail.com', 0),
(24, 'qazqaz', 'qazqaz', 'qazqaz', '20b84ecaf310affa80540df04fc69d09223e932c6c092f7d63113c7f22d133347ccfe9ffad04c21a8d8c0cae52adfc4d10f27b3d0649f788f48c03e3723afbee', 'qazqaz@gmail.com', 0),
(25, 'wsxwsx', 'wsxwsx', 'wsxwsx', 'e40131c504caa577fe60753727e76f9e454ce1674e8afa5a12aa5612062877ca30bb24b988358d78dffec7b439b5415cd05b07df7daedb41a2b412ddc7835bb9', 'wsxwsx@gmail.com', 0),
(26, 'edcedc', 'edcedc', 'edcedc', '2da6c3f6b4f3bb0b69d08bb681d5a11102b53066c920f6bec9c05cbe1629167e88299186200db0b96816974fc92227a3c3704555b2228045b0fa9d3e928f1e35', 'edcedc@gmail.com', 0),
(27, 'tgbtgb', 'tgbtgb', 'tgbtgb', 'd10f73125e479154352e5c4844d8bbe5128540a47ade899386e8928639ac3ad2af2e493a49e8c5919b70688c7500004650fcfe5af054b55a010d3c25fe371ee5', 'tgbtgb@gmail.com', 0),
(28, 'ujmujm', 'ujmujm', 'ujmujm', '59e3864dfeaa54b04d6f34f8109c297ca72b8b22f4cdd4f69ee91ceb565289f58a2043fb2350273305b5743a538727555c0d3f4548280d40318bc263935e67fa', 'ujmujm@gmail.com', 0),
(29, 'pll', 'pll', 'pll', 'd361f82153f6cd3251a272e5133edc5d88243ca1c6de017574051a60b1f93118dba3f88898d4a0ab48fce6302b02f01aed1961899e27e36c1bab5827d2469b5a', 'pll@gmail.com', 0),
(30, 'qwas', 'qwas', 'qwas', '31e15c48cd7dd1224a8221e80a41d4ed28a6e2cf600bc83776dc378eeecc6ae71c3b1561b55dc4af91a71393e768ba3daebe250f1497c87bc23ddc8dc862f461', 'qwas@gmail.com', 1),
(31, 'aszxc', 'aszxc', 'aszxc', '97566b9f4593708bfe6fb34e062c40bb6f9ddc19ff698361e7b576f712b6500bf060c4c313c149faae6e6a7f9104bea838c26479ef900bdee66a26971fa90837', 'aszxc@gamil.com', 1),
(34, 'eric', 'capde', 'eric', '0f81a727b4f34041863af773bd92735e294cf7efb6a8f4d4ce0058e5de84ef9b23bbdd84847a5583e7d6f0efd23444017227f9dacd42244045235d9aca913ff5', 'erci@gmail.com', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `calificaciones`
--
ALTER TABLE `calificaciones`
  ADD PRIMARY KEY (`calificacion_id`),
  ADD KEY `fk_usuario_id` (`usuario_id`);

--
-- Indices de la tabla `preguntas`
--
ALTER TABLE `preguntas`
  ADD PRIMARY KEY (`pregunta_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`usuario_id`),
  ADD UNIQUE KEY `usuario_usuario` (`usuario_usuario`),
  ADD UNIQUE KEY `usuario_email` (`usuario_email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `calificaciones`
--
ALTER TABLE `calificaciones`
  MODIFY `calificacion_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT de la tabla `preguntas`
--
ALTER TABLE `preguntas`
  MODIFY `pregunta_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=311;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `usuario_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `calificaciones`
--
ALTER TABLE `calificaciones`
  ADD CONSTRAINT `fk_usuario_id` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`usuario_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `usuario_id` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`usuario_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
