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
        id: 31,
        categoria: "musica",
        titulo: "¿Quién es conocido como el pimer Rey del Pop?",
        opcionA: "Elvis Presley",
        opcionB: "Michael Jackson",
        opcionC: "Madonna",
        opcionD: "Prince",
        correcta: "b"
    },
    {
        id: 32,
        categoria: "musica",
        titulo: "¿Cuál es el género musical más popular en todo el mundo?",
        opcionA: "Rock",
        opcionB: "Electrónica",
        opcionC: "Rap",
        opcionD: "Pop",
        correcta: "d"
    },
    {
        id: 33,
        categoria: "musica",
        titulo: "¿En qué década surgió el movimiento punk?",
        opcionA: "1960",
        opcionB: "1970",
        opcionC: "1980",
        opcionD: "1990",
        correcta: "b"
    },
    {
        id: 34,
        categoria: "musica",
        titulo: "¿Quién es el famoso guitarrista de la banda Queen?",
        opcionA: "John Lennon",
        opcionB: "Jimi Hendrix",
        opcionC: "Brian May",
        opcionD: "Eric Clapton",
        correcta: "c"
    },
    {
        id: 35,
        categoria: "musica",
        titulo: "¿Cuál es el instrumento principal en una orquesta sinfónica?",
        opcionA: "Guitarra",
        opcionB: "Piano",
        opcionC: "Violín",
        opcionD: "Flauta",
        correcta: "c"
    },
    {
        id: 36,
        categoria: "musica",
        titulo: "¿Qué banda compuso la famosa canción 'Bohemian Rhapsody'?",
        opcionA: "The Beatles",
        opcionB: "Pink Floyd",
        opcionC: "Queen",
        opcionD: "The Rolling Stones",
        correcta: "c"
    },
    {
        id: 37,
        categoria: "musica",
        titulo: "¿Quién es conocido como el 'Rey del Rock and Roll'?",
        opcionA: "Chuck Berry",
        opcionB: "Elvis Presley",
        opcionC: "Little Richard",
        opcionD: "Jerry Lee Lewis",
        correcta: "b"
    },
    {
        id: 38,
        categoria: "musica",
        titulo: "¿Qué artista popularizó el 'moonwalk'?",
        opcionA: "James Brown",
        opcionB: "Michael Jackson",
        opcionC: "Prince",
        opcionD: "Stevie Wonder",
        correcta: "b"
    },
    {
        id: 39,
        categoria: "musica",
        titulo: "¿Cuál es el álbum más vendido de todos los tiempos?",
        opcionA: "Back in Black - AC/DC",
        opcionB: "Thriller - Michael Jackson",
        opcionC: "The Dark Side of the Moon - Pink Floyd",
        opcionD: "Abbey Road - The Beatles",
        correcta: "b"
    },
    {
        id: 40,
        categoria: "musica",
        titulo: "¿En qué país se originó el reggae?",
        opcionA: "Jamaica",
        opcionB: "Cuba",
        opcionC: "Estados Unidos",
        opcionD: "Brasil",
        correcta: "a"
    },
    {
        id: 41,
        categoria: "musica",
        titulo: "¿Qué instrumento toca Yo-Yo Ma?",
        opcionA: "Piano",
        opcionB: "Violín",
        opcionC: "Violonchelo",
        opcionD: "Flauta",
        correcta: "c"
    },
    {
        id: 42,
        categoria: "musica",
        titulo: "¿Qué banda es conocida por el álbum 'The Wall'?",
        opcionA: "The Rolling Stones",
        opcionB: "Led Zeppelin",
        opcionC: "Pink Floyd",
        opcionD: "The Who",
        correcta: "c"
    },
    {
        id: 43,
        categoria: "musica",
        titulo: "¿Qué género musical es característico de Nueva Orleans?",
        opcionA: "Jazz",
        opcionB: "Blues",
        opcionC: "Soul",
        opcionD: "R&B",
        correcta: "a"
    },
    {
        id: 44,
        categoria: "musica",
        titulo: "¿Quién cantó 'Like a Rolling Stone'?",
        opcionA: "Bob Dylan",
        opcionB: "The Rolling Stones",
        opcionC: "Johnny Cash",
        opcionD: "Bruce Springsteen",
        correcta: "a"
    },
    {
        id: 45,
        categoria: "musica",
        titulo: "¿Qué cantante se apoda 'La Reina del Soul'?",
        opcionA: "Aretha Franklin",
        opcionB: "Whitney Houston",
        opcionC: "Diana Ross",
        opcionD: "Tina Turner",
        correcta: "a"
    },
    {
        id: 46,
        categoria: "musica",
        titulo: "¿Qué instrumento es característico del flamenco?",
        opcionA: "Guitarra española",
        opcionB: "Castañuelas",
        opcionC: "Cajón",
        opcionD: "Todas las anteriores",
        correcta: "d"
    },
    {
        id: 47,
        categoria: "musica",
        titulo: "¿Cuál es el género principal de Metallica?",
        opcionA: "Heavy Metal",
        opcionB: "Hard Rock",
        opcionC: "Thrash Metal",
        opcionD: "Death Metal",
        correcta: "c"
    },
    {
        id: 48,
        categoria: "musica",
        titulo: "¿Qué canción fue un gran éxito de los Bee Gees?",
        opcionA: "Stayin' Alive",
        opcionB: "Dancing Queen",
        opcionC: "Billie Jean",
        opcionD: "Hotel California",
        correcta: "a"
    },
    {
        id: 49,
        categoria: "musica",
        titulo: "¿En qué ciudad nació Ludwig van Beethoven?",
        opcionA: "París",
        opcionB: "Bonn",
        opcionC: "Viena",
        opcionD: "Leipzig",
        correcta: "b"
    },
    {
        id: 50,
        categoria: "musica",
        titulo: "¿Quién fue el vocalista principal de Nirvana?",
        opcionA: "Kurt Cobain",
        opcionB: "Chris Cornell",
        opcionC: "Eddie Vedder",
        opcionD: "Dave Grohl",
        correcta: "a"
    },
    {
        id: 51,
        categoria: "musica",
        titulo: "¿Qué compositor es conocido por 'Las cuatro estaciones'?",
        opcionA: "Bach",
        opcionB: "Beethoven",
        opcionC: "Vivaldi",
        opcionD: "Mozart",
        correcta: "c"
    },
    {
        id: 52,
        categoria: "musica",
        titulo: "¿Qué cantante tiene el apodo de 'La Reina del Pop'?",
        opcionA: "Madonna",
        opcionB: "Britney Spears",
        opcionC: "Lady Gaga",
        opcionD: "Beyoncé",
        correcta: "a"
    },
    {
        id: 53,
        categoria: "musica",
        titulo: "¿Qué banda lanzó el álbum 'Nevermind'?",
        opcionA: "Pearl Jam",
        opcionB: "Nirvana",
        opcionC: "Alice in Chains",
        opcionD: "Soundgarden",
        correcta: "b"
    },
    {
        id: 54,
        categoria: "musica",
        titulo: "¿En qué país se originó el tango?",
        opcionA: "España",
        opcionB: "Argentina",
        opcionC: "Chile",
        opcionD: "México",
        correcta: "b"
    },
    {
        id: 55,
        categoria: "musica",
        titulo: "¿Qué cantante es famoso por su alter ego Ziggy Stardust?",
        opcionA: "Freddie Mercury",
        opcionB: "David Bowie",
        opcionC: "Mick Jagger",
        opcionD: "Elton John",
        correcta: "b"
    },
    {
        id: 56,
        categoria: "musica",
        titulo: "¿Qué cantante escribió 'Imagine'?",
        opcionA: "Paul McCartney",
        opcionB: "John Lennon",
        opcionC: "George Harrison",
        opcionD: "Ringo Starr",
        correcta: "b"
    },
    {
        id: 57,
        categoria: "musica",
        titulo: "¿Qué cantante tenía el apodo de 'Ol' Blue Eyes'?",
        opcionA: "Frank Sinatra",
        opcionB: "Dean Martin",
        opcionC: "Tony Bennett",
        opcionD: "Bing Crosby",
        correcta: "a"
    },
    {
        id: 58,
        categoria: "musica",
        titulo: "¿Qué estilo musical es característico de Bob Marley?",
        opcionA: "Rock",
        opcionB: "Reggae",
        opcionC: "Blues",
        opcionD: "Pop",
        correcta: "b"
    },
    {
        id: 59,
        categoria: "musica",
        titulo: "¿Qué grupo cantó 'Hotel California'?",
        opcionA: "Fleetwood Mac",
        opcionB: "The Eagles",
        opcionC: "The Beach Boys",
        opcionD: "The Doors",
        correcta: "b"
    },
    {
        id: 60,
        categoria: "musica",
        titulo: "¿Qué famoso productor estuvo detrás del álbum 'Thriller'?",
        opcionA: "Rick Rubin",
        opcionB: "George Martin",
        opcionC: "Quincy Jones",
        opcionD: "Phil Spector",
        correcta: "c"
    },
    
    {
        id: 61,
        categoria: "deportes",
        titulo: "¿En qué deporte se utiliza una pelota de baloncesto?",
        opcionA: "Fútbol",
        opcionB: "Baloncesto",
        opcionC: "Golf",
        opcionD: "Tenis",
        correcta: "b"
    },
    {
        id: 62,
        categoria: "deportes",
        titulo: "¿Cuál es el país de origen de la artista del tenis Serena Williams?",
        opcionA: "Estados Unidos",
        opcionB: "Francia",
        opcionC: "España",
        opcionD: "Australia",
        correcta: "a"
    },
    {
        id: 63,
        categoria: "deportes",
        titulo: "¿Cuántos jugadores conforman un equipo de fútbol estándar en el campo durante un partido?",
        opcionA: "8",
        opcionB: "10",
        opcionC: "11",
        opcionD: "12",
        correcta: "c"
    },
    {
        id: 64,
        categoria: "deportes",
        titulo: "¿Quién es considerado el mejor nadador de todos los tiempos?",
        opcionA: "Michael Phelps",
        opcionB: "Usain Bolt",
        opcionC: "Simone Biles",
        opcionD: "Roger Federer",
        correcta: "a"
    },
    {
        id: 65,
        categoria: "deportes",
        titulo: "¿En qué deporte se compite por la Copa Davis?",
        opcionA: "Fútbol",
        opcionB: "Tenis",
        opcionC: "Golf",
        opcionD: "Balonmano",
        correcta: "b"
    },
    {
        id: 66,
        categoria: "deportes",
        titulo: "¿Cuántos minutos dura un partido de fútbol profesional?",
        opcionA: "60",
        opcionB: "90",
        opcionC: "120",
        opcionD: "45",
        correcta: "b"
    },
    {
        id: 67,
        categoria: "deportes",
        titulo: "¿En qué año se celebraron los primeros Juegos Olímpicos modernos?",
        opcionA: "1896",
        opcionB: "1900",
        opcionC: "1924",
        opcionD: "1888",
        correcta: "a"
    },
    {
        id: 68,
        categoria: "deportes",
        titulo: "¿Quién es conocido como 'La Pulga' en el mundo del fútbol?",
        opcionA: "Cristiano Ronaldo",
        opcionB: "Lionel Messi",
        opcionC: "Neymar Jr.",
        opcionD: "Diego Maradona",
        correcta: "b"
    },
    {
        id: 69,
        categoria: "deportes",
        titulo: "¿Qué deporte se juega con una red, una raqueta y un volante?",
        opcionA: "Tenis",
        opcionB: "Bádminton",
        opcionC: "Voleibol",
        opcionD: "Squash",
        correcta: "b"
    },
    {
        id: 70,
        categoria: "deportes",
        titulo: "¿Cuál es el torneo de tenis más antiguo del mundo?",
        opcionA: "US Open",
        opcionB: "Roland Garros",
        opcionC: "Wimbledon",
        opcionD: "Australian Open",
        correcta: "c"
    },
    {
        id: 71,
        categoria: "deportes",
        titulo: "¿Qué jugador de baloncesto tiene el apodo 'King James'?",
        opcionA: "Kobe Bryant",
        opcionB: "LeBron James",
        opcionC: "Michael Jordan",
        opcionD: "Shaquille O'Neal",
        correcta: "b"
    },
    {
        id: 72,
        categoria: "deportes",
        titulo: "¿Cuál es la distancia de un maratón estándar?",
        opcionA: "21 km",
        opcionB: "30 km",
        opcionC: "42 km",
        opcionD: "50 km",
        correcta: "c"
    },
    {
        id: 73,
        categoria: "deportes",
        titulo: "¿En qué deporte se utiliza una pala y una pelota pequeña sobre una mesa?",
        opcionA: "Squash",
        opcionB: "Ping-pong",
        opcionC: "Tenis",
        opcionD: "Bádminton",
        correcta: "b"
    },
    {
        id: 74,
        categoria: "deportes",
        titulo: "¿Quién tiene el récord de más títulos de Fórmula 1?",
        opcionA: "Michael Schumacher",
        opcionB: "Lewis Hamilton",
        opcionC: "Ayrton Senna",
        opcionD: "Sebastian Vettel",
        correcta: "b"
    },
    {
        id: 75,
        categoria: "deportes",
        titulo: "¿Qué selección ganó el Mundial de Fútbol en 2018?",
        opcionA: "Brasil",
        opcionB: "Alemania",
        opcionC: "Francia",
        opcionD: "España",
        correcta: "c"
    },
    {
        id: 76,
        categoria: "deportes",
        titulo: "¿En qué deporte se compite por la Stanley Cup?",
        opcionA: "Hockey sobre hielo",
        opcionB: "Críquet",
        opcionC: "Fútbol americano",
        opcionD: "Rugby",
        correcta: "a"
    },
    {
        id: 77,
        categoria: "deportes",
        titulo: "¿Qué atleta es conocido como el hombre más rápido del mundo?",
        opcionA: "Usain Bolt",
        opcionB: "Carl Lewis",
        opcionC: "Tyson Gay",
        opcionD: "Yohan Blake",
        correcta: "a"
    },
    {
        id: 78,
        categoria: "deportes",
        titulo: "¿Qué deporte combina correr, nadar y montar en bicicleta?",
        opcionA: "Pentatlón",
        opcionB: "Triatlón",
        opcionC: "Ironman",
        opcionD: "Decatlón",
        correcta: "b"
    },
    {
        id: 79,
        categoria: "deportes",
        titulo: "¿En qué país se originó el judo?",
        opcionA: "Corea del Sur",
        opcionB: "China",
        opcionC: "Japón",
        opcionD: "Tailandia",
        correcta: "c"
    },
    {
        id: 80,
        categoria: "deportes",
        titulo: "¿Cuál es el deporte nacional de Canadá?",
        opcionA: "Hockey sobre hielo",
        opcionB: "Lacrosse",
        opcionC: "Béisbol",
        opcionD: "Curling",
        correcta: "a"
    },
    {
        id: 81,
        categoria: "deportes",
        titulo: "¿Cuántos sets necesita ganar un jugador para ganar un partido de tenis masculino en un Grand Slam?",
        opcionA: "2",
        opcionB: "3",
        opcionC: "4",
        opcionD: "5",
        correcta: "b"
    },
    {
        id: 82,
        categoria: "deportes",
        titulo: "¿Qué equipo de la NBA tiene más títulos de campeonato?",
        opcionA: "Los Angeles Lakers",
        opcionB: "Chicago Bulls",
        opcionC: "Boston Celtics",
        opcionD: "Golden State Warriors",
        correcta: "c"
    },
    {
        id: 83,
        categoria: "deportes",
        titulo: "¿Qué ciudad es famosa por albergar la carrera de las 24 Horas de Le Mans?",
        opcionA: "París",
        opcionB: "Mónaco",
        opcionC: "Le Mans",
        opcionD: "Marsella",
        correcta: "c"
    },
    {
        id: 84,
        categoria: "deportes",
        titulo: "¿En qué deporte se utiliza un arco y flechas?",
        opcionA: "Esgrima",
        opcionB: "Tiro con arco",
        opcionC: "Pentatlón moderno",
        opcionD: "Golf",
        correcta: "b"
    },
    {
        id: 85,
        categoria: "deportes",
        titulo: "¿Quién ganó el Mundial de Rugby en 2019?",
        opcionA: "Nueva Zelanda",
        opcionB: "Sudáfrica",
        opcionC: "Inglaterra",
        opcionD: "Australia",
        correcta: "b"
    },
    {
        id: 86,
        categoria: "deportes",
        titulo: "¿Qué equipo ganó el Super Bowl en 2023?",
        opcionA: "Kansas City Chiefs",
        opcionB: "Philadelphia Eagles",
        opcionC: "New England Patriots",
        opcionD: "Los Angeles Rams",
        correcta: "a"
    },
    {
        id: 87,
        categoria: "deportes",
        titulo: "¿En qué deporte se utilizan esquís y una pista de nieve?",
        opcionA: "Snowboard",
        opcionB: "Esquí alpino",
        opcionC: "Esquí de fondo",
        opcionD: "Todas las anteriores",
        correcta: "d"
    },
    {
        id: 88,
        categoria: "deportes",
        titulo: "¿Quién tiene el récord de más goles en un Mundial de Fútbol?",
        opcionA: "Pele",
        opcionB: "Miroslav Klose",
        opcionC: "Ronaldo",
        opcionD: "Lionel Messi",
        correcta: "b"
    },
    {
        id: 89,
        categoria: "deportes",
        titulo: "¿En qué ciudad se celebraron los Juegos Olímpicos de 2016?",
        opcionA: "Tokio",
        opcionB: "Río de Janeiro",
        opcionC: "Londres",
        opcionD: "Pekín",
        correcta: "b"
    },
    {
        id: 90,
        categoria: "deportes",
        titulo: "¿En qué deporte se utiliza el término 'hole in one'?",
        opcionA: "Béisbol",
        opcionB: "Golf",
        opcionC: "Hockey",
        opcionD: "Tenis",
        correcta: "b"
    },
    
    {
        id: 91,
        categoria: "programacion",
        titulo: "¿Cuál de los siguientes lenguajes de programación es de tipado fuerte?",
        opcionA: "JavaScript",
        opcionB: "Python",
        opcionC: "C++",
        opcionD: "Java",
        correcta: "c"
    },
    {
        id: 92,
        categoria: "programacion",
        titulo: "¿Qué significa HTML en el contexto de desarrollo web?",
        opcionA: "HyperText Markup Language",
        opcionB: "High-Level Text Management Language",
        opcionC: "HyperTransfer Markup Language",
        opcionD: "High-Level Transfer Management Language",
        correcta: "a"
    },
    {
        id: 93,
        categoria: "programacion",
        titulo: "¿Cuál es el propósito principal de CSS en desarrollo web?",
        opcionA: "Manejar la lógica del lado del servidor",
        opcionB: "Estilizar la presentación de las páginas web",
        opcionC: "Gestionar la interactividad del usuario",
        opcionD: "Definir las rutas de la aplicación",
        correcta: "b"
    },
    {
        id: 94,
        categoria: "programacion",
        titulo: "¿Qué es un bucle 'for' en la programación?",
        opcionA: "Un tipo de dato",
        opcionB: "Una estructura condicional",
        opcionC: "Una función",
        opcionD: "Una estructura de control de flujo que se repite",
        correcta: "d"
    },
    {
        id: 95,
        categoria: "programacion",
        titulo: "¿Cuál de los siguientes no es un sistema de gestión de bases de datos?",
        opcionA: "MySQL",
        opcionB: "MongoDB",
        opcionC: "Express",
        opcionD: "SQLite",
        correcta: "c"
    },
    {
        id: 96,
        categoria: "programacion",
        titulo: "¿Qué significa 'API' en el desarrollo de software?",
        opcionA: "Application Programming Interface",
        opcionB: "Automated Process Integration",
        opcionC: "Application Protocol Interface",
        opcionD: "Applied Program Interaction",
        correcta: "a"
    },
    {
        id: 97,
        categoria: "programacion",
        titulo: "¿Qué lenguaje de programación es conocido por ejecutarse en una 'máquina virtual'?",
        opcionA: "C",
        opcionB: "Python",
        opcionC: "Java",
        opcionD: "JavaScript",
        correcta: "c"
    },
    {
        id: 98,
        categoria: "programacion",
        titulo: "¿Qué framework se utiliza principalmente para construir interfaces de usuario en React?",
        opcionA: "Vue.js",
        opcionB: "Bootstrap",
        opcionC: "React.js",
        opcionD: "jQuery",
        correcta: "c"
    },
    {
        id: 99,
        categoria: "programacion",
        titulo: "¿Qué comando de Git se usa para combinar ramas?",
        opcionA: "git clone",
        opcionB: "git merge",
        opcionC: "git pull",
        opcionD: "git branch",
        correcta: "b"
    },
    {
        id: 100,
        categoria: "programacion",
        titulo: "¿Cuál de estos lenguajes es el más adecuado para desarrollo de sistemas embebidos?",
        opcionA: "Ruby",
        opcionB: "C",
        opcionC: "PHP",
        opcionD: "Python",
        correcta: "b"
    },
    {
        id: 101,
        categoria: "programacion",
        titulo: "¿Qué estructura de datos utiliza la regla 'LIFO' (Last In, First Out)?",
        opcionA: "Cola",
        opcionB: "Pila",
        opcionC: "Árbol binario",
        opcionD: "Lista enlazada",
        correcta: "b"
    },
    {
        id: 102,
        categoria: "programacion",
        titulo: "¿Cuál es la salida del siguiente código en Python: print(2**3)?",
        opcionA: "6",
        opcionB: "8",
        opcionC: "9",
        opcionD: "12",
        correcta: "b"
    },
    {
        id: 103,
        categoria: "programacion",
        titulo: "¿Qué significa SQL?",
        opcionA: "Structured Query Language",
        opcionB: "Standard Query Logic",
        opcionC: "System Query Language",
        opcionD: "Secure Query Logic",
        correcta: "a"
    },
    {
        id: 104,
        categoria: "programacion",
        titulo: "¿Cuál de los siguientes lenguajes de programación es interpretado?",
        opcionA: "C++",
        opcionB: "Java",
        opcionC: "Python",
        opcionD: "C",
        correcta: "c"
    },
    {
        id: 105,
        categoria: "programacion",
        titulo: "¿Qué paradigma utiliza Python como base?",
        opcionA: "Programación funcional",
        opcionB: "Programación orientada a objetos",
        opcionC: "Ambos",
        opcionD: "Ninguno",
        correcta: "c"
    },
    {
        id: 106,
        categoria: "programacion",
        titulo: "¿Qué operador lógico se utiliza para una comparación estricta en JavaScript?",
        opcionA: "==",
        opcionB: "===",
        opcionC: "!=",
        opcionD: "!==",
        correcta: "b"
    },
    {
        id: 107,
        categoria: "programacion",
        titulo: "¿Cuál es el comando para crear un nuevo repositorio en Git?",
        opcionA: "git init",
        opcionB: "git clone",
        opcionC: "git push",
        opcionD: "git commit",
        correcta: "a"
    },
    {
        id: 108,
        categoria: "programacion",
        titulo: "¿Qué estructura de control se utiliza para iterar hasta que una condición sea verdadera?",
        opcionA: "if-else",
        opcionB: "while",
        opcionC: "switch",
        opcionD: "for",
        correcta: "b"
    },
    {
        id: 109,
        categoria: "programacion",
        titulo: "¿Qué librería de Python se utiliza para análisis de datos?",
        opcionA: "NumPy",
        opcionB: "Pandas",
        opcionC: "Matplotlib",
        opcionD: "Flask",
        correcta: "b"
    },
    {
        id: 110,
        categoria: "programacion",
        titulo: "¿Qué palabra clave se utiliza para definir una función en Python?",
        opcionA: "function",
        opcionB: "def",
        opcionC: "lambda",
        opcionD: "var",
        correcta: "b"
    },
    {
        id: 111,
        categoria: "programacion",
        titulo: "¿Qué tipo de dato devuelve la función 'typeof' en JavaScript?",
        opcionA: "Cadena",
        opcionB: "Número",
        opcionC: "Booleano",
        opcionD: "Todos los anteriores",
        correcta: "a"
    },
    {
        id: 112,
        categoria: "programacion",
        titulo: "¿Qué símbolo se utiliza para comentarios de una sola línea en Python?",
        opcionA: "//",
        opcionB: "#",
        opcionC: "/* */",
        opcionD: "<!-- -->",
        correcta: "b"
    },
    {
        id: 113,
        categoria: "programacion",
        titulo: "¿Cuál es el formato estándar para definir estilos en CSS?",
        opcionA: "JSON",
        opcionB: "XML",
        opcionC: "Selector { propiedad: valor; }",
        opcionD: "tag = style",
        correcta: "c"
    },
    {
        id: 114,
        categoria: "programacion",
        titulo: "¿Qué significa 'null' en JavaScript?",
        opcionA: "Un valor indefinido",
        opcionB: "Un error",
        opcionC: "Un objeto vacío",
        opcionD: "Ninguno de los anteriores",
        correcta: "c"
    },
    {
        id: 115,
        categoria: "programacion",
        titulo: "¿Qué lenguaje de programación se utiliza principalmente para el desarrollo de aplicaciones Android?",
        opcionA: "Swift",
        opcionB: "Java",
        opcionC: "Kotlin",
        opcionD: "B y C son correctas",
        correcta: "d"
    },
    {
        id: 116,
        categoria: "programacion",
        titulo: "¿Qué método de JavaScript se utiliza para agregar elementos a un array?",
        opcionA: ".add()",
        opcionB: ".append()",
        opcionC: ".push()",
        opcionD: ".concat()",
        correcta: "c"
    },
    {
        id: 117,
        categoria: "programacion",
        titulo: "¿Qué es un 'framework' en programación?",
        opcionA: "Un lenguaje de programación",
        opcionB: "Un conjunto de herramientas para desarrollar software",
        opcionC: "Un algoritmo",
        opcionD: "Una base de datos",
        correcta: "b"
    },
    {
        id: 118,
        categoria: "programacion",
        titulo: "¿Qué es Docker en desarrollo de software?",
        opcionA: "Un sistema de bases de datos",
        opcionB: "Una herramienta para la virtualización de contenedores",
        opcionC: "Un lenguaje de programación",
        opcionD: "Un editor de texto",
        correcta: "b"
    },
    {
        id: 119,
        categoria: "programacion",
        titulo: "¿Qué empresa creó el lenguaje de programación Python?",
        opcionA: "Sun Microsystems",
        opcionB: "Guido van Rossum",
        opcionC: "IBM",
        opcionD: "Microsoft",
        correcta: "b"
    },
    {
        id: 120,
        categoria: "programacion",
        titulo: "¿Qué tecnología permite agregar interactividad a las páginas web?",
        opcionA: "HTML",
        opcionB: "CSS",
        opcionC: "JavaScript",
        opcionD: "SQL",
        correcta: "c"
    },
    
    {
        id: 121,
        categoria: "juegos",
        titulo: "¿Cuál es el fontanero más famoso en el mundo de los videojuegos?",
        opcionA: "Sonic",
        opcionB: "Link",
        opcionC: "Mario",
        opcionD: "Master Chief",
        correcta: "c"
    },
    {
        id: 122,
        categoria: "juegos",
        titulo: "¿En qué año se lanzó el juego 'The Legend of Zelda: Ocarina of Time'?",
        opcionA: "1996",
        opcionB: "1998",
        opcionC: "2000",
        opcionD: "2002",
        correcta: "b"
    },
    {
        id: 123,
        categoria: "juegos",
        titulo: "¿Cuál es la empresa creadora de la consola PlayStation?",
        opcionA: "Microsoft",
        opcionB: "Sony",
        opcionC: "Nintendo",
        opcionD: "Sega",
        correcta: "b"
    },
    {
        id: 124,
        categoria: "juegos",
        titulo: "¿Quién es el protagonista del juego 'The Witcher 3: Wild Hunt'?",
        opcionA: "Geralt of Rivia",
        opcionB: "Ezio Auditore",
        opcionC: "Aloy",
        opcionD: "Joel",
        correcta: "a"
    },
    {
        id: 125,
        categoria: "juegos",
        titulo: "¿Cuál es el juego más vendido de todos los tiempos?",
        opcionA: "Minecraft",
        opcionB: "Tetris",
        opcionC: "Grand Theft Auto V",
        opcionD: "Super Mario Bros.",
        correcta: "b"
    },
    {
        id: 126,
        categoria: "juegos",
        titulo: "¿Cuál es el nombre del héroe principal de la serie 'Halo'?",
        opcionA: "Marcus Fenix",
        opcionB: "Master Chief",
        opcionC: "Samus Aran",
        opcionD: "Solid Snake",
        correcta: "b"
    },
    {
        id: 127,
        categoria: "juegos",
        titulo: "¿Qué Pokémon es conocido como el número 25 en la Pokédex?",
        opcionA: "Charmander",
        opcionB: "Pikachu",
        opcionC: "Bulbasaur",
        opcionD: "Squirtle",
        correcta: "b"
    },
    {
        id: 128,
        categoria: "juegos",
        titulo: "¿Qué empresa desarrolló el juego 'Fortnite'?",
        opcionA: "Epic Games",
        opcionB: "Activision",
        opcionC: "Electronic Arts",
        opcionD: "Ubisoft",
        correcta: "a"
    },
    {
        id: 129,
        categoria: "juegos",
        titulo: "¿En qué juego aparece el personaje 'Lara Croft'?",
        opcionA: "Uncharted",
        opcionB: "Tomb Raider",
        opcionC: "Assassin's Creed",
        opcionD: "The Last of Us",
        correcta: "b"
    },
    {
        id: 130,
        categoria: "juegos",
        titulo: "¿Qué juego popular se basa en la construcción y supervivencia con bloques?",
        opcionA: "Roblox",
        opcionB: "Minecraft",
        opcionC: "Terraria",
        opcionD: "Stardew Valley",
        correcta: "b"
    },
    {
        id: 131,
        categoria: "juegos",
        titulo: "¿Cuál es el enemigo principal en la saga 'The Legend of Zelda'?",
        opcionA: "Ganondorf",
        opcionB: "Bowser",
        opcionC: "Ridley",
        opcionD: "Dr. Eggman",
        correcta: "a"
    },
    {
        id: 132,
        categoria: "juegos",
        titulo: "¿Qué consola popular fue lanzada por Nintendo en 2006?",
        opcionA: "GameCube",
        opcionB: "Wii",
        opcionC: "Nintendo 64",
        opcionD: "Nintendo DS",
        correcta: "b"
    },
    {
        id: 133,
        categoria: "juegos",
        titulo: "¿Qué tipo de juego es 'League of Legends'?",
        opcionA: "MOBA",
        opcionB: "RPG",
        opcionC: "FPS",
        opcionD: "RTS",
        correcta: "a"
    },
    {
        id: 134,
        categoria: "juegos",
        titulo: "¿Cuál es el subtítulo del primer juego de 'Dark Souls'?",
        opcionA: "Prepare to Die",
        opcionB: "Shadow of the Abyss",
        opcionC: "Elden Ring",
        opcionD: "Demon's Soul",
        correcta: "a"
    },
    {
        id: 135,
        categoria: "juegos",
        titulo: "¿Qué personaje icónico dice la frase 'It's-a me, Mario!'?",
        opcionA: "Luigi",
        opcionB: "Sonic",
        opcionC: "Mario",
        opcionD: "Toad",
        correcta: "c"
    },
    {
        id: 136,
        categoria: "juegos",
        titulo: "¿Cuál es el principal antagonista en la saga de 'Metroid'?",
        opcionA: "Ridley",
        opcionB: "Dark Samus",
        opcionC: "Kraid",
        opcionD: "Mother Brain",
        correcta: "d"
    },
    {
        id: 137,
        categoria: "juegos",
        titulo: "¿Qué juego popular incluye una isla llena de criaturas en miniatura llamadas 'Pikmin'?",
        opcionA: "Harvest Moon",
        opcionB: "Pikmin",
        opcionC: "Animal Crossing",
        opcionD: "The Sims",
        correcta: "b"
    },
    {
        id: 138,
        categoria: "juegos",
        titulo: "¿Qué empresa desarrolló el juego 'Call of Duty'?",
        opcionA: "EA Games",
        opcionB: "Activision",
        opcionC: "Ubisoft",
        opcionD: "Rockstar Games",
        correcta: "b"
    },
    {
        id: 139,
        categoria: "juegos",
        titulo: "¿Cuál es el nombre del famoso corredor de 'Crash Team Racing'?",
        opcionA: "Spyro",
        opcionB: "Crash Bandicoot",
        opcionC: "Dingo Dial",
        opcionD: "Tiny Tiger",
        correcta: "b"
    },
    {
        id: 140,
        categoria: "juegos",
        titulo: "¿En qué franquicia de videojuegos aparece el 'Buster Sword'?",
        opcionA: "Kingdom Hearts",
        opcionB: "Final Fantasy",
        opcionC: "Dragon Quest",
        opcionD: "Chrono Trigger",
        correcta: "b"
    },
    {
        id: 141,
        categoria: "juegos",
        titulo: "¿Qué es 'Steam' en el mundo de los videojuegos?",
        opcionA: "Un motor gráfico",
        opcionB: "Una plataforma de distribución digital",
        opcionC: "Una herramienta para desarrolladores",
        opcionD: "Un dispositivo de hardware",
        correcta: "b"
    },
    {
        id: 142,
        categoria: "juegos",
        titulo: "¿Qué juego es famoso por la frase 'The cake is a lie'?",
        opcionA: "Half-Life",
        opcionB: "Portal",
        opcionC: "Bioshock",
        opcionD: "Fallout",
        correcta: "b"
    },
    {
        id: 143,
        categoria: "juegos",
        titulo: "¿Cuál fue la primera consola lanzada por Sony?",
        opcionA: "PlayStation",
        opcionB: "PlayStation 2",
        opcionC: "PSP",
        opcionD: "PlayStation 3",
        correcta: "a"
    },
    {
        id: 144,
        categoria: "juegos",
        titulo: "¿Qué videojuego presenta un lugar llamado 'Rapture'?",
        opcionA: "Fallout",
        opcionB: "Bioshock",
        opcionC: "Dishonored",
        opcionD: "The Elder Scrolls",
        correcta: "b"
    },
    {
        id: 145,
        categoria: "juegos",
        titulo: "¿Quién es el desarrollador principal de 'Metal Gear Solid'?",
        opcionA: "Shigeru Miyamoto",
        opcionB: "Hideo Kojima",
        opcionC: "Tetsuya Nomura",
        opcionD: "Todd Howard",
        correcta: "b"
    },
    {
        id: 146,
        categoria: "juegos",
        titulo: "¿Qué consola portátil fue conocida por sus pantallas duales?",
        opcionA: "PSP",
        opcionB: "Game Boy Advance",
        opcionC: "Nintendo DS",
        opcionD: "Game Gear",
        correcta: "c"
    },
    {
        id: 147,
        categoria: "juegos",
        titulo: "¿Qué género describe mejor a 'The Sims'?",
        opcionA: "Estrategia",
        opcionB: "Simulación de vida",
        opcionC: "RPG",
        opcionD: "Aventura",
        correcta: "b"
    },
    {
        id: 148,
        categoria: "juegos",
        titulo: "¿Qué juego presenta a 'Cloud Strife' como protagonista?",
        opcionA: "Final Fantasy VII",
        opcionB: "Kingdom Hearts",
        opcionC: "Chrono Trigger",
        opcionD: "Dragon Quest",
        correcta: "a"
    },
    {
        id: 149,
        categoria: "juegos",
        titulo: "¿Cuál es el lema de la franquicia 'Assassin's Creed'?",
        opcionA: "Nada es real, todo está permitido",
        opcionB: "Recuerda a tus ancestros",
        opcionC: "El conocimiento es poder",
        opcionD: "El fin justifica los medios",
        correcta: "a"
    },
    {
        id: 150,
        categoria: "juegos",
        titulo: "¿Qué juego se popularizó con el lema 'Battle Royale'?",
        opcionA: "PUBG",
        opcionB: "Fortnite",
        opcionC: "Apex Legends",
        opcionD: "Call of Duty: Warzone",
        correcta: "a"
    },
    
    {
        id: 151,
        categoria: "peliculas",
        titulo: "¿Cuál es el nombre del león protagonista en 'El Rey León'?",
        opcionA: "Simba",
        opcionB: "Mufasa",
        opcionC: "Scar",
        opcionD: "Timón",
        correcta: "a"
    },
    {
        id: 152,
        categoria: "peliculas",
        titulo: "¿Qué juguete es el protagonista de la película 'Toy Story'?",
        opcionA: "Buzz Lightyear",
        opcionB: "Woody",
        opcionC: "Slinky",
        opcionD: "Mr. Potato Head",
        correcta: "b"
    },
    {
        id: 153,
        categoria: "peliculas",
        titulo: "¿Cuál es el título de la película de Disney en la que una sirena sueña con vivir en la tierra?",
        opcionA: "Cenicienta",
        opcionB: "La Sirenita",
        opcionC: "Blancanieves",
        opcionD: "Mulan",
        correcta: "b"
    },
    {
        id: 154,
        categoria: "peliculas",
        titulo: "¿Quién es el monstruo protagonista en 'Monsters, Inc.'?",
        opcionA: "Sulley",
        opcionB: "Mike Wazowski",
        opcionC: "Randall",
        opcionD: "Boo",
        correcta: "a"
    },
    {
        id: 155,
        categoria: "peliculas",
        titulo: "¿Cuál es el título de la película de Pixar sobre emociones que viven en la mente de una niña?",
        opcionA: "Inside Out",
        opcionB: "Finding Nemo",
        opcionC: "Up",
        opcionD: "Ratatouille",
        correcta: "a"
    },
    {
        id: 156,
        categoria: "peliculas",
        titulo: "¿Quién interpreta a Jack Dawson en 'Titanic'?",
        opcionA: "Brad Pitt",
        opcionB: "Leonardo DiCaprio",
        opcionC: "Matt Damon",
        opcionD: "Johnny Depp",
        correcta: "b"
    },
    {
        id: 157,
        categoria: "peliculas",
        titulo: "¿En qué película se usa la frase 'Yo soy tu padre'?",
        opcionA: "El Imperio Contraataca",
        opcionB: "La Amenaza Fantasma",
        opcionC: "Una Nueva Esperanza",
        opcionD: "El Retorno del Jedi",
        correcta: "a"
    },
    {
        id: 158,
        categoria: "peliculas",
        titulo: "¿Qué película protagoniza a un robot llamado WALL-E?",
        opcionA: "Robots",
        opcionB: "WALL-E",
        opcionC: "Big Hero 6",
        opcionD: "Transformers",
        correcta: "b"
    },
    {
        id: 159,
        categoria: "peliculas",
        titulo: "¿Qué actor interpreta a Tony Stark en el Universo Cinematográfico de Marvel?",
        opcionA: "Chris Hemsworth",
        opcionB: "Chris Evans",
        opcionC: "Robert Downey Jr.",
        opcionD: "Mark Ruffalo",
        correcta: "c"
    },
    {
        id: 160,
        categoria: "peliculas",
        titulo: "¿Qué película ganó el Oscar a Mejor Película en 2020?",
        opcionA: "1917",
        opcionB: "Joker",
        opcionC: "Parasite",
        opcionD: "Once Upon a Time in Hollywood",
        correcta: "c"
    },
    {
        id: 161,
        categoria: "peliculas",
        titulo: "¿Qué director es conocido por la trilogía de 'El Señor de los Anillos'?",
        opcionA: "Christopher Nolan",
        opcionB: "Steven Spielberg",
        opcionC: "Peter Jackson",
        opcionD: "James Cameron",
        correcta: "c"
    },
    {
        id: 162,
        categoria: "peliculas",
        titulo: "¿Qué película animada tiene un castillo que se mueve mágicamente?",
        opcionA: "Mi Vecino Totoro",
        opcionB: "El Viaje de Chihiro",
        opcionC: "El Castillo Ambulante",
        opcionD: "La Princesa Mononoke",
        correcta: "c"
    },
    {
        id: 163,
        categoria: "peliculas",
        titulo: "¿Cuál es el nombre del mago protagonista de 'Harry Potter'?",
        opcionA: "Ron Weasley",
        opcionB: "Hermione Granger",
        opcionC: "Draco Malfoy",
        opcionD: "Harry Potter",
        correcta: "d"
    },
    {
        id: 164,
        categoria: "peliculas",
        titulo: "¿Qué película incluye a los personajes Elsa y Anna?",
        opcionA: "Frozen",
        opcionB: "Brave",
        opcionC: "Tangled",
        opcionD: "Moana",
        correcta: "a"
    },
    {
        id: 165,
        categoria: "peliculas",
        titulo: "¿Qué película de Quentin Tarantino presenta a los personajes Vincent Vega y Jules Winnfield?",
        opcionA: "Kill Bill",
        opcionB: "Pulp Fiction",
        opcionC: "Django Unchained",
        opcionD: "Reservoir Dogs",
        correcta: "b"
    },
    {
        id: 166,
        categoria: "peliculas",
        titulo: "¿Cuál es el nombre de la heroína en 'Wonder Woman'?",
        opcionA: "Natasha Romanoff",
        opcionB: "Diana Prince",
        opcionC: "Carol Danvers",
        opcionD: "Wanda Maximoff",
        correcta: "b"
    },
    {
        id: 167,
        categoria: "peliculas",
        titulo: "¿Qué película musical protagoniza a un grupo de felinos cantando?",
        opcionA: "Cats",
        opcionB: "La La Land",
        opcionC: "The Greatest Showman",
        opcionD: "Moulin Rouge",
        correcta: "a"
    },
    {
        id: 168,
        categoria: "peliculas",
        titulo: "¿Qué película animada presenta a una rata que sueña con ser chef?",
        opcionA: "Ratatouille",
        opcionB: "Cloudy with a Chance of Meatballs",
        opcionC: "Open Season",
        opcionD: "Zootopia",
        correcta: "a"
    },
    {
        id: 169,
        categoria: "peliculas",
        titulo: "¿En qué película aparece el famoso tiburón blanco Bruce?",
        opcionA: "Tiburón",
        opcionB: "Nemo",
        opcionC: "Deep Blue Sea",
        opcionD: "Shark Tale",
        correcta: "b"
    },
    {
        id: 170,
        categoria: "peliculas",
        titulo: "¿Qué película tiene como protagonista a un coche de carreras llamado Lightning McQueen?",
        opcionA: "Cars",
        opcionB: "Planes",
        opcionC: "Herbie",
        opcionD: "Speed Racer",
        correcta: "a"
    },
    {
        id: 171,
        categoria: "peliculas",
        titulo: "¿Quién dirigió la película 'E.T. el Extraterrestre'?",
        opcionA: "James Cameron",
        opcionB: "George Lucas",
        opcionC: "Steven Spielberg",
        opcionD: "Ridley Scott",
        correcta: "c"
    },
    {
        id: 172,
        categoria: "peliculas",
        titulo: "¿En qué película aparece el personaje Gollum?",
        opcionA: "El Hobbit",
        opcionB: "El Señor de los Anillos",
        opcionC: "Harry Potter",
        opcionD: "Narnia",
        correcta: "b"
    },
    {
        id: 173,
        categoria: "peliculas",
        titulo: "¿Qué película de ciencia ficción ocurre en Pandora?",
        opcionA: "Star Wars",
        opcionB: "Avatar",
        opcionC: "Blade Runner",
        opcionD: "Dune",
        correcta: "b"
    },
    {
        id: 174,
        categoria: "peliculas",
        titulo: "¿Qué película de terror incluye al personaje de Pennywise?",
        opcionA: "Halloween",
        opcionB: "It",
        opcionC: "Scream",
        opcionD: "El Exorcista",
        correcta: "b"
    },
    {
        id: 175,
        categoria: "peliculas",
        titulo: "¿Qué actor interpreta a Wolverine en las películas de 'X-Men'?",
        opcionA: "Hugh Jackman",
        opcionB: "Ryan Reynolds",
        opcionC: "Patrick Stewart",
        opcionD: "Ian McKellen",
        correcta: "a"
    },
    {
        id: 176,
        categoria: "peliculas",
        titulo: "¿En qué película se dice 'Hasta la vista, baby'?",
        opcionA: "Robocop",
        opcionB: "Terminator 2",
        opcionC: "Matrix",
        opcionD: "Blade Runner",
        correcta: "b"
    },
    {
        id: 177,
        categoria: "peliculas",
        titulo: "¿Qué película animada se desarrolla en el Día de los Muertos?",
        opcionA: "Coco",
        opcionB: "Book of Life",
        opcionC: "Up",
        opcionD: "Brave",
        correcta: "a"
    },
    {
        id: 178,
        categoria: "peliculas",
        titulo: "¿Qué villano es el enemigo de los Vengadores en 'Infinity War'?",
        opcionA: "Loki",
        opcionB: "Thanos",
        opcionC: "Ultron",
        opcionD: "Hela",
        correcta: "b"
    },
    {
        id: 179,
        categoria: "peliculas",
        titulo: "¿Quién dirigió 'El Resplandor'?",
        opcionA: "Alfred Hitchcock",
        opcionB: "Stanley Kubrick",
        opcionC: "Steven Spielberg",
        opcionD: "Francis Ford Coppola",
        correcta: "b"
    },
    {
        id: 180,
        categoria: "peliculas",
        titulo: "¿Qué película tiene la frase 'I'll be back'?",
        opcionA: "Predator",
        opcionB: "Terminator",
        opcionC: "Robocop",
        opcionD: "Aliens",
        correcta: "b"
    },
    {
        id: 181,
        categoria: "geografia",
        titulo: "¿Cuál es el río más largo del mundo?",
        opcionA: "Amazonas",
        opcionB: "Nilo",
        opcionC: "Yangtsé",
        opcionD: "Misisipi",
        correcta: "a"
    },
    {
        id: 182,
        categoria: "geografia",
        titulo: "¿Cuál es el país más grande del mundo en términos de área?",
        opcionA: "China",
        opcionB: "Canadá",
        opcionC: "Rusia",
        opcionD: "Estados Unidos",
        correcta: "c"
    },
    {
        id: 183,
        categoria: "geografia",
        titulo: "¿En qué continente se encuentra el desierto del Sahara?",
        opcionA: "Asia",
        opcionB: "África",
        opcionC: "Oceanía",
        opcionD: "América del Sur",
        correcta: "b"
    },
    {
        id: 184,
        categoria: "geografia",
        titulo: "¿Cuál es la montaña más alta del mundo?",
        opcionA: "Monte Everest",
        opcionB: "K2",
        opcionC: "Kilimanjaro",
        opcionD: "Aconcagua",
        correcta: "a"
    },
    {
        id: 185,
        categoria: "geografia",
        titulo: "¿Qué océano es el más grande?",
        opcionA: "Atlántico",
        opcionB: "Índico",
        opcionC: "Pacífico",
        opcionD: "Ártico",
        correcta: "c"
    },
    {
        id: 186,
        categoria: "geografia",
        titulo: "¿Cuál es la capital de Japón?",
        opcionA: "Osaka",
        opcionB: "Kioto",
        opcionC: "Tokio",
        opcionD: "Nagoya",
        correcta: "c"
    },
    {
        id: 187,
        categoria: "geografia",
        titulo: "¿En qué país se encuentra la Torre Eiffel?",
        opcionA: "Italia",
        opcionB: "España",
        opcionC: "Reino Unido",
        opcionD: "Francia",
        correcta: "d"
    },
    {
        id: 188,
        categoria: "geografia",
        titulo: "¿Cuál es el país más pequeño del mundo?",
        opcionA: "San Marino",
        opcionB: "Liechtenstein",
        opcionC: "Ciudad del Vaticano",
        opcionD: "Mónaco",
        correcta: "c"
    },
    {
        id: 189,
        categoria: "geografia",
        titulo: "¿Qué país tiene la mayor cantidad de islas en el mundo?",
        opcionA: "Indonesia",
        opcionB: "Filipinas",
        opcionC: "Noruega",
        opcionD: "Suecia",
        correcta: "d"
    },
    {
        id: 190,
        categoria: "geografia",
        titulo: "¿En qué país está ubicado el Machu Picchu?",
        opcionA: "Ecuador",
        opcionB: "Chile",
        opcionC: "Perú",
        opcionD: "Bolivia",
        correcta: "c"
    },
    {
        id: 191,
        categoria: "geografia",
        titulo: "¿Cuál es el lago más grande del mundo por área?",
        opcionA: "Lago Superior",
        opcionB: "Mar Caspio",
        opcionC: "Lago Victoria",
        opcionD: "Lago Baikal",
        correcta: "b"
    },
    {
        id: 192,
        categoria: "geografia",
        titulo: "¿En qué continente se encuentra el país de Bután?",
        opcionA: "África",
        opcionB: "Asia",
        opcionC: "Europa",
        opcionD: "Oceanía",
        correcta: "b"
    },
    {
        id: 193,
        categoria: "geografia",
        titulo: "¿Qué país tiene la mayor población del mundo?",
        opcionA: "India",
        opcionB: "China",
        opcionC: "Estados Unidos",
        opcionD: "Indonesia",
        correcta: "b"
    },
    {
        id: 194,
        categoria: "geografia",
        titulo: "¿En qué país se encuentra el Monte Fuji?",
        opcionA: "Japón",
        opcionB: "China",
        opcionC: "Corea del Sur",
        opcionD: "Filipinas",
        correcta: "a"
    },
    {
        id: 195,
        categoria: "geografia",
        titulo: "¿Cuál es la capital de Australia?",
        opcionA: "Sídney",
        opcionB: "Melbourne",
        opcionC: "Canberra",
        opcionD: "Perth",
        correcta: "c"
    },
    {
        id: 196,
        categoria: "geografia",
        titulo: "¿Qué país tiene forma de bota?",
        opcionA: "Grecia",
        opcionB: "Italia",
        opcionC: "Portugal",
        opcionD: "España",
        correcta: "b"
    },
    {
        id: 197,
        categoria: "geografia",
        titulo: "¿Cuál es la capital de Egipto?",
        opcionA: "Casablanca",
        opcionB: "El Cairo",
        opcionC: "Alejandría",
        opcionD: "Túnez",
        correcta: "b"
    },
    {
        id: 198,
        categoria: "geografia",
        titulo: "¿Qué país es famoso por su canal que conecta los océanos Atlántico y Pacífico?",
        opcionA: "Nicaragua",
        opcionB: "Panamá",
        opcionC: "Costa Rica",
        opcionD: "Colombia",
        correcta: "b"
    },
    {
        id: 199,
        categoria: "geografia",
        titulo: "¿Cuál es la capital de Canadá?",
        opcionA: "Toronto",
        opcionB: "Montreal",
        opcionC: "Ottawa",
        opcionD: "Vancouver",
        correcta: "c"
    },
    {
        id: 200,
        categoria: "geografia",
        titulo: "¿Cuál es el segundo país más grande del mundo?",
        opcionA: "Canadá",
        opcionB: "Rusia",
        opcionC: "Estados Unidos",
        opcionD: "China",
        correcta: "a"
    },
    {
        id: 201,
        categoria: "geografia",
        titulo: "¿En qué continente se encuentra la selva amazónica?",
        opcionA: "África",
        opcionB: "Asia",
        opcionC: "América del Sur",
        opcionD: "Oceanía",
        correcta: "c"
    },
    {
        id: 202,
        categoria: "geografia",
        titulo: "¿Qué país europeo tiene más volcanes activos?",
        opcionA: "Italia",
        opcionB: "Islandia",
        opcionC: "Grecia",
        opcionD: "España",
        correcta: "a"
    },
    {
        id: 203,
        categoria: "geografia",
        titulo: "¿Cuál es la capital de Sudáfrica?",
        opcionA: "Johannesburgo",
        opcionB: "Pretoria",
        opcionC: "Ciudad del Cabo",
        opcionD: "Durban",
        correcta: "b"
    },
    {
        id: 204,
        categoria: "geografia",
        titulo: "¿Qué país es conocido como la Tierra del Sol Naciente?",
        opcionA: "Corea del Sur",
        opcionB: "China",
        opcionC: "Japón",
        opcionD: "Tailandia",
        correcta: "c"
    },
    {
        id: 205,
        categoria: "geografia",
        titulo: "¿Qué cadena montañosa separa Europa de Asia?",
        opcionA: "Andes",
        opcionB: "Himalaya",
        opcionC: "Urales",
        opcionD: "Alpes",
        correcta: "c"
    },
    {
        id: 206,
        categoria: "geografia",
        titulo: "¿Cuál es el país con más idiomas oficiales?",
        opcionA: "India",
        opcionB: "Sudáfrica",
        opcionC: "Papúa Nueva Guinea",
        opcionD: "Zimbabue",
        correcta: "b"
    },
    {
        id: 207,
        categoria: "geografia",
        titulo: "¿Qué país alberga la región de la Patagonia?",
        opcionA: "Chile",
        opcionB: "Argentina",
        opcionC: "Uruguay",
        opcionD: "Brasil",
        correcta: "b"
    },
    {
        id: 208,
        categoria: "geografia",
        titulo: "¿Qué mar está ubicado al este de Italia?",
        opcionA: "Mar Mediterráneo",
        opcionB: "Mar Adriático",
        opcionC: "Mar Egeo",
        opcionD: "Mar Negro",
        correcta: "b"
    },
    {
        id: 209,
        categoria: "geografia",
        titulo: "¿En qué país está el Gran Cañón?",
        opcionA: "México",
        opcionB: "Canadá",
        opcionC: "Estados Unidos",
        opcionD: "Australia",
        correcta: "c"
    },
    {
        id: 210,
        categoria: "geografia",
        titulo: "¿Qué país tiene la ciudad más poblada del mundo?",
        opcionA: "China",
        opcionB: "Japón",
        opcionC: "India",
        opcionD: "Estados Unidos",
        correcta: "b"
    },
    {
        id: 211,
        categoria: "historia",
        titulo: "¿En qué año Cristóbal Colón llegó a América?",
        opcionA: "1490",
        opcionB: "1492",
        opcionC: "1498",
        opcionD: "1501",
        correcta: "b"
    },
    {
        id: 212,
        categoria: "historia",
        titulo: "¿Quién fue el primer emperador romano?",
        opcionA: "Julio César",
        opcionB: "Nerón",
        opcionC: "Augusto",
        opcionD: "Trajano",
        correcta: "c"
    },
    {
        id: 213,
        categoria: "historia",
        titulo: "¿Qué guerra tuvo lugar entre 1914 y 1918?",
        opcionA: "La Segunda Guerra Mundial",
        opcionB: "La Guerra Fría",
        opcionC: "La Primera Guerra Mundial",
        opcionD: "La Guerra de los Cien Años",
        correcta: "c"
    },
    {
        id: 214,
        categoria: "historia",
        titulo: "¿Quién pintó la famosa obra 'La Última Cena'?",
        opcionA: "Miguel Ángel",
        opcionB: "Leonardo da Vinci",
        opcionC: "Rafael",
        opcionD: "Donatello",
        correcta: "b"
    },
    {
        id: 215,
        categoria: "historia",
        titulo: "¿En qué año cayó el Imperio Romano de Occidente?",
        opcionA: "476 d.C.",
        opcionB: "1066 d.C.",
        opcionC: "1215 d.C.",
        opcionD: "1453 d.C.",
        correcta: "a"
    },
    {
        id: 216,
        categoria: "historia",
        titulo: "¿Cuál era el nombre del faraón más joven de Egipto?",
        opcionA: "Ramsés II",
        opcionB: "Tutankamón",
        opcionC: "Akhenatón",
        opcionD: "Cleopatra",
        correcta: "b"
    },
    {
        id: 217,
        categoria: "historia",
        titulo: "¿Quién fue el líder de la Revolución Bolchevique en Rusia?",
        opcionA: "José Stalin",
        opcionB: "Vladímir Lenin",
        opcionC: "León Trotski",
        opcionD: "Nicolás II",
        correcta: "b"
    },
    {
        id: 218,
        categoria: "historia",
        titulo: "¿Qué civilización construyó Machu Picchu?",
        opcionA: "Los aztecas",
        opcionB: "Los incas",
        opcionC: "Los mayas",
        opcionD: "Los olmecas",
        correcta: "b"
    },
    {
        id: 219,
        categoria: "historia",
        titulo: "¿Quién fue el presidente de los Estados Unidos durante la Guerra Civil?",
        opcionA: "George Washington",
        opcionB: "Thomas Jefferson",
        opcionC: "Abraham Lincoln",
        opcionD: "Theodore Roosevelt",
        correcta: "c"
    },
    {
        id: 220,
        categoria: "historia",
        titulo: "¿Cuál fue la primera civilización conocida en la historia?",
        opcionA: "Egipcia",
        opcionB: "Mesopotámica",
        opcionC: "China",
        opcionD: "Griega",
        correcta: "b"
    },
    {
        id: 221,
        categoria: "historia",
        titulo: "¿En qué año se firmó la Declaración de Independencia de los Estados Unidos?",
        opcionA: "1775",
        opcionB: "1776",
        opcionC: "1783",
        opcionD: "1787",
        correcta: "b"
    },
    {
        id: 222,
        categoria: "historia",
        titulo: "¿Qué famoso barco se hundió en su viaje inaugural en 1912?",
        opcionA: "Titanic",
        opcionB: "Lusitania",
        opcionC: "Britannic",
        opcionD: "Queen Mary",
        correcta: "a"
    },
    {
        id: 223,
        categoria: "historia",
        titulo: "¿Quién fue conocido como el Rey Sol?",
        opcionA: "Luis XIV de Francia",
        opcionB: "Carlos V",
        opcionC: "Enrique VIII",
        opcionD: "Napoleón Bonaparte",
        correcta: "a"
    },
    {
        id: 224,
        categoria: "historia",
        titulo: "¿Qué país utilizó por primera vez armas nucleares en una guerra?",
        opcionA: "Alemania",
        opcionB: "Estados Unidos",
        opcionC: "Japón",
        opcionD: "Rusia",
        correcta: "b"
    },
    {
        id: 225,
        categoria: "historia",
        titulo: "¿En qué año terminó la Segunda Guerra Mundial?",
        opcionA: "1944",
        opcionB: "1945",
        opcionC: "1946",
        opcionD: "1947",
        correcta: "b"
    },
    {
        id: 226,
        categoria: "historia",
        titulo: "¿Quién fue el fundador del Imperio Mongol?",
        opcionA: "Kublai Khan",
        opcionB: "Gengis Khan",
        opcionC: "Tamerlán",
        opcionD: "Batu Khan",
        correcta: "b"
    },
    {
        id: 227,
        categoria: "historia",
        titulo: "¿Qué famoso muro cayó en 1989?",
        opcionA: "El Muro de Berlín",
        opcionB: "La Gran Muralla China",
        opcionC: "El Muro de Adriano",
        opcionD: "El Muro de Trump",
        correcta: "a"
    },
    {
        id: 228,
        categoria: "historia",
        titulo: "¿Qué reina inglesa fue apodada la 'Reina Virgen'?",
        opcionA: "María I",
        opcionB: "Victoria I",
        opcionC: "Isabel I",
        opcionD: "Isabel II",
        correcta: "c"
    },
    {
        id: 229,
        categoria: "historia",
        titulo: "¿En qué año comenzó la Revolución Francesa?",
        opcionA: "1789",
        opcionB: "1793",
        opcionC: "1804",
        opcionD: "1812",
        correcta: "a"
    },
    {
        id: 230,
        categoria: "historia",
        titulo: "¿Quién fue el primer presidente de los Estados Unidos?",
        opcionA: "George Washington",
        opcionB: "Thomas Jefferson",
        opcionC: "John Adams",
        opcionD: "Alexander Hamilton",
        correcta: "a"
    },
    {
        id: 231,
        categoria: "historia",
        titulo: "¿Qué evento marcó el inicio de la Edad Media?",
        opcionA: "La caída de Roma",
        opcionB: "La conquista de Constantinopla",
        opcionC: "El descubrimiento de América",
        opcionD: "La Guerra de los Cien Años",
        correcta: "a"
    },
    {
        id: 232,
        categoria: "historia",
        titulo: "¿Qué país europeo fue el primero en abolir la esclavitud?",
        opcionA: "España",
        opcionB: "Francia",
        opcionC: "Reino Unido",
        opcionD: "Dinamarca",
        correcta: "d"
    },
    {
        id: 233,
        categoria: "historia",
        titulo: "¿Qué revolución introdujo la máquina de vapor en la industria?",
        opcionA: "La Revolución Francesa",
        opcionB: "La Revolución Industrial",
        opcionC: "La Revolución Americana",
        opcionD: "La Revolución Científica",
        correcta: "b"
    },
    {
        id: 234,
        categoria: "historia",
        titulo: "¿Quién lideró la independencia de la India del dominio británico?",
        opcionA: "Jawaharlal Nehru",
        opcionB: "Subhas Chandra Bose",
        opcionC: "Mahatma Gandhi",
        opcionD: "Bhagat Singh",
        correcta: "c"
    },
    {
        id: 235,
        categoria: "historia",
        titulo: "¿Cuál fue el primer país en lanzar un satélite artificial al espacio?",
        opcionA: "Estados Unidos",
        opcionB: "Unión Soviética",
        opcionC: "Reino Unido",
        opcionD: "China",
        correcta: "b"
    },
    {
        id: 236,
        categoria: "historia",
        titulo: "¿En qué año ocurrió la Batalla de Waterloo?",
        opcionA: "1804",
        opcionB: "1815",
        opcionC: "1821",
        opcionD: "1830",
        correcta: "b"
    },
    {
        id: 237,
        categoria: "historia",
        titulo: "¿Qué país fue liderado por Benito Mussolini durante la Segunda Guerra Mundial?",
        opcionA: "Alemania",
        opcionB: "España",
        opcionC: "Italia",
        opcionD: "Japón",
        correcta: "c"
    },
    {
        id: 238,
        categoria: "historia",
        titulo: "¿Qué tratado puso fin a la Primera Guerra Mundial?",
        opcionA: "El Tratado de Versalles",
        opcionB: "El Tratado de París",
        opcionC: "El Tratado de Tordesillas",
        opcionD: "El Tratado de Gante",
        correcta: "a"
    },
    {
        id: 239,
        categoria: "historia",
        titulo: "¿Qué evento histórico ocurrió el 6 de junio de 1944?",
        opcionA: "El ataque a Pearl Harbor",
        opcionB: "El Día D, desembarco en Normandía",
        opcionC: "La caída de Berlín",
        opcionD: "La Conferencia de Yalta",
        correcta: "b"
    },
    {
        id: 240,
        categoria: "historia",
        titulo: "¿Qué país fue conocido como Persia hasta 1935?",
        opcionA: "Turquía",
        opcionB: "Irán",
        opcionC: "Irak",
        opcionD: "Afganistán",
        correcta: "b"
    },
    
    
    
    
    
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
if (!localStorage.getItem("puntaje-partida")) { 
    puntajeTotal = 0;
    txtPuntaje.innerHTML = puntajeTotal;
} else { 
    puntajeTotal = parseInt(localStorage.getItem("puntaje-partida"));
    txtPuntaje.innerHTML = puntajeTotal;
}

