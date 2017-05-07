import React from 'react'
import { View, Text } from 'react-native'

export const CardSection = (props) => {
    return (
        <View style={styles}>
            {props.children}
        </View>
    )
}

const styles = {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
}