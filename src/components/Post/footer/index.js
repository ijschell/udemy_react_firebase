import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faRetweet } from '@fortawesome/free-solid-svg-icons'
import './styles.scss'

export default class FooterPost extends Component {
    render() {

        const { image } = this.props

        return (
            <div className="footerpost">
                <div>
                    <FontAwesomeIcon icon={faThumbsUp} /> Like
                </div>
                <div>
                    <FontAwesomeIcon icon={faRetweet} /> Compartir
                </div>
            </div>
        )
    }
}