// Filtramos las preguntas según la categoría seleccionada almacenada en el Local Storage
const categoriaActual = localStorage.getItem("categoria-actual"); 
let preguntasCategoria = preguntas.filter(pregunta => pregunta.categoria === categoriaActual);

// Función para mezclar un array (Fisher-Yates Shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Índice aleatorio entre 0 y i
        [array[i], array[j]] = [array[j], array[i]]; // Intercambia elementos
    }
    return array;
}

// Mezclamos las preguntas antes de empezar el quiz
preguntasCategoria = shuffleArray(preguntasCategoria);

// Función para cargar la siguiente pregunta
function cargarSiguientePregunta(num) {
    const numPregunta = document.querySelector("#num-pregunta"); 
    const txtPregunta = document.querySelector("#txt-pregunta"); 
    const opcionA = document.querySelector("#a"); 
    const opcionB = document.querySelector("#b"); 
    const opcionC = document.querySelector("#c"); 
    const opcionD = document.querySelector("#d");

    // Actualizamos los contenidos de la pregunta y las opciones
    numPregunta.innerHTML = num + 1; 
    txtPregunta.innerHTML = preguntasCategoria[num].titulo; 
    opcionA.innerHTML = preguntasCategoria[num].opcionA; 
    opcionB.innerHTML = preguntasCategoria[num].opcionB; 
    opcionC.innerHTML = preguntasCategoria[num].opcionC; 
    opcionD.innerHTML = preguntasCategoria[num].opcionD; 

    const botonesRespuesta = document.querySelectorAll(".opcion"); 
    botonesRespuesta.forEach(opcion => {
        opcion.removeEventListener("click", (e) => {}); 
        opcion.classList.remove("correcta", "incorrecta", "no-events");
    });

    botonesRespuesta.forEach(opcion => {
        opcion.addEventListener("click", agregarEventListenerBoton); 
    });

    txtPuntaje.classList.remove("efecto");
}

