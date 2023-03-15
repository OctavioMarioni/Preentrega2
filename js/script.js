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

console.log(juegos);

let continuar = true;

 while(continuar);

    let criterio = prompt('Elegí el criterio deseado:\n1 - Título (A a Z) \n2 - Título (Z a A)\n3 - De mas a menos peso \n4 - Fecha de publicación (Más viejo a más nuevo)');

function ordenar(criterio, array) {
    let arrayOrdenado = array.slice(0);


    switch (criterio) {
        case '1':
            let nombreAscendente = arrayOrdenado.sort((a,b)=>a.titulo.localeCompare(b.titulo));
            return nombreAscendente;
        case '2':
            let nombreDescendente = arrayOrdenado.sort((a, b) => b.titulo.localeCompare(a.titulo));
            return nombreDescendente;
        case '3':
            return arrayOrdenado.sort((a, b) => b.peso - a.peso);
        case '4':
            return arrayOrdenado.sort((a, b) => a.anio - b.anio);
        default:
            alert('No es un criterio válido');
            break;
    }
}