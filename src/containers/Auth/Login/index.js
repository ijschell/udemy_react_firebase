import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Card from '../../../components/Card'
import Container from '../../../components/Container'
import Title from '../../../components/Title'
import Center from '../../../components/Center'
import LoginForm from '../../../components/LoginForm'
import {connect} from 'react-redux'
import {login as loginThunk} from '../../../ducks/Users'

class Login extends Component {

    render() {

        const {login} = this.props

        return (
            <Container>
                <Card>
                    <Title>Iniciar session</Title>
                    <LoginForm onSubmit={login} />                    
                    <Center style={{'marginTop' : '10px'}}>
                        <Link to="/register">Ir a registro</Link>
                    </Center>
                </Card>
            </Container>
        )
    }
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
    login : payload => dispatch(loginThunk(payload)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Login)