import React, {Component} from 'react'
import './styles.scss'

export default class Input extends Component{
    render(){

        const {label} = this.props

        return (
            <div>
                <label>{label}</label>
                <input className="input" {...this.props} />
            </div>
        )
    }
}