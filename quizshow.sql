-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 12, 2025 at 01:26 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `quizshow`
--

-- --------------------------------------------------------

--
-- Table structure for table `calificaciones`
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
-- Dumping data for table `calificaciones`
--

INSERT INTO `calificaciones` (`calificacion_id`, `usuario_id`, `tests_totales`, `preguntas_acertadas_totales`, `tests_tipo_general`, `preguntas_acertadas_tipo_general`, `tests_tipo_musica`, `preguntas_acertadas_tipo_musica`, `tests_tipo_deportes`, `preguntas_acertadas_tipo_deportes`, `tests_tipo_programacion`, `preguntas_acertadas_tipo_programacion`, `tests_tipo_juegos`, `preguntas_acertadas_tipo_juegos`, `tests_tipo_peliculas`, `preguntas_acertadas_tipo_peliculas`) VALUES
(1, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(2, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(9, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(10, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(11, 16, 23, 66, 22, 61, 0, 0, 1, 5, 0, 0, 0, 0, 1, 0),
(12, 17, 3, 30, 0, 0, 3, 30, 0, 0, 0, 0, 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `preguntas`
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
-- Dumping data for table `preguntas`
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
(49, 'juegos', '¿Qué videojuego tiene el personaje llamado \"Pikachu\"?', 'Pokémon', 'Mario Bros', 'Super Smash Bros', 'Fortnite');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
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
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`usuario_id`, `usuario_nombre`, `usuario_apellido`, `usuario_usuario`, `usuario_clave`, `usuario_email`, `usuario_admin`) VALUES
(11, 'qwerty', 'qwerty', 'qwerty', '0dd3e512642c97ca3f747f9a76e374fbda73f9292823c0313be9d78add7cdd8f72235af0c553dd26797e78e1854edee0ae002f8aba074b066dfce1af114e32f8', 'qwerty@gmail.com', 1),
(12, 'qwertyqwerty', 'qwertyqwerty', 'qwertyqwerty', 'c8108bc009c772842cbf8437e6acda9c17dcea5523acabca69ae70ec18fd2402ee8b4f62ddb57edce7affe13cc32af785b554ff7bcadb85697a4d386d2dbb932', 'qwertyqwerty@gmail.com', 1),
(14, 'admin', 'admin', 'admin', '8450eca01665516d9aeb5317764902b78495502637c96192c81b1683d32d691a0965cf037feca8b9ed9ee6fc6ab8f27fce8f77c4fd9b4a442a00fc317b8237e6', 'admin@admin.com', 1),
(15, 'Salva', 'Busquets', 'Salva', '671fdf003f669d5d2ca6ab67de793f34c39d17fca43b938817fd43d049aba7dd7d1468ab148a13bf922f82e544f2619beda284dc943318681c32b74b0b3ac313', 'salva@gmail.com', 1),
(16, 'clauclau', 'clauclau', 'clauclau', '7520cad1f7ab396976b3e5bd0b6afc3f78b1424c452c1bf01175ca15545fa6ac9ca31e76b83f3fd6b265656dd152275e809e559ec0f84a9aed4233d8510f35d2', 'clauclau@gmail.com', 0),
(17, 'zxcvbn', 'zxcvbn', 'zxcvbn', 'ccf7d1cdca9a1564e1a20945b54406d65c5c120cef2d4085b1db9cd71d5b60e2cc7401e1cb7d836011781cc0d01484c04fada70d8b57ef313c0755d27af1a8a7', 'zxcvbn@gmail.com', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `calificaciones`
--
ALTER TABLE `calificaciones`
  ADD PRIMARY KEY (`calificacion_id`),
  ADD KEY `fk_usuario` (`usuario_id`);

--
-- Indexes for table `preguntas`
--
ALTER TABLE `preguntas`
  ADD PRIMARY KEY (`pregunta_id`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`usuario_id`),
  ADD UNIQUE KEY `usuario_usuario` (`usuario_usuario`),
  ADD UNIQUE KEY `usuario_email` (`usuario_email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `calificaciones`
--
ALTER TABLE `calificaciones`
  MODIFY `calificacion_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `preguntas`
--
ALTER TABLE `preguntas`
  MODIFY `pregunta_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `usuario_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `calificaciones`
--
ALTER TABLE `calificaciones`
  ADD CONSTRAINT `calificaciones_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`usuario_id`),
  ADD CONSTRAINT `fk_usuario` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`usuario_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_usuario_id` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`usuario_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
