import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {Container, Header, Icon, Left, Right, Body, Button, Content } from 'native-base';


export default class Details extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isloading: true,
      data : null
    }
  }
  mounted(){
    
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then( (response) => response.json() )
      .then( (responseJson) => {

        this.setState({
          isloading : false,
          data : responseJson.movies
        })
      });
  }


  render() {
    
    if (this.state.isloading){
      this.mounted();
      return (
        <View style={styles.container}>
          <Text> LOADING ..... </Text>
        </View>
      );
    }
    else{
      let movies = this.state.data.map((val) => {
        return <View key={val.id}  style={styles.movies}>
                <Text>{val.title}</Text>
                </View>
      });
      
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
        <Content >
            {movies}
        </Content>
      </Container>
      );
    }

    
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop : Expo.Constants.statusBarHeight,
    flex : 1,
    backgroundColor: 'white' 
  },

  movies:{
    alignItems:'center',
    justifyContent : 'center'
  }

}); 