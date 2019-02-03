import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {Container, Header, Icon, Left, Right, Body, Button, Card } from 'native-base';




export default class Compute1 extends React.Component {

  constructor(props){
    super(props);
    //var open = () =>{this.props.navigation.navigate('Compute2')}
  }

  static navigationOptions = {
     headerTitle : 'main'


   }
    render() {
    
      return (
        
          <Container style= {styles.container}>
          <TouchableOpacity onPress={this.open }>
            <Text> this is compute1 </Text>
          </TouchableOpacity>
           
          </Container>
      );
    } 
  }
  
  const styles = StyleSheet.create({
    container: {
      marginTop : Expo.Constants.statusBarHeight,
      flex : 1,
      backgroundColor: 'white'
      
    }
  }); 