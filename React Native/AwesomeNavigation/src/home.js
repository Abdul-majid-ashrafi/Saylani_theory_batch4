import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { CardSection, Button } from './common'


export class HomeComponent extends Component {
//      static navigationOptions = {
//     title: 'Welcome to home',
//   };
    render() {
        console.log(this.props)
        // const { navigate } = this.props.navigation;
        return (
        <View>
                <Text>
                    Hello Home Component
                </Text>
            </View>
            /*<CardSection>
                <Button
                    onPress={() =>
                        navigate('About')
                    }
                >About me
      </Button>
            </CardSection>*/
        )
    }
}
 HomeComponent.navigationOptions = {
    title: 'Welcome Home',
  };