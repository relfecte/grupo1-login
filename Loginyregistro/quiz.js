// quiz.js

const quizData = {
    Historia: [
        { question: "¿Quién fue el primer emperador romano?", options: ["Julio César", "Augusto", "Nerón", "Trajano"], answer: "Augusto" },
        { question: "¿En qué año comenzó la Segunda Guerra Mundial?", options: ["1937", "1938", "1939", "1940"], answer: "1939" },
        { question: "¿Quién escribió 'El Príncipe'?", options: ["Platón", "Maquiavelo", "Aristóteles", "Santo Tomás de Aquino"], answer: "Maquiavelo" },
        { question: "¿En qué año fue la Revolución Francesa?", options: ["1776", "1789", "1812", "1804"], answer: "1789" },
        { question: "¿Qué faraón ordenó la construcción de la Gran Pirámide de Guiza?", options: ["Tutankamón", "Ramsés II", "Keops", "Akhenatón"], answer: "Keops" },
        { question: "¿Cuál era el nombre del barco en el que viajó Charles Darwin?", options: ["HMS Beagle", "HMS Victory", "Endeavour", "Santa María"], answer: "HMS Beagle" },
        { question: "¿Quién fue el primer presidente de Estados Unidos?", options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"], answer: "George Washington" },
        { question: "¿En qué año cayó el Imperio Romano de Occidente?", options: ["410", "476", "500", "330"], answer: "476" },
        { question: "¿Quién fue el autor de 'La Odisea'?", options: ["Homero", "Sófocles", "Eurípides", "Virgilio"], answer: "Homero" },
        { question: "¿Qué líder militar fue conocido como 'El Zorro del Desierto'?", options: ["Rommel", "Montgomery", "Patton", "Eisenhower"], answer: "Rommel" },
        { question: "¿En qué siglo se firmó la Carta Magna?", options: ["X", "XI", "XII", "XIII"], answer: "XIII" },
        { question: "¿Qué país fue gobernado por el zar Nicolás II?", options: ["Rusia", "Alemania", "Francia", "Austria"], answer: "Rusia" },
        { question: "¿Quién fue el último faraón de Egipto?", options: ["Nefertiti", "Tutankamón", "Cleopatra", "Ramsés III"], answer: "Cleopatra" },
        { question: "¿Qué famosa batalla se libró en 1066?", options: ["La Batalla de Hastings", "La Batalla de Agincourt", "La Batalla de Waterloo", "La Batalla de Bannockburn"], answer: "La Batalla de Hastings" },
        { question: "¿Qué rey inglés tenía seis esposas?", options: ["Enrique VII", "Enrique VIII", "Ricardo III", "Eduardo VI"], answer: "Enrique VIII" },
        { question: "¿Quién descubrió América en 1492?", options: ["Vasco da Gama", "Cristóbal Colón", "Fernando de Magallanes", "Américo Vespucio"], answer: "Cristóbal Colón" },
        { question: "¿Quién fue el líder de los bolcheviques durante la Revolución Rusa?", options: ["Stalin", "Lenin", "Trotsky", "Kerensky"], answer: "Lenin" },
        { question: "¿En qué año terminó la Primera Guerra Mundial?", options: ["1917", "1918", "1919", "1920"], answer: "1918" },
        { question: "¿Qué famosa reina británica gobernó durante la era victoriana?", options: ["Isabel I", "Victoria", "María I", "Ana"], answer: "Victoria" },
        { question: "¿Quién fue el dictador de la antigua Roma conocido por ser asesinado el 15 de marzo del 44 a.C.?", options: ["Julio César", "Augusto", "Nerón", "Calígula"], answer: "Julio César" },
        { question: "¿Cuál fue la principal causa de la Guerra de los Cien Años?", options: ["El trono de Francia", "Territorios en Italia", "Disputas comerciales", "Conflictos religiosos"], answer: "El trono de Francia" },
        { question: "¿Qué explorador lideró la primera expedición que circunnavegó el mundo?", options: ["Hernán Cortés", "Cristóbal Colón", "Fernando de Magallanes", "James Cook"], answer: "Fernando de Magallanes" },
        { question: "¿Qué faraón egipcio fue descubierto en 1922 por Howard Carter?", options: ["Tutankamón", "Ramsés II", "Akhenatón", "Keops"], answer: "Tutankamón" },
        { question: "¿Quién fue el primer rey de Inglaterra?", options: ["Aethelstan", "Alfred el Grande", "Canuto", "Harold II"], answer: "Aethelstan" },
        { question: "¿En qué ciudad se firmó el Tratado de Versalles?", options: ["París", "Versalles", "Berlín", "Londres"], answer: "Versalles" },
        { question: "¿Qué civilización antigua construyó Machu Picchu?", options: ["Incas", "Mayas", "Aztecas", "Toltecas"], answer: "Incas" },
        { question: "¿En qué año se fundó la ONU?", options: ["1945", "1946", "1950", "1944"], answer: "1945" },
        { question: "¿Cuál fue el primer país en abolir la esclavitud?", options: ["Estados Unidos", "Gran Bretaña", "Francia", "Haití"], answer: "Haití" },
        { question: "¿Qué famosa ciudad fue destruida por la erupción del monte Vesubio?", options: ["Pompeya", "Roma", "Herculano", "Nápoles"], answer: "Pompeya" },
        { question: "¿Quién pintó la Capilla Sixtina?", options: ["Leonardo da Vinci", "Miguel Ángel", "Rafael", "Donatello"], answer: "Miguel Ángel" }
    ],
    
    Geografía: [
        { question: "¿Cuál es el río más largo del mundo?", options: ["Nilo", "Amazonas", "Yangtsé", "Misisipi"], answer: "Amazonas" },
        { question: "¿Cuál es la montaña más alta del mundo?", options: ["Monte Everest", "K2", "Kangchenjunga", "Lhotse"], answer: "Monte Everest" },
        { question: "¿En qué país se encuentra la Gran Barrera de Coral?", options: ["Brasil", "Australia", "Filipinas", "México"], answer: "Australia" },
        { question: "¿Cuál es el país más grande del mundo por superficie?", options: ["Canadá", "China", "Rusia", "Estados Unidos"], answer: "Rusia" },
        { question: "¿Qué país tiene la mayor cantidad de islas en el mundo?", options: ["Suecia", "Noruega", "Filipinas", "Indonesia"], answer: "Suecia" },
        { question: "¿Cuál es el desierto más grande del mundo?", options: ["Sahara", "Ártico", "Antártico", "Gobi"], answer: "Antártico" },
        { question: "¿En qué continente se encuentra el río Amazonas?", options: ["Asia", "África", "América del Sur", "Europa"], answer: "América del Sur" },
        { question: "¿Cuál es la capital de Canadá?", options: ["Toronto", "Vancouver", "Montreal", "Ottawa"], answer: "Ottawa" },
        { question: "¿Qué país tiene la población más grande del mundo?", options: ["India", "China", "Estados Unidos", "Indonesia"], answer: "China" },
        { question: "¿En qué país se encuentra la ciudad de Dubái?", options: ["Arabia Saudita", "Qatar", "Omán", "Emiratos Árabes Unidos"], answer: "Emiratos Árabes Unidos" },
        { question: "¿Cuál es el país con más volcanes activos?", options: ["Estados Unidos", "Indonesia", "Japón", "Filipinas"], answer: "Indonesia" },
        { question: "¿Cuál es el lago más profundo del mundo?", options: ["Lago Baikal", "Lago Superior", "Lago Victoria", "Lago Tanganica"], answer: "Lago Baikal" },
        { question: "¿En qué país se encuentra la Cordillera de los Andes?", options: ["Argentina", "Chile", "Colombia", "Venezuela"], answer: "Chile" },
        { question: "¿Cuál es la capital de Australia?", options: ["Sídney", "Melbourne", "Perth", "Canberra"], answer: "Canberra" },
        { question: "¿En qué océano se encuentra la isla de Madagascar?", options: ["Océano Atlántico", "Océano Pacífico", "Océano Índico", "Océano Ártico"], answer: "Océano Índico" },
        { question: "¿Qué país está más al norte?", options: ["Noruega", "Islandia", "Rusia", "Canadá"], answer: "Rusia" },
        { question: "¿Cuál es la capital de Japón?", options: ["Osaka", "Kioto", "Tokio", "Nagoya"], answer: "Tokio" },
        { question: "¿Qué país es conocido como 'la tierra de los mil lagos'?", options: ["Canadá", "Suecia", "Finlandia", "Noruega"], answer: "Finlandia" },
        { question: "¿Cuál es el país más pequeño del mundo?", options: ["Mónaco", "Malta", "San Marino", "Ciudad del Vaticano"], answer: "Ciudad del Vaticano" },
        { question: "¿Cuál es el océano más grande del mundo?", options: ["Océano Atlántico", "Océano Índico", "Océano Ártico", "Océano Pacífico"], answer: "Océano Pacífico" },
        { question: "¿Cuál es el país con más fronteras terrestres?", options: ["China", "Rusia", "Brasil", "Alemania"], answer: "China" },
        { question: "¿Cuál es el río más largo de Europa?", options: ["Danubio", "Volga", "Rin", "Elba"], answer: "Volga" },
        { question: "¿En qué continente se encuentra la península de Kamchatka?", options: ["Europa", "Asia", "América del Norte", "Oceanía"], answer: "Asia" },
        { question: "¿Cuál es la capital de Sudáfrica?", options: ["Pretoria", "Ciudad del Cabo", "Bloemfontein", "Johannesburgo"], answer: "Pretoria" },
        { question: "¿Cuál es la ciudad más poblada del mundo?", options: ["Tokio", "Delhi", "Shanghái", "Sao Paulo"], answer: "Tokio" },
        { question: "¿En qué país se encuentra la región de la Toscana?", options: ["Francia", "Italia", "España", "Portugal"], answer: "Italia" },
        { question: "¿Qué mar separa Europa de África?", options: ["Mar Rojo", "Mar Egeo", "Mar Mediterráneo", "Mar Negro"], answer: "Mar Mediterráneo" },
        { question: "¿Cuál es la capital de Tailandia?", options: ["Phuket", "Bangkok", "Chiang Mai", "Pattaya"], answer: "Bangkok" },
        { question: "¿Qué cordillera se extiende por siete países en Sudamérica?", options: ["Montañas Rocosas", "Andes", "Apalaches", "Cordillera Central"], answer: "Andes" },
        { question: "¿Cuál es la isla más grande del mundo?", options: ["Australia", "Groenlandia", "Nueva Guinea", "Borneo"], answer: "Groenlandia" }
    ],
    Ciencia: [
        { question: "¿Cuál es el símbolo químico del oro?", options: ["Au", "Ag", "O", "Gd"], answer: "Au" },
        { question: "¿Qué planeta es conocido como el planeta rojo?", options: ["Júpiter", "Marte", "Venus", "Saturno"], answer: "Marte" },
        { question: "¿Qué gas es esencial para la respiración humana?", options: ["Oxígeno", "Hidrógeno", "Nitrógeno", "Dióxido de carbono"], answer: "Oxígeno" },
        { question: "¿Quién desarrolló la teoría de la relatividad?", options: ["Newton", "Einstein", "Tesla", "Galileo"], answer: "Einstein" },
        { question: "¿Qué elemento tiene el número atómico 1?", options: ["Helio", "Oxígeno", "Hidrógeno", "Carbono"], answer: "Hidrógeno" },
        { question: "¿Cuál es la sustancia más dura conocida por el hombre?", options: ["Diamante", "Oro", "Acero", "Cuarzo"], answer: "Diamante" },
        { question: "¿Cuál es el planeta más grande del sistema solar?", options: ["Saturno", "Neptuno", "Júpiter", "Urano"], answer: "Júpiter" },
        { question: "¿Qué tipo de animal es una ballena?", options: ["Pez", "Reptil", "Anfibio", "Mamífero"], answer: "Mamífero" },
        { question: "¿Cuál es el metal más ligero?", options: ["Oro", "Litio", "Plata", "Magnesio"], answer: "Litio" },
        { question: "¿Cuál es el órgano más grande del cuerpo humano?", options: ["Corazón", "Piel", "Hígado", "Cerebro"], answer: "Piel" },
        { question: "¿Cuál es el elemento más abundante en la corteza terrestre?", options: ["Oxígeno", "Silicio", "Aluminio", "Hierro"], answer: "Oxígeno" },
        { question: "¿Qué tipo de célula carece de núcleo?", options: ["Células procariotas", "Células eucariotas", "Células nerviosas", "Células musculares"], answer: "Células procariotas" },
        { question: "¿Cuál es la velocidad de la luz en el vacío?", options: ["300,000 km/s", "150,000 km/s", "1,000 km/s", "500,000 km/s"], answer: "300,000 km/s" },
        { question: "¿Qué planeta es conocido como el 'planeta rojo'?", options: ["Marte", "Júpiter", "Venus", "Saturno"], answer: "Marte" },
        { question: "¿Quién propuso la teoría de la relatividad?", options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"], answer: "Albert Einstein" },
        { question: "¿Qué órgano es responsable de la producción de insulina?", options: ["Hígado", "Páncreas", "Riñón", "Estómago"], answer: "Páncreas" },
        { question: "¿Cómo se llama la fuerza que nos mantiene en la superficie de la Tierra?", options: ["Magnetismo", "Inercia", "Gravedad", "Centrifugación"], answer: "Gravedad" },
        { question: "¿Cuál es el metal más ligero?", options: ["Aluminio", "Titanio", "Magnesio", "Litio"], answer: "Litio" },
        { question: "¿Qué sustancia química es conocida como el ácido de batería?", options: ["Ácido nítrico", "Ácido sulfúrico", "Ácido acético", "Ácido clorhídrico"], answer: "Ácido sulfúrico" },
        { question: "¿Qué tipo de sangre es conocido como el 'donante universal'?", options: ["A+", "B-", "AB+", "O-"], answer: "O-" },
        { question: "¿Qué científico desarrolló la teoría de la evolución por selección natural?", options: ["Charles Darwin", "Gregor Mendel", "Jean-Baptiste Lamarck", "Alfred Wallace"], answer: "Charles Darwin" },
        { question: "¿Cuál es el hueso más largo del cuerpo humano?", options: ["Húmero", "Fémur", "Tibia", "Radio"], answer: "Fémur" },
        { question: "¿Qué fenómeno natural se mide con la escala de Richter?", options: ["Huracanes", "Tormentas", "Terremotos", "Erupciones volcánicas"], answer: "Terremotos" },
        { question: "¿Qué gas es responsable del efecto invernadero en mayor medida?", options: ["Oxígeno", "Metano", "Dióxido de carbono", "Nitrógeno"], answer: "Dióxido de carbono" },
        { question: "¿Cuál es el planeta más grande del sistema solar?", options: ["Júpiter", "Saturno", "Neptuno", "Tierra"], answer: "Júpiter" },
        { question: "¿Qué tipo de animal es una medusa?", options: ["Pez", "Anfibio", "Cnidario", "Molusco"], answer: "Cnidario" },
        { question: "¿Qué científico es conocido por la ley de la gravitación universal?", options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Stephen Hawking"], answer: "Isaac Newton" },
        { question: "¿Cómo se llama la unidad de frecuencia?", options: ["Hertz", "Newton", "Joule", "Pascal"], answer: "Hertz" },
        { question: "¿Cuál es el animal terrestre más rápido del mundo?", options: ["Guepardo", "Leopardo", "León", "Antílope"], answer: "Guepardo" },
        { question: "¿Cuál es el gas más abundante en la atmósfera terrestre?", options: ["Oxígeno", "Dióxido de carbono", "Nitrógeno", "Hidrógeno"], answer: "Nitrógeno" },
              ],
     Arte: [
        { question: "¿Quién pintó la Mona Lisa?", options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"], answer: "Leonardo da Vinci" },
        { question: "¿En qué país se encuentra el Museo del Louvre?", options: ["Italia", "Francia", "España", "Reino Unido"], answer: "Francia" },
        { question: "¿Qué artista es conocido por pintar 'La noche estrellada'?", options: ["Salvador Dalí", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"], answer: "Vincent van Gogh" },
        { question: "¿Cuál es el nombre del famoso mural de Leonardo da Vinci que representa a Jesús y sus discípulos?", options: ["La última cena", "El nacimiento de Venus", "La creación de Adán", "La persistencia de la memoria"], answer: "La última cena" },
        { question: "¿Qué movimiento artístico es conocido por su uso de formas geométricas y colores brillantes?", options: ["Cubismo", "Impresionismo", "Surrealismo", "Barroco"], answer: "Cubismo" },
        { question: "¿Qué escultor renacentista es conocido por la obra 'David'?", options: ["Miguel Ángel", "Donatello", "Bernini", "Leonardo da Vinci"], answer: "Miguel Ángel" },
        { question: "¿Quién pintó 'Las Meninas'?", options: ["Diego Velázquez", "Francisco de Goya", "El Greco", "Murillo"], answer: "Diego Velázquez" },
        { question: "¿En qué siglo se desarrolló el movimiento impresionista?", options: ["XIX", "XVII", "XVIII", "XX"], answer: "XIX" },
        { question: "¿Quién es conocido como el padre del surrealismo?", options: ["René Magritte", "Salvador Dalí", "Max Ernst", "Joan Miró"], answer: "Salvador Dalí" },
        { question: "¿En qué ciudad se encuentra la Capilla Sixtina?", options: ["Venecia", "Florencia", "Roma", "Milán"], answer: "Roma" },
        { question: "¿Quién pintó 'El grito'?", options: ["Edvard Munch", "Paul Gauguin", "Gustav Klimt", "Henri Matisse"], answer: "Edvard Munch" },
        { question: "¿Qué artista creó el cuadro 'Guernica'?", options: ["Pablo Picasso", "Salvador Dalí", "Diego Rivera", "Joan Miró"], answer: "Pablo Picasso" },
        { question: "¿Qué pintor impresionista es famoso por su serie de nenúfares?", options: ["Claude Monet", "Pierre-Auguste Renoir", "Édouard Manet", "Camille Pissarro"], answer: "Claude Monet" },
        { question: "¿Quién es conocido por sus obras abstractas con formas geométricas y colores primarios?", options: ["Piet Mondrian", "Wassily Kandinsky", "Kazimir Malévich", "Paul Klee"], answer: "Piet Mondrian" },
        { question: "¿Qué artista es conocido por sus autorretratos y su mono de compañía?", options: ["Frida Kahlo", "Georgia O'Keeffe", "Tamara de Lempicka", "Sofonisba Anguissola"], answer: "Frida Kahlo" },
        { question: "¿Qué artista es famoso por sus retratos de mujeres con cuellos alargados?", options: ["Amedeo Modigliani", "Egon Schiele", "Gustav Klimt", "Henri Matisse"], answer: "Amedeo Modigliani" },
        { question: "¿En qué museo se encuentra la obra 'La persistencia de la memoria'?", options: ["Museo del Prado", "MoMA", "Museo del Louvre", "Tate Modern"], answer: "MoMA" },
        { question: "¿Quién es conocido por la escultura 'El Pensador'?", options: ["Auguste Rodin", "Antoine Bourdelle", "Henry Moore", "Constantin Brâncuși"], answer: "Auguste Rodin" },
        { question: "¿Qué técnica usó Georges Seurat en su obra 'Tarde de domingo en la isla de La Grande Jatte'?", options: ["Impresionismo", "Puntillismo", "Surrealismo", "Expresionismo"], answer: "Puntillismo" },
        { question: "¿Quién pintó 'El Jardín de las Delicias'?", options: ["Hieronymus Bosch", "El Greco", "Hans Holbein", "Caravaggio"], answer: "Hieronymus Bosch" },
        { question: "¿Qué pintor flamenco es famoso por 'El matrimonio Arnolfini'?", options: ["Jan van Eyck", "Peter Paul Rubens", "Rembrandt", "Hieronymus Bosch"], answer: "Jan van Eyck" },
        { question: "¿Cuál es el nombre del famoso mural de Diego Rivera que representa la historia de México?", options: ["Sueño de una tarde dominical en la Alameda Central", "La gran ciudad de Tenochtitlán", "El hombre controlador del universo", "La vendedora de flores"], answer: "La gran ciudad de Tenochtitlán" },
        { question: "¿Qué movimiento artístico promovió Andy Warhol?", options: ["Dadaísmo", "Pop Art", "Cubismo", "Impresionismo"], answer: "Pop Art" },
        { question: "¿Quién pintó 'La joven de la perla'?", options: ["Johannes Vermeer", "Rembrandt", "Peter Paul Rubens", "Caravaggio"], answer: "Johannes Vermeer" },
        { question: "¿Cuál es el nombre del famoso arquitecto que diseñó la Sagrada Familia?", options: ["Antoni Gaudí", "Frank Gehry", "Le Corbusier", "Santiago Calatrava"], answer: "Antoni Gaudí" },
        { question: "¿Quién es el autor del mural 'Sueño de una tarde dominical en la Alameda Central'?", options: ["Diego Rivera", "José Clemente Orozco", "David Alfaro Siqueiros", "Rufino Tamayo"], answer: "Diego Rivera" },
        { question: "¿Qué movimiento artístico se asocia con Henri Matisse?", options: ["Fauvismo", "Cubismo", "Impresionismo", "Dadaísmo"], answer: "Fauvismo" },
        { question: "¿Qué pintor fue amigo y rival de Pablo Picasso?", options: ["Georges Braque", "Marc Chagall", "Henri Matisse", "Salvador Dalí"], answer: "Georges Braque" },
        { question: "¿Quién pintó 'El caballero de la mano en el pecho'?", options: ["El Greco", "Francisco de Goya", "Diego Velázquez", "Bartolomé Esteban Murillo"], answer: "El Greco" },
        { question: "¿Qué escultor creó 'La piedad'?", options: ["Miguel Ángel", "Donatello", "Bernini", "Canova"], answer: "Miguel Ángel" },
        
            ],
    Cine_y_series: [
        { question: "¿Quién dirigió 'Pulp Fiction'?", options: ["Martin Scorsese", "Quentin Tarantino", "Steven Spielberg", "Francis Ford Coppola"], answer: "Quentin Tarantino" },
        { question: "¿Cuál es la película más taquillera de la historia (2023)?", options: ["Avatar", "Vengadores: Endgame", "Titanic", "Star Wars: El despertar de la Fuerza"], answer: "Avatar" },
        { question: "¿Qué actor interpreta a Jack Sparrow en 'Piratas del Caribe'?", options: ["Johnny Depp", "Orlando Bloom", "Brad Pitt", "Hugh Jackman"], answer: "Johnny Depp" },
        { question: "¿Cuál es la primera película de la saga 'Star Wars'?", options: ["El Imperio contraataca", "La amenaza fantasma", "Una nueva esperanza", "El retorno del Jedi"], answer: "Una nueva esperanza" },
        { question: "¿Quién dirigió la trilogía de 'El Señor de los Anillos'?", options: ["Christopher Nolan", "James Cameron", "Peter Jackson", "Ridley Scott"], answer: "Peter Jackson" },
        { question: "¿En qué serie aparece el personaje de Walter White?", options: ["Mad Men", "Breaking Bad", "Los Soprano", "The Wire"], answer: "Breaking Bad" },
        { question: "¿Quién interpreta a Iron Man en el Universo Cinematográfico de Marvel?", options: ["Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo", "Chris Evans"], answer: "Robert Downey Jr." },
        { question: "¿Cuál es el nombre real de Batman?", options: ["Clark Kent", "Tony Stark", "Bruce Wayne", "Peter Parker"], answer: "Bruce Wayne" },
        { question: "¿En qué película se escucha la frase 'Que la fuerza te acompañe'?", options: ["Star Wars", "El Señor de los Anillos", "Matrix", "Harry Potter"], answer: "Star Wars" },
        { question: "¿Qué actor protagoniza la saga de 'Misión Imposible'?", options: ["Matt Damon", "Brad Pitt", "Tom Cruise", "Leonardo DiCaprio"], answer: "Tom Cruise" },
        { question: "¿Cuál es la película de animación de Pixar que narra la historia de una familia de superhéroes?", options: ["Monsters, Inc.", "Los Increíbles", "Toy Story", "Buscando a Nemo"], answer: "Los Increíbles" },
        { question: "¿Quién es el actor principal de 'Gladiator'?", options: ["Russell Crowe", "Brad Pitt", "Tom Hanks", "Hugh Jackman"], answer: "Russell Crowe" },
        { question: "¿En qué película aparece el personaje de Hannibal Lecter?", options: ["Seven", "El silencio de los inocentes", "Psicosis", "El exorcista"], answer: "El silencio de los inocentes" },
        { question: "¿Cuál es el nombre del director de 'Titanic' y 'Avatar'?", options: ["Steven Spielberg", "James Cameron", "Peter Jackson", "Ridley Scott"], answer: "James Cameron" },
        { question: "¿Qué serie popular comienza con la desaparición de un niño llamado Will Byers?", options: ["Dark", "Stranger Things", "Twin Peaks", "The OA"], answer: "Stranger Things" },
        { question: "¿Qué actriz ganó el Óscar por su papel en 'La La Land'?", options: ["Emma Watson", "Emma Stone", "Jennifer Lawrence", "Scarlett Johansson"], answer: "Emma Stone" },
        { question: "¿Qué película de Quentin Tarantino tiene como personajes a Vincent Vega y Mia Wallace?", options: ["Reservoir Dogs", "Django Unchained", "Pulp Fiction", "Kill Bill"], answer: "Pulp Fiction" },
        { question: "¿Qué serie se centra en la vida del mafioso Tony Soprano?", options: ["The Sopranos", "Breaking Bad", "The Wire", "Boardwalk Empire"], answer: "The Sopranos" },
        { question: "¿En qué película se usa la frase 'Nadie pone a Baby en una esquina'?", options: ["Footloose", "Flashdance", "Dirty Dancing", "Grease"], answer: "Dirty Dancing" },
        { question: "¿Quién interpretó al personaje de Forrest Gump?", options: ["Tom Hanks", "Robin Williams", "Kevin Costner", "Richard Gere"], answer: "Tom Hanks" },
        { question: "¿Qué película protagoniza un tiburón gigante que aterroriza una playa?", options: ["Tiburón", "Abyss", "Meg", "Piraña"], answer: "Tiburón" },
        { question: "¿Quién protagonizó la película de 1999 'The Matrix'?", options: ["Brad Pitt", "Keanu Reeves", "Tom Cruise", "Johnny Depp"], answer: "Keanu Reeves" },
        { question: "¿Cuál es la serie donde aparece el personaje Tyrion Lannister?", options: ["Vikingos", "Los Tudor", "Juego de Tronos", "The Witcher"], answer: "Juego de Tronos" },
        { question: "¿Quién dirigió la película 'El laberinto del fauno'?", options: ["Guillermo del Toro", "Alejandro González Iñárritu", "Pedro Almodóvar", "Alfonso Cuarón"], answer: "Guillermo del Toro" },
        { question: "¿En qué película de Disney aparece el personaje de Scar?", options: ["Aladdín", "Hércules", "El Rey León", "Mulan"], answer: "El Rey León" },
        { question: "¿Qué actor ganó el Óscar por su papel en 'Dallas Buyers Club'?", options: ["Leonardo DiCaprio", "Matthew McConaughey", "Jared Leto", "Christian Bale"], answer: "Matthew McConaughey" },
        { question: "¿Qué actor es conocido por sus papeles de Jack Dawson y Jordan Belfort?", options: ["Matt Damon", "Leonardo DiCaprio", "Brad Pitt", "Robert Pattinson"], answer: "Leonardo DiCaprio" },
        { question: "¿Qué película de Alfred Hitchcock está protagonizada por un hombre que es acusado erróneamente de asesinato?", options: ["Psicosis", "La ventana indiscreta", "Con la muerte en los talones", "Los pájaros"], answer: "Con la muerte en los talones" },
        { question: "¿Cuál es la serie en la que un grupo de adolescentes lidia con la llegada de monstruos y dimensiones paralelas?", options: ["The OA", "Stranger Things", "Dark", "The Umbrella Academy"], answer: "Stranger Things" },
        { question: "¿Qué película cuenta la historia de la banda Queen y su cantante Freddie Mercury?", options: ["Rocketman", "Walk the Line", "Bohemian Rhapsody", "The Doors"], answer: "Bohemian Rhapsody" }
            ],
    Literatura: [
        { question: "¿Quién escribió 'Don Quijote de la Mancha'?", options: ["Miguel de Cervantes", "Gabriel García Márquez", "Lope de Vega", "Benito Pérez Galdós"], answer: "Miguel de Cervantes" },
        { question: "¿En qué país nació el escritor Gabriel García Márquez?", options: ["México", "Colombia", "Argentina", "Chile"], answer: "Colombia" },
        { question: "¿Cuál es la obra más famosa de Homero?", options: ["La Eneida", "La Ilíada", "Los trabajos y los días", "La Divina Comedia"], answer: "La Ilíada" },
        { question: "¿Quién es el autor de 'Cien años de soledad'?", options: ["Pablo Neruda", "Julio Cortázar", "Gabriel García Márquez", "Mario Vargas Llosa"], answer: "Gabriel García Márquez" },
        { question: "¿Qué poeta escribió 'La Divina Comedia'?", options: ["Dante Alighieri", "Virgilio", "Boccaccio", "Petrarca"], answer: "Dante Alighieri" },
        { question: "¿Cuál es el nombre del detective creado por Arthur Conan Doyle?", options: ["Hércules Poirot", "Miss Marple", "Sherlock Holmes", "Philip Marlowe"], answer: "Sherlock Holmes" },
        { question: "¿Qué obra escribió William Shakespeare sobre dos amantes desafortunados?", options: ["Hamlet", "Macbeth", "Romeo y Julieta", "Otelo"], answer: "Romeo y Julieta" },
        { question: "¿En qué siglo se escribió 'El Cantar de mio Cid'?", options: ["X", "XI", "XII", "XIII"], answer: "XII" },
        { question: "¿Quién escribió 'Matar a un ruiseñor'?", options: ["Truman Capote", "Harper Lee", "J.D. Salinger", "John Steinbeck"], answer: "Harper Lee" },
        { question: "¿Qué autor escribió la serie de libros 'Canción de hielo y fuego'?", options: ["J.R.R. Tolkien", "George R.R. Martin", "C.S. Lewis", "Patrick Rothfuss"], answer: "George R.R. Martin" },
        { question: "¿Quién es el autor de 'El Principito'?", options: ["Antoine de Saint-Exupéry", "Jean-Paul Sartre", "Victor Hugo", "Albert Camus"], answer: "Antoine de Saint-Exupéry" },
        { question: "¿Cuál es la obra más conocida de Franz Kafka?", options: ["El proceso", "La metamorfosis", "América", "El castillo"], answer: "La metamorfosis" },
        { question: "¿Quién escribió 'Orgullo y prejuicio'?", options: ["Charlotte Brontë", "Emily Brontë", "Jane Austen", "Mary Shelley"], answer: "Jane Austen" },
        { question: "¿Qué novela de George Orwell describe un futuro distópico controlado por un gobierno totalitario?", options: ["1984", "Rebelión en la granja", "Un mundo feliz", "Fahrenheit 451"], answer: "1984" },
        { question: "¿Qué libro de J.R.R. Tolkien narra la historia de Bilbo Bolsón?", options: ["El Silmarillion", "El Hobbit", "El Señor de los Anillos", "Los Hijos de Húrin"], answer: "El Hobbit" },
        { question: "¿Quién es el autor de la saga de 'Harry Potter'?", options: ["J.K. Rowling", "Philip Pullman", "Suzanne Collins", "Rick Riordan"], answer: "J.K. Rowling" },
        { question: "¿Qué novela de Ernest Hemingway tiene como escenario la Guerra Civil Española?", options: ["El viejo y el mar", "Por quién doblan las campanas", "Adiós a las armas", "Fiesta"], answer: "Por quién doblan las campanas" },
        { question: "¿Quién escribió 'El nombre de la rosa'?", options: ["Umberto Eco", "José Saramago", "Mario Vargas Llosa", "Italo Calvino"], answer: "Umberto Eco" },
        { question: "¿Qué obra de teatro escrita por Samuel Beckett es famosa por su minimalismo y diálogo existencialista?", options: ["Esperando a Godot", "La casa de Bernarda Alba", "La cantante calva", "Final de partida"], answer: "Esperando a Godot" },
        { question: "¿Quién escribió la trilogía 'Millennium'?", options: ["Stieg Larsson", "Henning Mankell", "Jo Nesbø", "Camilla Läckberg"], answer: "Stieg Larsson" },
        { question: "¿Qué autor ruso escribió 'Crimen y castigo'?", options: ["Lev Tolstói", "Fiódor Dostoyevski", "Nikolái Gógol", "Antón Chéjov"], answer: "Fiódor Dostoyevski" },
        { question: "¿Qué novela comienza con la frase 'Todos los animales son iguales, pero algunos son más iguales que otros'?", options: ["Rebelión en la granja", "1984", "La granja de los animales", "Un mundo feliz"], answer: "Rebelión en la granja" },
        { question: "¿Quién escribió 'El guardián entre el centeno'?", options: ["F. Scott Fitzgerald", "J.D. Salinger", "John Steinbeck", "William Golding"], answer: "J.D. Salinger" },
        { question: "¿Quién escribió 'Los miserables'?", options: ["Alexandre Dumas", "Emile Zola", "Victor Hugo", "Honoré de Balzac"], answer: "Victor Hugo" },
        { question: "¿En qué novela aparece el personaje de Gregor Samsa?", options: ["El proceso", "La metamorfosis", "América", "El castillo"], answer: "La metamorfosis" },
        { question: "¿Qué autor argentino escribió 'El Aleph'?", options: ["Julio Cortázar", "Jorge Luis Borges", "Adolfo Bioy Casares", "Ernesto Sabato"], answer: "Jorge Luis Borges" },
        { question: "¿Quién es el autor de 'La sombra del viento'?", options: ["Carlos Ruiz Zafón", "Javier Marías", "Arturo Pérez-Reverte", "Almudena Grandes"], answer: "Carlos Ruiz Zafón" },
        { question: "¿Cuál es la obra más conocida de Mary Shelley?", options: ["El último hombre", "Valperga", "Frankenstein", "Mathilda"], answer: "Frankenstein" },
        { question: "¿Qué escritor francés escribió 'Los tres mosqueteros'?", options: ["Victor Hugo", "Jules Verne", "Alexandre Dumas", "Stendhal"], answer: "Alexandre Dumas" },
        { question: "¿Qué novela de Julio Verne narra un viaje al centro de la Tierra?", options: ["20.000 leguas de viaje submarino", "La vuelta al mundo en 80 días", "Viaje al centro de la Tierra", "De la Tierra a la Luna"], answer: "Viaje al centro de la Tierra" }
    ],
    Deporte: [
        { question: "¿En qué deporte se usa una raqueta y una pelota?", options: ["Fútbol", "Béisbol", "Tenis", "Voleibol"], answer: "Tenis" },
        { question: "¿Cuántos jugadores tiene un equipo de fútbol en el campo?", options: ["10", "11", "12", "13"], answer: "11" },
        { question: "¿Quién ha ganado más títulos de Grand Slam en tenis masculino?", options: ["Rafael Nadal", "Novak Djokovic", "Roger Federer", "Pete Sampras"], answer: "Novak Djokovic" },
        { question: "¿Cuál es la máxima competición de fútbol a nivel de selecciones?", options: ["Eurocopa", "Copa América", "Copa del Mundo", "Copa Confederaciones"], answer: "Copa del Mundo" },
        { question: "¿En qué deporte se compite en un velódromo?", options: ["Natación", "Atletismo", "Ciclismo", "Patinaje"], answer: "Ciclismo" },
        { question: "¿Quién fue el boxeador apodado 'El más grande'?", options: ["Mike Tyson", "Joe Frazier", "Muhammad Ali", "Rocky Marciano"], answer: "Muhammad Ali" },
        { question: "¿En qué ciudad se celebraron los Juegos Olímpicos de 2012?", options: ["Beijing", "Atenas", "Londres", "Río de Janeiro"], answer: "Londres" },
        { question: "¿Qué jugador de baloncesto es conocido como 'Air Jordan'?", options: ["LeBron James", "Kobe Bryant", "Michael Jordan", "Shaquille O'Neal"], answer: "Michael Jordan" },
        { question: "¿Cuál es la distancia de un maratón?", options: ["25 km", "42 km", "50 km", "60 km"], answer: "42 km" },
        { question: "¿Cuál es el nombre del estadio del FC Barcelona?", options: ["Santiago Bernabéu", "Wanda Metropolitano", "Camp Nou", "San Siro"], answer: "Camp Nou" },
        { question: "¿Qué país ganó la Copa del Mundo de fútbol en 2018?", options: ["Alemania", "Brasil", "Francia", "Argentina"], answer: "Francia" },
        { question: "¿En qué deporte se compite por el Trofeo Stanley?", options: ["Béisbol", "Hockey sobre hielo", "Fútbol americano", "Baloncesto"], answer: "Hockey sobre hielo" },
        { question: "¿Cuál es el equipo de béisbol más famoso de Nueva York?", options: ["Mets", "Red Sox", "Yankees", "Dodgers"], answer: "Yankees" },
        { question: "¿Quién es considerado el mejor futbolista de la historia según la FIFA?", options: ["Lionel Messi", "Diego Maradona", "Pelé", "Cristiano Ronaldo"], answer: "Pelé" },
        { question: "¿Qué nadador ha ganado la mayor cantidad de medallas olímpicas?", options: ["Ian Thorpe", "Ryan Lochte", "Michael Phelps", "Mark Spitz"], answer: "Michael Phelps" },
        { question: "¿Qué país es famoso por su selección de cricket?", options: ["Australia", "Francia", "Rusia", "Japón"], answer: "Australia" },
        { question: "¿Quién es el piloto de F1 con más campeonatos ganados?", options: ["Ayrton Senna", "Michael Schumacher", "Lewis Hamilton", "Sebastian Vettel"], answer: "Lewis Hamilton" },
        { question: "¿En qué deporte destaca la jugada llamada 'mate'?", options: ["Tenis", "Voleibol", "Baloncesto", "Bádminton"], answer: "Baloncesto" },
        { question: "¿Cuál es el sobrenombre de la selección de rugby de Nueva Zelanda?", options: ["Wallabies", "Pumas", "Springboks", "All Blacks"], answer: "All Blacks" },
        { question: "¿Qué es el 'Tour de Francia'?", options: ["Un maratón", "Una carrera de natación", "Una competición ciclista", "Un evento de atletismo"], answer: "Una competición ciclista" },
        { question: "¿Qué disciplina combina esquí de fondo y tiro con rifle?", options: ["Biatlón", "Esquí alpino", "Combinada nórdica", "Slalom"], answer: "Biatlón" },
        { question: "¿En qué deporte compitió Usain Bolt?", options: ["Natación", "Atletismo", "Ciclismo", "Gimnasia"], answer: "Atletismo" },
        { question: "¿Qué deporte se juega en una cancha y utiliza una pelota y un aro?", options: ["Balonmano", "Baloncesto", "Voleibol", "Béisbol"], answer: "Baloncesto" },
        { question: "¿Qué deporte practican los hermanos Serena y Venus Williams?", options: ["Bádminton", "Tenis", "Voleibol", "Gimnasia"], answer: "Tenis" },
        { question: "¿Cuál es el término para tres goles anotados por un mismo jugador en un partido de fútbol?", options: ["Doble", "Hattrick", "Triplete", "Remontada"], answer: "Hattrick" },
        { question: "¿Qué jugador de baloncesto es conocido por su número 23 en los Chicago Bulls?", options: ["LeBron James", "Kobe Bryant", "Michael Jordan", "Magic Johnson"], answer: "Michael Jordan" },
        { question: "¿En qué año se celebraron los primeros Juegos Olímpicos modernos?", options: ["1896", "1900", "1924", "1932"], answer: "1896" },
        { question: "¿Qué boxeador es conocido por la frase 'Float like a butterfly, sting like a bee'?", options: ["George Foreman", "Mike Tyson", "Muhammad Ali", "Floyd Mayweather"], answer: "Muhammad Ali" },
        { question: "¿En qué país se celebraron los Juegos Olímpicos de 1968?", options: ["Japón", "México", "Estados Unidos", "Alemania"], answer: "México" },
        { question: "¿Qué selección de fútbol ha ganado el mayor número de Copas del Mundo?", options: ["Italia", "Brasil", "Argentina", "Alemania"], answer: "Brasil" },
]
};




let currentQuestionIndex = 0;
let score = 0;
let timer;
const countdownElement = document.getElementById("countdown");
const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");
const submitBtn = document.getElementById("submit-btn");
const nextBtnContainer = document.getElementById("next-btn-container");
const nextBtn = document.getElementById("next-btn");
const scoreContainer = document.getElementById("score-container");
const finalScoreElement = document.getElementById("final-score");

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("btn", "btn-outline-primary", "mb-2");
        button.onclick = () => selectOption(button);
        optionsContainer.appendChild(button);
    });

    startTimer(5);
}

function selectOption(selectedButton) {
    Array.from(optionsContainer.children).forEach(button => {
        button.disabled = true;
        button.classList.remove("btn-outline-primary");
    });
    selectedButton.classList.add("selected");
}

function startTimer(seconds) {
    let timeLeft = seconds;
    countdownElement.textContent = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        countdownElement.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            submitBtn.click();
        }
    }, 1000);
}

