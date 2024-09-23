
// ID botón comenzar, div inicio, input nombre
const btnComenzar = document.getElementById("btn")
const divInicio = document.getElementById("inicio")
const nombre = document.getElementById("nombre")
// ID del error
const divError = document.getElementById("error") 
// Contador de preguntas
let contador = 1
// lista de preguntas ya hechas
let listaDePreguntas = []
// Preguntas acertadas
let acertadas = 0

// Cartel de alerta
function alerta(msg){
    // Quitar display none
    divError.style.display = "block"
    
    // Agregar dentro del div las etiquetas para el error
    divError.innerHTML += `
        <div id="cardAnim">
            <h2>${msg}</h2>
            <button class="btn" id="btnError">Aceptar</button>
        </div>`
    
    // Animación de mostrar
    const cardAnim = document.getElementById("cardAnim")
    // Ejecutar función después de que pase 0 segundos
    setTimeout(function() {
        cardAnim.style.transform = 'scale(1)';
    }, 0);

    // ID botón de aceptar
    const btnError = document.getElementById("btnError")
    // Al hacer click en el botón quitar cartel
    btnError.addEventListener("click", function(){
        // Poner display none
        divError.style.display = "none"
        // Quitar todas las etiquetas
        divError.innerHTML = ""
    }) 
}

// Alerta de confirmar salir
function alertaConfirmSalir(){
    // Quitar display none
    divError.style.display = "block"

    // Agregar dentro del div las etiquetas para la pregunta
    divError.innerHTML += `
    <div id="cardAnim">
        <h2>¿Seguro que quieres volver al inicio?</h2>
        <button class="btn btnConfirm" value="si">Si</button>
        <button class="btn btnConfirm" value="no">No</button>
    </div>`

    // Animación de mostrar
    const cardAnim = document.getElementById("cardAnim")
    // Ejecutar función después de que pase 0 segundos
    setTimeout(function() {
        cardAnim.style.transform = 'scale(1)';
    }, 0);

    // Obtener botones de si y no
    const btnConfirm = document.getElementsByClassName("btnConfirm")
    // Recorrer los botones
    for(let i=0; i<btnConfirm.length; i++){
        btnConfirm[i].addEventListener("click", function(){
            // Retornar verdadero o falso
            if(btnConfirm[i].value == "no"){
                // Poner display none
                divError.style.display = "none"
                // Quitar todas las etiquetas
                divError.innerHTML = ""
            }else if(btnConfirm[i].value == "si"){
                // Volver al inicio
                location.href ="./index.html"
            }
        })
    }
}

