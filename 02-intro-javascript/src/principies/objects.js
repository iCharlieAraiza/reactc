const person = {
    name: "Carlos",
    age: 27,
    nationality: "Mexican",
    direction:{
        city: "Toronto",
        zip: '033445',
    }  
}

console.table(person);

const person2 = {...person};

person2.name = 'Peter';

const result = `Persona 1: ${person.name} Person 2: ${person2.name}`;

console.log( result);