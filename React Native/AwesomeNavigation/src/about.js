import React, { Component } from 'react'
import { View, Text } from 'react-native'


export class AboutComponent extends Component {
    render() {
        alert("Thank you!")
        return (
            <View>
                <Text>
                    Hello About Component
                </Text>
            </View>
        )
    }
}