// Obtener pregunta
function genPregunta(listaDePreguntas){

    // Preguntas
    const preguntas = [
        '¿Cuál es el plato típico uruguayo?',
        '¿Quién es considerado el "Padre de la Patria" en Uruguay?',
        '¿Qué bebida es tradicional en Uruguay?',
        '¿Cuál es el río que separa Uruguay de Argentina?',
        '¿Qué club de fútbol ha ganado más campeonatos uruguayos?',
        '¿Qué ciudad uruguaya es conocida por su festival de jazz?',
        '¿Cuál es el nombre de la moneda oficial de Uruguay?',
        '¿Cuál es la fecha de la Declaración de la Independencia de Uruguay?',
        '¿Qué escritor uruguayo es famoso por obras como Cuentos de la Selva?',
        '¿Qué bebida alcohólica es muy popular en Uruguay?',
        '¿Cuál es el nombre del estadio de fútbol más importante de Uruguay?',
        '¿Qué figura política fue presidente de Uruguay entre 2010 y 2015?',
        '¿Cuál es la capital de Uruguay?',
        '¿Qué dulce típico se utiliza mucho en la repostería uruguaya?',
        '¿Qué famoso balneario uruguayo atrae a turistas de todo el mundo?',
        '¿Cuál es el género musical típico del Carnaval uruguayo?',
        '¿Qué país limita al norte con Uruguay?',
        '¿En qué año Uruguay ganó su primer Mundial de Fútbol?',
        '¿Cómo se llama la avenida principal de Montevideo?',
        '¿Qué animal es representativo de Uruguay y aparece en su escudo?',
        '¿Qué postre es típico en las fiestas uruguayas?',
        '¿Cuál es la lengua oficial de Uruguay?',
        '¿Qué jugador uruguayo es uno de los máximos goleadores de la selección?',
        '¿Cuál es el departamento más poblado de Uruguay?',
        '¿Qué país colonizó inicialmente a Uruguay?',
        '¿En qué departamento se celebra anualmente el Festival de la Primavera en Uruguay?',
        '¿Qué deporte es el más popular de Uruguay?',
        '¿Cuál es el himno nacional de Uruguay?',
        '¿Qué escritor uruguayo escribió La Tregua?',
        '¿Cuál es el pico más alto de Uruguay?',
        '¿Qué tipo de árbol es representativo de Uruguay y figura en su escudo?',
        '¿Qué color predomina en la bandera de Uruguay?',
        '¿Cuál es el nombre del principal aeropuerto internacional de Uruguay?',
        '¿Qué figura histórica se conoce como el "Protector de los Pueblos Libres"?',
        '¿Cuál es una de las marcas de cerveza más populares en Uruguay?',
        '¿Qué planta es famosa por su flor roja y es la flor nacional de Uruguay?',
        '¿Qué dulce es una especialidad del departamento de Colonia?',
        '¿Cómo se llama la represa más grande compartida entre Uruguay y Argentina?',
        '¿En qué año fue creada la Universidad de la República?',
        '¿Qué escritor uruguayo es autor de El libro de los abrazos?',
        '¿Cuál es el nombre del presidente que asumió el cargo en 2020?',
        '¿Qué año se legalizó el matrimonio igualitario en Uruguay?',
        '¿Cuál es el nombre del departamento donde se encuentra Cabo Polonio?',
        '¿Qué famoso músico uruguayo compuso la canción Al otro lado del río?',
        '¿Qué puerto es considerado el más importante de Uruguay?',
        '¿Qué mes se celebra la Noche de la Nostalgia?',
        '¿Cuál es el carnaval más largo del mundo?',
        '¿Qué jugador uruguayo ganó la Bota de Oro en el Mundial de 2010?',
        '¿Qué día se celebra la Jura de la Constitución en Uruguay?',
        '¿Qué comida rápida es muy popular en Uruguay?'
    ]

    // Generar pregunta
    let preguntaGenerada = preguntas[Math.floor(Math.random() * preguntas.length)]
    // Está esa pregunta en la lista de preguntas?
    // Si está, genera otra y repite hasta que no esté
    while (listaDePreguntas.includes(preguntaGenerada)) {
        preguntaGenerada = preguntas[Math.floor(Math.random() * preguntas.length)]
    }

    // Elegir pregunta random
    return preguntaGenerada;
}
// Obtener respuesta
function genRespuestaCorrecta(pregunta){
    // Respuesta a la pregunta
    const respuestaCorrecta = {
        '¿Cuál es el plato típico uruguayo?': 'Asado',
        '¿Quién es considerado el "Padre de la Patria" en Uruguay?': 'José Gervasio Artigas',
        '¿Qué bebida es tradicional en Uruguay?': 'Mate',
        '¿Cuál es el río que separa Uruguay de Argentina?': 'Río Uruguay',
        '¿Qué club de fútbol ha ganado más campeonatos uruguayos?': 'Club Nacional de Football',
        '¿Qué ciudad uruguaya es conocida por su festival de jazz?': 'Punta del Este',
        '¿Cuál es el nombre de la moneda oficial de Uruguay?': 'Peso uruguayo',
        '¿Cuál es la fecha de la Declaración de la Independencia de Uruguay?': '25 de agosto de 1825',
        '¿Qué escritor uruguayo es famoso por obras como Cuentos de la Selva?': 'Horacio Quiroga',
        '¿Qué bebida alcohólica es muy popular en Uruguay?': 'Cerveza',
        '¿Cuál es el nombre del estadio de fútbol más importante de Uruguay?': 'Estadio Centenario',
        '¿Qué figura política fue presidente de Uruguay entre 2010 y 2015?': 'José Mujica',
        '¿Cuál es la capital de Uruguay?': 'Montevideo',
        '¿Qué dulce típico se utiliza mucho en la repostería uruguaya?': 'Dulce de leche',
        '¿Qué famoso balneario uruguayo atrae a turistas de todo el mundo?': 'Punta del Este',
        '¿Cuál es el género musical típico del Carnaval uruguayo?': 'Candombe',
        '¿Qué país limita al norte con Uruguay?': 'Brasil',
        '¿En qué año Uruguay ganó su primer Mundial de Fútbol?': '1930',
        '¿Cómo se llama la avenida principal de Montevideo?': '18 de Julio',
        '¿Qué animal es representativo de Uruguay y aparece en su escudo?': 'Caballo',
        '¿Qué postre es típico en las fiestas uruguayas?': 'Chajá',
        '¿Cuál es la lengua oficial de Uruguay?': 'Español',
        '¿Qué jugador uruguayo es uno de los máximos goleadores de la selección?': 'Luis Suárez',
        '¿Cuál es el departamento más poblado de Uruguay?': 'Montevideo',
        '¿Qué país colonizó inicialmente a Uruguay?': 'España',
        '¿En qué departamento se celebra anualmente el Festival de la Primavera en Uruguay?': 'Soriano',
        '¿Qué deporte es el más popular de Uruguay?': 'Fútbol',
        '¿Cuál es el himno nacional de Uruguay?': '"Orientales, la Patria o la tumba"',
        '¿Qué escritor uruguayo escribió La Tregua?': 'Mario Benedetti',
        '¿Cuál es el pico más alto de Uruguay?': 'Cerro Catedral',
        '¿Qué tipo de árbol es representativo de Uruguay y figura en su escudo?': 'Palma',
        '¿Qué color predomina en la bandera de Uruguay?': 'Blanco',
        '¿Cuál es el nombre del principal aeropuerto internacional de Uruguay?': 'Aeropuerto Internacional de Carrasco',
        '¿Qué figura histórica se conoce como el "Protector de los Pueblos Libres"?': 'José Artigas',
        '¿Cuál es una de las marcas de cerveza más populares en Uruguay?': 'Pilsen',
        '¿Qué planta es famosa por su flor roja y es la flor nacional de Uruguay?': 'Ceibo',
        '¿Qué dulce es una especialidad del departamento de Colonia?': 'Alfajores',
        '¿Cómo se llama la represa más grande compartida entre Uruguay y Argentina?': 'Salto Grande',
        '¿En qué año fue creada la Universidad de la República?': '1849',
        '¿Qué escritor uruguayo es autor de El libro de los abrazos?': 'Eduardo Galeano',
        '¿Cuál es el nombre del presidente que asumió el cargo en 2020?': 'Luis Lacalle Pou',
        '¿Qué año se legalizó el matrimonio igualitario en Uruguay?': '2013',
        '¿Cuál es el nombre del departamento donde se encuentra Cabo Polonio?': 'Rocha',
        '¿Qué famoso músico uruguayo compuso la canción Al otro lado del río?': 'Jorge Drexler',
        '¿Qué puerto es considerado el más importante de Uruguay?': 'Puerto de Montevideo',
        '¿Qué mes se celebra la Noche de la Nostalgia?': 'Agosto',
        '¿Cuál es el carnaval más largo del mundo?': 'Carnaval de Uruguay',
        '¿Qué jugador uruguayo ganó la Bota de Oro en el Mundial de 2010?': 'Diego Forlán',
        '¿Qué día se celebra la Jura de la Constitución en Uruguay?': '18 de julio',
        '¿Qué comida rápida es muy popular en Uruguay?': 'Chivito'
    };
    

    return respuestaCorrecta[pregunta]
}
// Obtener posibles respuestas
function genRespuesta(pregunta){

    // Todas las posibles respuestas
    const respuestas = {
        '¿Cuál es el plato típico uruguayo?': ['Asado', 'Sushi', 'Pizza', 'Tacos'],
        '¿Quién es considerado el "Padre de la Patria" en Uruguay?': ['José Gervasio Artigas', 'Simón Bolívar', 'Manuel Oribe', 'Juan Manuel de Rosas'],
        '¿Qué bebida es tradicional en Uruguay?': ['Mate', 'Té', 'Café', 'Chocolate caliente'],
        '¿Cuál es el río que separa Uruguay de Argentina?': ['Río Uruguay', 'Río Paraná', 'Río de la Plata', 'Río Colorado'],
        '¿Qué club de fútbol ha ganado más campeonatos uruguayos?': ['Club Nacional de Football', 'Club Atlético Peñarol', 'Liverpool F.C.', 'Danubio F.C.'],
        '¿Qué ciudad uruguaya es conocida por su festival de jazz?': ['Punta del Este', 'Montevideo', 'Colonia del Sacramento', 'Rivera'],
        '¿Cuál es el nombre de la moneda oficial de Uruguay?': ['Peso uruguayo', 'Dólar', 'Real', 'Peso argentino'],
        '¿Cuál es la fecha de la Declaración de la Independencia de Uruguay?': ['25 de agosto de 1825', '18 de julio de 1830', '19 de junio de 1821', '9 de julio de 1816'],
        '¿Qué escritor uruguayo es famoso por obras como Cuentos de la Selva?': ['Horacio Quiroga', 'Mario Benedetti', 'Eduardo Galeano', 'Juan Carlos Onetti'],
        '¿Qué bebida alcohólica es muy popular en Uruguay?': ['Cerveza', 'Vino tinto', 'Vodka', 'Caipirinha'],
        '¿Cuál es el nombre del estadio de fútbol más importante de Uruguay?': ['Estadio Centenario', 'Estadio Gran Parque Central', 'Estadio Campeón del Siglo', 'Estadio Saroldi'],
        '¿Qué figura política fue presidente de Uruguay entre 2010 y 2015?': ['José Mujica', 'Luis Lacalle Pou', 'Tabaré Vázquez', 'Julio María Sanguinetti'],
        '¿Cuál es la capital de Uruguay?': ['Montevideo', 'Salto', 'Maldonado', 'Colonia del Sacramento'],
        '¿Qué dulce típico se utiliza mucho en la repostería uruguaya?': ['Dulce de leche', 'Miel', 'Chocolate', 'Caramelo'],
        '¿Qué famoso balneario uruguayo atrae a turistas de todo el mundo?': ['Punta del Este', 'Piriápolis', 'Atlántida', 'La Paloma'],
        '¿Cuál es el género musical típico del Carnaval uruguayo?': ['Candombe', 'Samba', 'Tango', 'Reggaetón'],
        '¿Qué país limita al norte con Uruguay?': ['Brasil', 'Argentina', 'Paraguay', 'Chile'],
        '¿En qué año Uruguay ganó su primer Mundial de Fútbol?': ['1930', '1950', '1962', '1942'],
        '¿Cómo se llama la avenida principal de Montevideo?': ['18 de Julio', '9 de Julio', 'Artigas', 'Colón'],
        '¿Qué animal es representativo de Uruguay y aparece en su escudo?': ['Caballo', 'Águila', 'Puma', 'Jaguar'],
        '¿Qué postre es típico en las fiestas uruguayas?': ['Chajá', 'Tiramisú', 'Flan', 'Tarta de manzana'],
        '¿Cuál es la lengua oficial de Uruguay?': ['Español', 'Portugués', 'Inglés', 'Guaraní'],
        '¿Qué jugador uruguayo es uno de los máximos goleadores de la selección?': ['Luis Suárez', 'Diego Forlán', 'Edinson Cavani', 'Enzo Francescoli'],
        '¿Cuál es el departamento más poblado de Uruguay?': ['Montevideo', 'Canelones', 'Maldonado', 'Rivera'],
        '¿Qué país colonizó inicialmente a Uruguay?': ['España', 'Portugal', 'Francia', 'Reino Unido'],
        '¿En qué departamento se celebra anualmente el Festival de la Primavera en Uruguay?': ['Soriano', 'Canelones', 'Salto', 'Artigas'],
        '¿Qué deporte es el más popular de Uruguay?': ['Fútbol', 'Cricket', 'Hockey sobre césped', 'Natación'],
        '¿Cuál es el himno nacional de Uruguay?': ['"Orientales, la Patria o la tumba"', '"La Cumparsita"', '"A Don José"', '"Marcha de Tres Árboles"'],
        '¿Qué escritor uruguayo escribió La Tregua?': ['Mario Benedetti', 'Juan Carlos Onetti', 'Horacio Quiroga', 'Eduardo Galeano'],
        '¿Cuál es el pico más alto de Uruguay?': ['Cerro Catedral', 'Cerro de las Ánimas', 'Cerro Batoví', 'Cerro Pan de Azúcar'],
        '¿Qué tipo de árbol es representativo de Uruguay y figura en su escudo?': ['Palma', 'Roble', 'Ceibo', 'Eucalipto'],
        '¿Qué color predomina en la bandera de Uruguay?': ['Blanco', 'Rojo', 'Verde', 'Amarillo'],
        '¿Cuál es el nombre del principal aeropuerto internacional de Uruguay?': ['Aeropuerto Internacional de Carrasco', 'Aeropuerto de Laguna del Sauce', 'Aeropuerto de Melo', 'Aeropuerto de Rivera'],
        '¿Qué figura histórica se conoce como el "Protector de los Pueblos Libres"?': ['José Artigas', 'José de San Martín', 'Simón Bolívar', 'Juan Manuel de Rosas'],
        '¿Cuál es una de las marcas de cerveza más populares en Uruguay?': ['Pilsen', 'Quilmes', 'Corona', 'Heineken'],
        '¿Qué planta es famosa por su flor roja y es la flor nacional de Uruguay?': ['Ceibo', 'Girasol', 'Jazmín', 'Tulipán'],
        '¿Qué dulce es una especialidad del departamento de Colonia?': ['Alfajores', 'Bombones', 'Helado artesanal', 'Pan dulce'],
        '¿Cómo se llama la represa más grande compartida entre Uruguay y Argentina?': ['Salto Grande', 'Yacyretá', 'Itaipú', 'Paso de los Toros'],
        '¿En qué año fue creada la Universidad de la República?': ['1849', '1890', '1911', '1930'],
        '¿Qué escritor uruguayo es autor de El libro de los abrazos?': ['Eduardo Galeano', 'Mario Benedetti', 'Horacio Quiroga', 'Juan Carlos Onetti'],
        '¿Cuál es el nombre del presidente que asumió el cargo en 2020?': ['Luis Lacalle Pou', 'Tabaré Vázquez', 'José Mujica', 'Julio María Sanguinetti'],
        '¿Qué año se legalizó el matrimonio igualitario en Uruguay?': ['2013', '2009', '2015', '2017'],
        '¿Cuál es el nombre del departamento donde se encuentra Cabo Polonio?': ['Rocha', 'Maldonado', 'Colonia', 'Canelones'],
        '¿Qué famoso músico uruguayo compuso la canción Al otro lado del río?': ['Jorge Drexler', 'Jaime Roos', 'Rubén Rada', 'Daniel Viglietti'],
        '¿Qué puerto es considerado el más importante de Uruguay?': ['Puerto de Montevideo', 'Puerto de Colonia', 'Puerto de Punta del Este', 'Puerto de Fray Bentos'],
        '¿Qué mes se celebra la Noche de la Nostalgia?': ['Agosto', 'Septiembre', 'Octubre', 'Julio'],
        '¿Cuál es el carnaval más largo del mundo?': ['Carnaval de Uruguay', 'Carnaval de Brasil', 'Carnaval de Barranquilla', 'Carnaval de Cádiz'],
        '¿Qué jugador uruguayo ganó la Bota de Oro en el Mundial de 2010?': ['Diego Forlán', 'Luis Suárez', 'Edinson Cavani', 'Enzo Francescoli'],
        '¿Qué día se celebra la Jura de la Constitución en Uruguay?': ['18 de julio', '1 de marzo', '25 de agosto', '9 de julio'],
        '¿Qué comida rápida es muy popular en Uruguay?': ['Chivito', 'Hamburguesa', 'Pizza', 'Hot dog']
    }

    // Retornamos las posibles respuestas
    return respuestas[pregunta]
}

