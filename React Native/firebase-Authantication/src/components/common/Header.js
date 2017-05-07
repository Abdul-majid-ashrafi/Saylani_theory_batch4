import React, { Component } from 'react'
import { View, Text } from 'react-native'


export class Header extends Component {
    render() {
        return (
            <View style={styles.viewStyle}>

                <Text style={styles.textStyle}>{this.props.headerText}</Text>
            </View>
        )
    }
}

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: 'red',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
}
// export  HomeComponent