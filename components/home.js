import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, DrawerLayoutAndroid, StatusBar,Image } from 'react-native';
import {Container, Header, Icon, Left, Right, Body, Button, Card, Content } from 'native-base';


// console.log(this.props.navigation.getParams());
export default class Home extends React.Component {
  constructor(props)
  {
    super(props);

    
  }

   
   
    render() {
    
  
      return (
        <Container style={styles.container}>
          <Header style={{justifyContent:'space-between', backgroundColor:'#0C9674'}}>
            <Left>
              <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                <Icon name="md-menu" style={{fontSize: 25, color: 'white'}} />
              </TouchableOpacity>
            </Left>
            <Body >
              <Text style={{fontSize:25, color:'white'}}>AgroHacks</Text>
            </Body>
            <Right>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                <Image source={require('../assets/dp.jpg')} style={{height:30, width:30, borderRadius:15}} />
              </TouchableOpacity>
            </Right>
          </Header>   
          <View style={{flex:1}}>
            <Card style={{flex:1}}>
              <View style={{marginHorizontal:10, borderBottomWidth:1}}>
                <Text style={{fontSize:20, fontWeight:'bold'}}>Resources Allocated</Text>
              </View>

              <View style={{flexDirection:'row', marginHorizontal:10,}}>

                <View style={{flex:1, borderBottomWidth:1}}>
                  <Text style={{fontSize:20,}} >Crops</Text>
                </View>

                <View style={{flex:1, borderBottomWidth:1}}>
                  <Text style={{fontSize:20,}} >Qty</Text>
                  
                </View>

                <View style={{ flex:1, borderBottomWidth:1}}>
                <Text style={{fontSize:20,}}>Region</Text>
                  
                </View>

              </View>

            </Card>

            <Card style={{flex:1}}>
              

            </Card>


            <View style={{flex:1, flexDirection:'row'}}>
              <Card style={{flex:1}}>
            
              </Card>
              <Card style={{flex:1}}>

              </Card>
            
            </View>

          </View>

         
        </Container>


      );
    } 
  }
  
  const styles = StyleSheet.create({
    container: {
      marginTop: StatusBar.currentHeight,
      flex : 1,
      backgroundColor: '#ccc'
      
    }
  }); 