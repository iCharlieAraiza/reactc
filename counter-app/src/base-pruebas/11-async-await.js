

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImagen = async() => {

    try {

        const apiKey = 'C1khQe3Z7R1W2lfTO9myKeuShdqFYSGC';
        const resp   = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
        const json = resp.json(); 

        return json;

    } catch (error) {
        // manejo del error
        console.error(error)
    }
    
    
    
}
 getImagen();



