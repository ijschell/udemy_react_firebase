import React, {Component} from 'react'
import './styles.scss'

export default class Container extends Component{
    render(){
        
        const {children} = this.props

        return (
            <div id="Container">
                {children}
            </div>
        )
    }
}