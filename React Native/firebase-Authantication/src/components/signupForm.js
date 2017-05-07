import React, { Component } from 'react'
import { View, Text } from 'react-native'
import firebase from 'firebase'
import { Button, Card, CardSection, Input } from './common'

export class SignupForm extends Component {
    state = { userFullName: '', email: '', password: '', error: '' }



    Signup() {
        const { email, password } = this.state
        this.setState({ error: '' })

        firebase.auth().createUserWithEmailAndPassword(email, password)
            // Handle respnse here
            .then((response) => {
                firebase.database().ref('/').child(`nativeUser/${response.uid}`).set(this.state)
                console.log("ResPonSe", response)
            })
            .catch((error) => {
                // Handle Errors here.
                var errorMessage = error.message;
                this.setState({ error: errorMessage })
                console.log(errorMessage);
            });
    }


    render() {
        return (
            <View>

                <Card>
                    <CardSection>
                        <Input
                            label="Full Name"
                            value={this.state.userFullName}
                            placeholder="Write something"
                            onChangeText={userFullName => { this.setState({ userFullName }) }}
                        />
                    </CardSection>

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
                        <Button onPress={this.Signup.bind(this)}>
                            Submit
                        </Button>
                    </CardSection>

                    <CardSection>
                        <Text style={errorStyle}>
                            {this.state.error}
                        </Text>
                    </CardSection>
                </Card>


                {/*<Text>
                    Render Form Page
               </Text>*/}
            </View>
        )
    }
}

const errorStyle = {
    color: 'red'
}












