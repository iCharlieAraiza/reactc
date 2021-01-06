import heroes from './data/heroes';
import getHeroeById from './principies/import';


const getHeroeByIdAsync= (id)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const response = getHeroeById(id);

            if(response===undefined){
                reject();
            }else{
                resolve(getHeroeById(id));
            }   

        },4000);
    
    });
}


const heroe = getHeroeByIdAsync(44);

heroe.then((res)=>{
    const {name} = res;
    console.log(name);
}).catch(()=>{
    console.log("¡Ups! No se ha encontrado")
});

