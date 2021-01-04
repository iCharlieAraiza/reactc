const numbers = [1, 2, 3, 4];

const copyNumbers = [...numbers, 5];

console.log(`numbers: ${numbers}  copyNumbers: ${copyNumbers}`);


//Multuplicar por 5 cada uno de los elmentos

const multipliernNumbers = numbers.map((num)=>{
    return num * 5;
}); 


let i = 0;
multipliernNumbers.forEach((num)=>{
    console.log(`${++i}: ${num}`);
})