submitBtn.addEventListener("click", () => {
    clearInterval(timer);
    const selectedButton = document.querySelector(".selected");

    if (selectedButton) {
        const selectedAnswer = selectedButton.textContent;
        const correctAnswer = quizData[currentQuestionIndex].answer;

        if (selectedAnswer === correctAnswer) {
            feedbackElement.textContent = "¡Correcto!";
            feedbackElement.style.color = "green";
            score++;
        } else {
            feedbackElement.textContent = `Incorrecto. La respuesta correcta es: ${correctAnswer}`;
            feedbackElement.style.color = "red";
        }

        nextBtnContainer.style.display = "block";
        submitBtn.style.display = "none";
    } else {
        feedbackElement.textContent = "Por favor, selecciona una opción.";
        feedbackElement.style.color = "orange";
    }
});

nextBtn.addEventListener("click", () => {
    feedbackElement.textContent = "";
    nextBtnContainer.style.display = "none";
    submitBtn.style.display = "block";

    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        displayScore();
    }
});

function displayScore() {
    document.getElementById("quiz-container").style.display = "none";
    scoreContainer.style.display = "block";
    finalScoreElement.textContent = `Tu puntuación es ${score} de ${quizData.length}`;
}

// Función para obtener el valor de un parámetro de la URL
function getCategoryFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('category'); // Devuelve el valor del parámetro 'category'
}

document.addEventListener('DOMContentLoaded', () => {
    const category = getCategoryFromUrl();
    
    if (category) {
        console.log('Categoría seleccionada:', category);
        showQuestionsForCategory(category); // Muestra las preguntas según la categoría
    }
});


// Inicializar la primera pregunta
loadQuestion();
