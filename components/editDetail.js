import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,StatusBar, ScrollView,KeyboardAvoidingView } from 'react-native';
import {Container, Header, Icon, Left, Right, Body, Card, Item, Input, Label,  Button } from 'native-base';
import {id} from './signin'

console.log(id);




export default class Edit extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
        password: 'Password',
        email: 'Email',
        errorMessage: '',
        username: '',
        firstname:'',
        lastname:'',
        contactno:'',
        districtname:''
    };
    console.log(id)
    
}
update = () =>{
  fetch('http://10.100.58.42:5000/sign-up', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                contactno: this.state.contactno,
                username: this.state.username,
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                districtname: this.state.districtname

            }),
            })
            .then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson)
                    if (responseJson.status === true){
                    this.props.navigation.navigate('Logged')
                    }
                    return responseJson;
                })
                .catch((error) => {
                console.error(error);
                });

}
  
    render() {
      return (
      
        <Container style= {styles.container}>
          <Header style={{justifyContent:'space-between', backgroundColor:'#0C9674', borderBottomWidth:1, borderBottomColor:'fff'}}>
            <Left>
              <TouchableOpacity  onPress={() => this.props.navigation.goBack()} >
                <Icon name="md-arrow-back" style={{fontSize: 25, color: 'white'}} />
              </TouchableOpacity>
            </Left>
            <Body >
              <Text style={{fontSize:25, color:'white'}}>Edit details</Text>
            </Body>
            <Right>
            </Right>
          </Header>
          <ScrollView style={{flex:1}}>
          <KeyboardAvoidingView behavior='position'>
              <Card>
                <Item style={{marginVertical:20}}  floatingLabel>
                  <Label>First name</Label>
                    <Input  onChangeText = {(firstname) => this.setState({firstname})} />
                </Item>

                <Item style={{marginVertical:20}} floatingLabel>
                  <Label>Last name</Label>
                    <Input  onChangeText = {(lastname) => this.setState({lastname})} />
                </Item>

                <Item style={{marginVertical:20}} floatingLabel last>
                  <Label>Phone</Label>
                  <Input keyboardType = 'number-pad'  onChangeText = {(contactno) => this.setState({contactno})} />
                </Item>
                <Item style={{marginVertical:20}} floatingLabel>
                  <Label>Mail</Label>
                    <Input keyboardType = "email-address" onChangeText = {(email) => this.setState({email})} />
                </Item>
                <Item style={{marginVertical:20}} floatingLabel>
                  <Label>User name</Label>
                    <Input  onChangeText = {(username) => this.setState({username})} />
                </Item>
                <Item style={{marginVertical:20}} floatingLabel>
                  <Label>Password</Label>
                    <Input  onChangeText = {(password) => this.setState({password})} secureTextEntry={true} />
                </Item>
                <Item style={{marginVertical:20}} floatingLabel>
                  <Label>Address</Label>
                    <Input  onChangeText = {(districtname) => this.setState({districtname})} />
                </Item>
                
              </Card>
              <View style={{flex:1}}>
                <Button block style={{backgroundColor:'#0C9674'}} onPress={this.update} >
                    <Text style={{fontSize:18, color:'#fff'}}>Save</Text>
                </Button>
              </View>
            

              </KeyboardAvoidingView>
          </ScrollView>

        </Container>
      );
    } 
  }
  
  const styles = StyleSheet.create({
    container: {
      marginTop : StatusBar.currentHeight,
      flex : 1,
      backgroundColor: 'white'
      
    }
  }); 