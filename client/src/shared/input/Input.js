import React from 'react'
import { TextField } from '@material-ui/core'
import './Input.scss'

const Input = ({ className, value, id,  variant, handleInputChanges, placeholder }) => (
    <TextField
        data-testid="input"
        value={value}
        id={id}
        className={`input ${className}`}
        onChange={e => handleInputChanges(e)}
        placeholder={placeholder}
        variant={variant || 'outlined'}
    />
)

export default Input