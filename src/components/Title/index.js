import React, {Component} from 'react'
import './styles.scss'

export default class Title extends Component{
    render(){        
        return (
            <h2 {...this.props} />
        )
    }
}