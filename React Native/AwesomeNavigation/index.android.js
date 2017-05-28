import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'
import { AboutComponent, HomeComponent } from './src'
import { CardSection, Button } from './src/common'

export default class AwesomeNavigation extends Component {
  static navigationOptions = {
    title: 'Welcome to Main page',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <CardSection>
          <Button onPress={() => navigate('Home')}>
            Go to Home page
       </Button>
        </CardSection>
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Main: { screen: AwesomeNavigation },
  Home: { screen: HomeComponent },
  About: { screen: AboutComponent }
});


AppRegistry.registerComponent('AwesomeNavigation', () => SimpleApp);
