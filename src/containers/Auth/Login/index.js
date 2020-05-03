import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Card from '../../../components/Card'
import Container from '../../../components/Container'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import Title from '../../../components/Title'
import Center from '../../../components/Center'

export default class Login extends Component {
    render() {
        return (
            <Container>
                <Card>
                    <Title>Iniciar session</Title>
                    <Input label="Email" placeholder="Email" />
                    <Input label="Contraseña" placeholder="Contraseña" />
                    <Button block={true} type="button">Acceder</Button>
                    <Center style={{'marginTop' : '10px'}}>
                        <Link to="/register">Ir a registro</Link>
                    </Center>
                </Card>
            </Container>
        )
    }
}
