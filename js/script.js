class juego {
    constructor(titulo, anio, genero, peso, id) {
        this.titulo = titulo;
        this.anio = anio;
        this.genero = genero;
        this.peso = peso;
        this.id = id;
    }
    asignarId(array) {
        this.id = array.length;
    }
}
const juegos = [
    new juego("Neon White", 2022, "fps", 6000, 1),
    new juego("Metal Hellsinger", 2023, "fps", 12000, 2),
    new juego("Infernax", 2021, "aventura", 500, 3),
    new juego("Trek to Yomi", 2022, "avenura", 11000, 4),
    new juego("Signalis", 2019, "horror", 2000, 5)
];

let criterio = prompt("Elige el criterio deseado: \n1 -Título (A a Z) \n2 -Título (Z a A) \n3 -Ordenar por peso en MB \n4 -Ordenar por género \n5 -Ordenar por año de salida");

// Llama a la función ordernar para ordenar el arreglo juegos
let juegosOrdenados = ordernar(criterio, juegos);

// Muestra los juegos ordenados en la consola
console.log(juegosOrdenados);

// Muestra los juegos ordenados en una alerta
alert(stringResultados(juegosOrdenados));

function ordernar(criterio, array) {

    let juegosOrdenados = array.slice(0);

    switch (criterio) {
        case '1':
            return juegosOrdenados.sort((a, b) => a.titulo.localeCompare(b.titulo));
        case '2':
            return juegosOrdenados.sort((a, b) => b.titulo.localeCompare(a.titulo));
        case '3':
            return juegosOrdenados.sort((a, b) => a.peso - b.peso);
        case '4':
            let generoElegido = prompt("Escribe el género que quieres buscar:");
            return juegosOrdenados.filter(juego => juego.genero === generoElegido);
        case '5':
            return juegosOrdenados.sort((a, b) => a.anio - b.anio);
        default:
            alert("El numero ingresado no es correcto");
            break;
    }
}

function stringResultados(array) {
    let resultado = '';
    array.forEach(elemento => {
        resultado += 'Título: ' + elemento.titulo + '\nAño de publicación: ' + elemento.anio + '\nGénero: ' + elemento.genero + '\nPeso: ' + elemento.peso + ' MB\n\n';
    });
    return resultado;
}
