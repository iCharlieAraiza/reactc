import heroes from '../data/heroes.js';

const getHeroeById = (id) => heroes.find( heroe => heroe.id === id );

const getHeroesByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner);

console.log(getHeroeById(2).name);
console.log(getHeroesByOwner('DC'));