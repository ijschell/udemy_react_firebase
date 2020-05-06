import React, { Component } from 'react';
import { reduxForm, Field} from 'redux-form'
import Input from '../Input'
import Button from '../Button'
import './styles.scss'

class LoginForm extends Component {
    render() {

        const {handleSubmit} = this.props

        return (
            <form onSubmit={handleSubmit}>
                <Field label="Email" name="email" type="input" component={Input} placeholder="Email" />
                <Field label="Contraseña" name="password" type="password" component={Input} placeholder="Contraseña" />
                <Button block="true" type="submit">Acceder</Button>
            </form>
        );
    }
}

export default reduxForm({
    form : 'login'
})(LoginForm); 