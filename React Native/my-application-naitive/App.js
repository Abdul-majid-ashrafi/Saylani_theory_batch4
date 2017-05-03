import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    // let pic = {
    //   uri: 'http://www.appcoda.com/wp-content/uploads/2015/04/react-native.png'
    // };
    return (
      <View style={styles.container}>
        {/*<Image source={pic} style={{ width: 193, height: 110 }} />*/}

        <Text>Open up App.js to start working on your app!</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>Shake .</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