// Función para manejar el evento de clic en las opciones
function agregarEventListenerBoton(e) {
    if (e.currentTarget.id === preguntasCategoria[numPreguntaActual].correcta) {
        e.currentTarget.classList.add("correcta"); 
        puntajeTotal += 100; 
        txtPuntaje.innerHTML = puntajeTotal; 
        localStorage.setItem("puntaje-partida", puntajeTotal); // Guardar puntaje de esta partida
        txtPuntaje.classList.add("efecto"); 
    } else {
        e.currentTarget.classList.add("incorrecta"); 
        const correcta = document.querySelector("#" + preguntasCategoria[numPreguntaActual].correcta); 
        correcta.classList.add("correcta"); 
    }

    const botonesRespuesta = document.querySelectorAll(".opcion");
    botonesRespuesta.forEach(opcion => {
        opcion.classList.add("no-events"); 
    });
}

// Función que se llama al finalizar el quiz
function finalizarQuiz() {
    localStorage.setItem("puntaje-partida", puntajeTotal); 
    location.href = "final.html"; 
}

// Cargamos la primera pregunta al cargar el script
cargarSiguientePregunta(numPreguntaActual);

// Seleccionamos el botón de "Siguiente" y manejamos el evento de clic
const btnSiguiente = document.querySelector("#siguiente");
btnSiguiente.addEventListener("click", () => {
    numPreguntaActual++; 
    if (numPreguntaActual <= 9) { // Ahora el límite es 9 (10 preguntas)
        cargarSiguientePregunta(numPreguntaActual); 
    } else {
        finalizarQuiz(); 
    }
});


