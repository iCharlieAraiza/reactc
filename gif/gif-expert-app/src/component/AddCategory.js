import React,{useState} from 'react';

const AddCategory = (props)=>{
    
    const [inputValue, setInputValue] = useState('Hola mundo');
    
    const handleInputChange = (el)=>{
        setInputValue(el.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        //props.handleAdd(inputValue);
        props.setCategories( categories => [...categories, inputValue] );
        console.log('Has dado un submit!');
    }

    return(
        <form onSubmit={ handleSubmit }>
        <p>{inputValue}</p>
            <input 
                type="text" 
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
        )
}

export default AddCategory;