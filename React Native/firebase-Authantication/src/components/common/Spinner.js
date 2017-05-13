import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

export const Spinner = (props) => {
    return (
        <View style={styleSpinner}>
            <ActivityIndicator />
        </View>
    )
}

const styleSpinner = {
    flex: 1,
    justifyContent: 'center'
}
