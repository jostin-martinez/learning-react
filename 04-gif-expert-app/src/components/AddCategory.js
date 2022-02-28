import React, {useState} from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState(''); //sin nada el valor es undefined

    const handleInputChange = (e) =>{
        setInputValue(e.target.value);
    }
  
    const handleSubmit = (e) =>{
        e.preventDefault();

        if ( inputValue.trim().length>2 ) {
            setCategories( cats =>[...cats, inputValue] );
            setInputValue('');
        }

    }

    return (


    <form onSubmit={ handleSubmit }>
        <h3> { inputValue } </h3>
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