// Terminar juego
function terminarJuego(){
    // Mostrar preguntas acertadas
    divInicio.innerHTML = `
        <h2 class="tituloCard"><p class="jugador">${nombre.value}</p>${contador-1}/10</h2>
        <p class="acertadas">Preguntas acertadas: ${acertadas}/10</p>
        <div class="menu">
            <button id="salir">Volver a jugar</button>
        </div>
        `
    // Botón volver inicio
    const btnSalir = document.getElementById("salir")
    btnSalir.addEventListener("click", function(){
        // Volver al inicio
        location.href ="./index.html"
    })
}

// JUEGO
function jugar(){

    // Pregunta
    let pregunta = genPregunta(listaDePreguntas)
    // Respuestas
    let respuestas = genRespuesta(pregunta)
    // Respuesta correcta
    let respuestaCorrecta = genRespuestaCorrecta(pregunta)
    // Desordenar respuestas
    respuestas = respuestas.sort(() => Math.random() - 0.5);
    // Lista de preguntas ya hechas
    listaDePreguntas.push(pregunta)

    // Ingresando pregunta al divInicio
    divInicio.innerHTML = `
        <h2 class="tituloCard"><p class="jugador">${nombre.value}</p>${pregunta} ${contador}/10</h2>
        <div class="respuestas">
            <button class="btnRespuesta" value="${respuestas[0]}">A. ${respuestas[0]}</button>
            <button class="btnRespuesta" value="${respuestas[1]}">B. ${respuestas[1]}</button>
            <button class="btnRespuesta" value="${respuestas[2]}">C. ${respuestas[2]}</button>
            <button class="btnRespuesta" value="${respuestas[3]}">D. ${respuestas[3]}</button>
        </div>
        <div class="menu">
            <button id="salir">Volver al inicio</button>
            <button id="btnSiguiente">Siguiente</button>
        </div>
        `
    
    // Botón volver inicio
    const btnSalir = document.getElementById("salir")
    btnSalir.addEventListener("click", alertaConfirmSalir)

    // Lista de todas las respuestas
    const btnRespuesta = document.getElementsByClassName("btnRespuesta")

    // Permitir solo dar un click
    let click = true

    // Recorrer todas las respuestas
    for(let i=0; i<btnRespuesta.length; i++){

        // Obtener respuesta seleccionada 
        btnRespuesta[i].addEventListener("click", function(){
            // Solo poder dar un click
            if(click){
                // Comparar si es correcta o no
                if(btnRespuesta[i].value == respuestaCorrecta){
                    btnRespuesta[i].style = "background-color: #7eda7e;border-bottom: 2px solid #7eda7e;"
                    // Sumar acertada
                    acertadas = acertadas + 1
                }else{
                    btnRespuesta[i].style = "background-color: #da7e7e;border-bottom: 2px solid #da7e7e;"
                    // Buscar respusta correcta
                    for(let x=0; x<btnRespuesta.length; x++){
                        if(btnRespuesta[x].value == respuestaCorrecta){
                            btnRespuesta[x].style = "background-color: #7eda7e;border-bottom: 2px solid #7eda7e;"
                        }
                    }
                }
                // No poder volver hacer click a las respuestas
                click = false

                // Activar botón siguiente
                const btnSiguiente = document.getElementById("btnSiguiente")
                // Cambiando los colores
                btnSiguiente.style = "background-color: #172daa;"
                btnSiguiente.addEventListener('mouseover', function(){btnSiguiente.style = "background-color: #0823be;"});
                btnSiguiente.addEventListener('mouseout', function(){btnSiguiente.style = "background-color: #172daa;"});
                // Añadiendo id confirm para que al hacer click me lleve a la siguiente pregunta
                btnSiguiente.addEventListener("click", function(){
                    if(contador == 11){
                        terminarJuego()
                    }else{
                        jugar()
                    }
                })

                // Sumar contador
                contador = contador + 1
            }
        })
    }
}

// Comenzar juego
function comenzar(){
    // Si no se ingresó ningún nonbre saltar cartel de error
    if(nombre.value.trim() == ""){
        alerta("¡Ingrese un nombre para jugar!")
    }
    // Comenzar juego
    else{
        jugar()
    }
}

nombre.addEventListener('keydown', function(tecla){
    if(tecla.key == "Enter"){
        comenzar()
    }
})

