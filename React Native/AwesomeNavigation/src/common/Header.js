import React from 'react';
import { Text, View } from 'react-native';


const Header = (props) => {
  
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>

    );

};


const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#ff0000',
        shadowOffset: { width: 10, height: 20 },
        shadowOpacity: 0.9,
        elevation: 2
        

    },
    textStyle: {
        fontSize: 20
    }
}

export { Header };
