import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { CardSection, Button } from './common'


export class HomeComponent extends Component {
    state = { isLoggedIn: true }
    goToNextPage() {
        const { navigate } = this.props.navigation;
        if (this.state.isLoggedIn) {
            navigate('About')
        }
    }
    render() {
        return (
            /*<View>
                <Text>
                    Hello Home Component
                </Text>
            </View>*/
            <CardSection>
                <Button onPress={this.goToNextPage.bind(this)}>About me</Button>
            </CardSection>
        )
    }
}
HomeComponent.navigationOptions = {
    title: 'Welcome Home',
};