import React, { Component } from 'react'
import { View, Text } from 'react-native'
import firebase from 'firebase'
import { Button, Card, CardSection, Input, Spinner } from './common'

export class LoginForm extends Component {

    state = {
        email: 'user@gmail.com',
        password: 'user',
        error: '',
        loading: false
    }

    Login() {
        const { email, password } = this.state
        this.setState({ error: '', loading: true })

        firebase.auth().signInWithEmailAndPassword(email, password)
            // Handle respnse here
            .then(this.nowLoginSuccess())
            .catch((error) => {
                // Handle Errors here.
                var errorMessage = error.message;
                this.setState({ error: errorMessage, loading: false })
            });
    }

    nowLoginSuccess() {
        this.setState({ email: '', password: '', loading: false })
    }

    renderButtonAndLoader() {
        if (this.state.loading) {
            return <Spinner />
        }
        return (
            <Button onPress={this.Login.bind(this)}>
                Submit
            </Button>
        )
    }


    render() {
        return (
            <View>
                <Card>
                    <CardSection>
                        <Input
                            label="Email"
                            value={this.state.email}
                            placeholder="Write Email"
                            onChangeText={email => { this.setState({ email }) }}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            label="Password"
                            secureTextEntry
                            value={this.state.password}
                            placeholder="Write password"
                            onChangeText={password => { this.setState({ password }) }}
                        />
                    </CardSection>

                    <CardSection>
                        <Text style={errorStyle}>
                            {this.state.error}
                        </Text>
                    </CardSection>

                    <CardSection>
                        {this.renderButtonAndLoader()}
                    </CardSection>
                </Card>
            </View>
        )
    }
}

const errorStyle = {
    color: 'red'
}