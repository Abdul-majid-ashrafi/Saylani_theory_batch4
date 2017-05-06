import React from 'react'
import { View, Text } from 'react-native'

export const HomeComponent = ({demo}) => {
    console.log(demo)
    return (
        <View>
            <Text>
            {demo}
            </Text>
        </View>
    )
}






