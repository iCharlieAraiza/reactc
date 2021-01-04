const elements =  {
    index:1,
    control:true,
    response:'defalult'
}



const user = {
    firstName:'Geremias',
    username:'sopoloco69',
    location:{
        lat:21.01122,
        lng:-16.09222
    },
    age: 45,
    single: true
}


const stateContext = ({username, location:{lat, lng}})=>{
    return `Hello ${username} Login localitation: ${lat}, ${lng}`;
}

console.log(stateContext(user));

const {index, control} = elements;

console.log(`Descontruction: index: ${index} contro:${ (control)?'Its OK' : 'Ups! Its not defined'} `);


