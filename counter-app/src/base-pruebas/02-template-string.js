


const nombre   = 'Fernando';
const apellido = 'Herrera';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;



export function getGreeting(name = "Carlos!") {
    return 'Hola ' + name;
}