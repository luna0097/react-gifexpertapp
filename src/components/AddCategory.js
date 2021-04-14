import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategory}) => {

    const [inputValue, setInputValue] = useState('');
    
    const handleInoutChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategory( cats =>  [inputValue, ...cats]);
            setInputValue('');
        } else {
            alert('ey perro la categoria debe ser mayor a 2 carácteres , puto');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value = {inputValue} onChange={handleInoutChange}/>
        </form>
    )
}

AddCategory.protoTypes = {
    setCategory: PropTypes.func.isRequired
}
