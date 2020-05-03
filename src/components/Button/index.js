import React, {Component} from 'react'
import './styles.scss'

export default class Button extends Component{

    state = {
        width : 'initial'
    }

    componentDidMount() {

        const {block = false} = this.props

        if (block) {
            this.setState({
                width : '100%'
            })
        }
    }
    

    render(){

        const {width} = this.state

        return (
            <button style={{'width' : width }} className="button" {...this.props}/>
        )
    }
}