import React, {Component} from 'react'
import './styles.scss'

const Input = props => {
    const {label, input, placeholder, type} = props

    return (
        <div>
            <label>{label}</label>
            <input className="input" {...input} placeholder={placeholder} type={type}/>
        </div>
    )
}

export default Input