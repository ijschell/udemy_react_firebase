import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faRetweet } from '@fortawesome/free-solid-svg-icons'
import FooterPost from './footer'
import './styles.scss'

export default class Post extends Component {
    render() {

        const { image } = this.props

        return (
            <div id="card" className="post">
                <img src={image}/>
                <FooterPost />
            </div>
        )
    }
}
