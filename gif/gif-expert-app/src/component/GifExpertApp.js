import React, {useState} from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

let id = 0;


const GifExpertApp  = () =>{

    //const categories = ['One Punch', 'Samurai X', 'Dragon Bal'];
    const [categories, setCategories] = useState( ['One Punch']);

    const handleAdd = (value)=>{
        console.log('Has agregado un nuevo componente');
        setCategories(categories => [...categories, value]);
    }

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory handleAdd={handleAdd} setCategories = {setCategories}/>
            <hr></hr>
            <button onClick={ handleAdd }>Agregar</button>
            <ol>
                {categories.map( category =>{
                    return <GifGrid key={id++} category={category}/>
                })}
            </ol>
        </>
    )
}

export default GifExpertApp;