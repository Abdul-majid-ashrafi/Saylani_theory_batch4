  import React, { Component } from 'react';
import { StyleSheet, Text, View, Image ,TouchableOpacity,ActivityIndicator} from 'react-native';

import { HomeComponent } from './src/components/Home'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      increment:0
    }
  }
  increment(){
    this.setState({
      increment:this.state.increment + 1
    },()=>{
      console.log(this.state.increment)
    })
  }
  reset(){
    this.setState({
      increment:0
    },()=>{
      console.log(this.state.increment)
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.increment.bind(this)}>
          <Text>Click Me</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.reset.bind(this)}>
          <Text>Reset</Text>
          </TouchableOpacity>
          
          <Text>{this.state.increment}</Text>
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
  textStyle: {
    fontSize: 33,
    color:'red'
  }
});


















/*import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Header, List } from './scr/tags'
// import { FormLabel, FormInput, Button } from 'react-native-elements'

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Albums'} />
        <List />
      </View>
    );
  }
}*/

