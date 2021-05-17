import React,{useState} from 'react';
import PropTypes from 'prop-types'

const AddCategory = ( {setCategories} )=>{
    
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (el)=>{
        setInputValue(el.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(inputValue.trim().length>2){
            setCategories( categories => [...categories, inputValue] );
            setInputValue('');
        }
        
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


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;