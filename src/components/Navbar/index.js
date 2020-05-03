import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper, faUser } from '@fortawesome/free-solid-svg-icons'
import './styles.scss'

export default class Navbar extends Component {
    render() {
        return (
            <div id="navbar">
                <ul>
                    <li>
                        <Link to='/app/newsfeed'>
                            <FontAwesomeIcon icon={faNewspaper} />
                            <span>Instacool</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/app/profile'>
                            <FontAwesomeIcon icon={faUser} />
                            <span>Perfil</span>
                        </Link>
                    </li>
                </ul>
                
            </div>
        )
    }
}
