const nombre   = 'Fernando';
const apellido = 'Herrera';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;



export function getGreeting(name = "") {
    return name === '' ? 'Hola' : `Hola ${name}`;
}