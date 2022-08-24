// - La fecha de hoy
let fechaHoy = new Date();
console.log(fechaHoy);

// - La fecha de tu nacimiento
let miNacimiento = new Date(1993, 7, 24);
console.log(miNacimiento);

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
let hoyMayorNacimiento = fechaHoy.getTime() > miNacimiento.getTime();
console.log(hoyMayorNacimiento);

// - Una variable que contenga el día de tu nacimiento
let dayOfBirth = miNacimiento.getDate();
console.log(dayOfBirth);

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
let monthOfBirth = miNacimiento.getMonth() + 1;
console.log(monthOfBirth);

// Una variable que contenga el año de tu nacimiento (con 4 dígitos)
let yearOfBirth = miNacimiento.getFullYear();
console.log(yearOfBirth);