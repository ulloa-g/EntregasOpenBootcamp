// Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
let i = 1;
let factorialDiez = 10;
while (true) {
    if (i > 10) {
        break;
    }
    else {
        factorialDiez *= i;
        i ++;
    }
}
console.log ('El factorial de 10 es: ', factorialDiez)