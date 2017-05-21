import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { emailChanged, passwordChange } from '../action/authAction'
import { Button, Card, CardSection, Input, Spinner } from '../common'

class LoginForm extends Component {

    login() {
        alert('hello')
    }
    onChangeEmail(text) {
        this.props.changeEmailDispatch(text)
    }

    render() {
        console.log('this.props', this.props)

        return (
            <View>
                <Card>
                    <CardSection>
                        <Input
                            placeholder="user@gmail.com"
                            label="Email"
                            value={this.props.mail}
                            onChangeText={this.onChangeEmail.bind(this)}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            secureTextEntry
                            label="Password"
                        />
                    </CardSection >


                    <CardSection>
                        <Button onPress={this.login.bind(this)}>
                            Login
                        </Button >
                    </CardSection>

                </Card>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mail: state.authanticationReducer.email
        // pass: state.authanticationReducer.password
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeEmailDispatch: (email) => {
            dispatch(emailChanged(email))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
