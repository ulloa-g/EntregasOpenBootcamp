// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
let personalInformation = {
    nombre: 'gabriel',
    apeliido: 'ulloa',
    edad: 29,
    altura: 1.75,
    eresDesarrollador: true
};

// - Una variable que obtenga tu edad a partir del objeto anterior
let edad = personalInformation.edad;

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
let fabrizio = {...personalInformation};  // a traves del operador spread le asigno nueva direccion de memoria a fabrizio con los datos de gabriel
fabrizio.nombre = 'fabrizio';
fabrizio.apeliido = 'roa';
fabrizio.edad = 23;
fabrizio.altura = 1.65
fabrizio.eresDesarrollador = false;

let sebastian = {
    nombre: 'sebastian',
    apeliido: 'coletto',
    edad: 15,
    altura: 1.83,
    eresDesarrollador: false
};
let listaAmigos = [personalInformation, fabrizio, sebastian];
console.log(listaAmigos);

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

let listaOrdenada = listaAmigos.sort((a, b) => a.edad + b.edad);
console.log(listaOrdenada);