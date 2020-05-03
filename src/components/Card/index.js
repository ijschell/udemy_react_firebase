import React, {Component} from 'react'
import './styles.scss'

export default class Card extends Component{
    render(){
        
        const {children} = this.props

        return (
            <div id="card">
                {children}
            </div>
        )
    }
}