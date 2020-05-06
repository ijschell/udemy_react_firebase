import React, { Component } from 'react'
import ProfileImage from '../../components/ProfileImg'
import Button from '../../components/Button'
import Card from '../../components/Card'
import './styles.scss'

export default class Profile extends Component {
    render() {
        return (
            <div id="profile">
                <div>
                    <ProfileImage image="http://placekitten.com/100/100" />
                    <Button>Agregar</Button>
                </div>
                <div className="containerfeeds">

                    <Card>
                        <img src="http://placekitten.com/150/150"/>
                    </Card>

                    <Card>
                        <img src="http://placekitten.com/150/150"/>
                    </Card>

                    <Card>
                        <img src="http://placekitten.com/150/150"/>
                    </Card>

                    <Card>
                        <img src="http://placekitten.com/150/150"/>
                    </Card>

                </div>
            </div>                
        )
    }
}
