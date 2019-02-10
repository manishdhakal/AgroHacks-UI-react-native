import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image, StatusBar } from 'react-native';
import {Container, Header, Icon, Left, Right, Body} from 'native-base';
import {getUser} from '../App';


export default class Profile extends React.Component {
    constructor(props){
        super(props);

    }
    getProfile = () => {

        return 0;    }
    render() {
            
            return (
                
                
                <Container style= {styles.container}>
                    

                    <Header style={{justifyContent:'space-between', backgroundColor:'#0C9674', borderBottomWidth:1, borderBottomColor:'fff'}}>
                            <Left>
                            <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                                <Icon name="md-menu" style={{fontSize: 25, color: 'white'}} />
                            </TouchableOpacity> 
                                            
                            </Left>
                            <Body >
                            <Text style={{fontSize:25, color:'white'}}>Profile</Text>
                            </Body>
                            <Right>
                            
                            </Right>
                        </Header>
                        <ImageBackground source={require('../assets/background.png')} style={{flex:1}}>
                        
                            <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity activeOpacity={0.5}>
                                    <Image source={require('../assets/dp.jpg')} style={[{height:120, width:120, borderRadius:60}, {shadowOpacity:1, shadowRadius:10} ]}  />
                                </TouchableOpacity>
                                <View style={{alignItems:'center'}}>
                                    <Text style={{color:'white', fontSize:20}}>@manish</Text>
                                </View>
                                <TouchableOpacity activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Edit')}>
                                    <Icon name='md-create' style={{color:'white'}} />
                                </TouchableOpacity>
                                
                                
                            </View>
                            <View style={{flex:1, flexDirection:'row', backgroundColor:'#0C9674'}}>
                                <View style={{flex:1}}>
                                
                                </View>

                                <View style={{flex:5, alignItems:'flex-start'}}>
                                    <View style={{flexDirection:'row', paddingTop:20}}>
                                        <Icon  name='md-person' style={{height:25, color:'white',}} />
                                        <Text style={{fontSize:25, color:'white', marginLeft:20}} ></Text>

                                    </View>
                                    <View style={{flexDirection:'row', paddingTop:20}}>
                                        <Icon  name='md-call' style={{height:25, color:'white'}} />
                                        <Text style={{fontSize:25, color:'white', marginLeft:20}}></Text>

                                    </View>
                                    <View style={{flexDirection:'row', paddingTop:20}}>
                                        <Icon  name='md-mail' style={{height:25, color:'white'}} />
                                        <Text style={{fontSize:25, color:'white', marginLeft:20}}></Text>

                                    </View>
                                    
                                </View>
                            </View>

                        </ImageBackground>
                   
                </Container>
        );
    }
    
}
  
  const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
      flex : 1,
      backgroundColor: 'white'
      
    }
  }); 