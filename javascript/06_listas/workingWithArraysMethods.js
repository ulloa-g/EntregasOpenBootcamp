// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
let whatToBuy = ['leche', 'queso', 'cereales', 'pescado', 'brocoli'];

// - Modifica la lista de la compra y añádele "Aceite de Girasol"
whatToBuy.push('Aceite de girasol');

// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
whatToBuy.pop();

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
let favoriteMovies = [
    {tittle: 'Jurassick Park', genre: 'Adventure', date: new Date(2022,1,15)},
    {tittle: 'X-men', genre: 'Science Fiction', date: new Date(2009,0,2)},
    {tittle: 'Chucky', genre: 'Horror', date: new Date(1993,0,3)},

];

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
function compareYear (value){
    return value.date > new Date(2010,0,1)
}
let movies = favoriteMovies.filter(compareYear);
console.log('movies after 1st January 2010:', movies);

// - Una nueva lista que contenga el genero de la lista de películas original (utilizando map)

let genre = favoriteMovies.map(getGenre);
function getGenre(value){
    return value.genre;
}
console.log('genre of movies', genre);

// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

let tittle = favoriteMovies.map(getTittle);
function getTittle(value){
    return value.tittle;
}
console.log('tittle of movies', tittle);

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
lista = tittle.concat(genre);
console.log(lista);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
// I did not understood this one.