import React from 'react';
import Details from './components/details';
import Home from './components/home';
//import { StyleSheet, Text, View, Button } from 'react-native';
import {createAppContainer, createDrawerNavigator } from 'react-navigation';
//import { View } from 'native-base';

export default class App extends React.Component {
  render() {
    return (
      
      <Drawer />
   
    );}
}
const Drawer = createAppContainer(createDrawerNavigator({
   Home :{screen:Home} ,
  Details : {screen:Details}
  
}));
