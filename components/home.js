import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {Container, Header, Icon, Left, Right, Body, Button } from 'native-base';




export default class Home extends React.Component {


    render() {
      return (
        <Container style= {styles.container}>
          <Header>
            <Left>
              <Button transparent onPress= {() => {this.props.navigation.openDrawer()
              }}>
                <Icon name="md-menu" style={{color:'white',width:60}} />
              </Button>
            </Left>
            <Body>
                <TouchableOpacity onPress= {() =>{this.props.navigation.navigate('Home')}}>
                  <Text style={{color:'white', fontSize:25, marginLeft:35}}>AgroHacks</Text>
                </TouchableOpacity>
                
              </Body>
            <Right>
            
            </Right>
          
          </Header>

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