// funcion promesa
async function damePromesa() {
    return setTimeout(() => console.log('Hola soy una promesa'), 5000);
}

damePromesa();  // notar como luego de 5seg se ejecuta el console.log()