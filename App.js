import React from 'react';
import Compute1 from './components/compute1';
import Home from './components/home';
import Compute from './components/compute';
import Signup from './components/signup';
import Edit from './components/editDetail';
import Profile from './components/profile';
import Signin from './components/signin'

import {SafeAreaView, ScrollView, View, Image, StatusBar, Text} from 'react-native';
import {createAppContainer, createDrawerNavigator, DrawerItems, createStackNavigator } from 'react-navigation';

var User;


// let Get=()=>{fetch('http://192.168.137.1:8000/manish.json')
//   .then((response) => response.json())
//       .then((responseJson) => {User=responseJSON})
        
//       .catch((error) => {
//       console.error(error);
//       });
//   }

// export let getUser = ()=>{
//   Get();
//   return User;
// }

const customDraw = (props) => (
  <SafeAreaView style={{flex:1, marginTop:StatusBar.currentHeight,}}>
    <View style={{height:150, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>

      <Image source={require('./assets/logo.png')} style={{height:120, width:120, borderRadius:60, borderWidth:3, borderColor:'#01992c'}} />

    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isLogged: false
    }
    this.checkPoint = this.checkPoint.bind(this)

 
  }
  async checkPoint(){
    const  response  = await fetch('http://10.100.53.101:5000/verify')
    const responseJSON = await response;
    //console.log(responseJSON);
    this.setState({
      isLogged: responseJSON.status
    });

  }

  render() {
    
    if (this.state.isLogged){
      
      return(
        <NotLogged />
        );
    }
    else{

        return (
          <Logged />
        );
    }
  }
}

const Logged  =   createAppContainer(createDrawerNavigator({
  Home: {screen: Home  } ,
  //Details : {screen: Details},
  Compute: {screen: Compute},
  Compute1: {screen:Compute1},
  Profile: createAppContainer( createStackNavigator({
          ProfileView: {screen: Profile},
          Edit : {screen: Edit},
        },{
            headerMode: 'none' 
        }
  ))
},
{
  contentComponent: customDraw,
}));


const NotLogged = createAppContainer(createStackNavigator({
  Signin: {screen:Signin},
  Signup: {screen: Signup},
  Logged: Logged,
  
},{
  headerMode: 'none' 
} 
));

