import React, { Component} from 'react';
import {
    KeyboardAvoidingView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View, StatusBar, StyleSheet} from 'react-native';
import { Button } from 'native-base';



export default class Signin extends Component{
    constructor(props){
        super(props);
        this.state={
                email:'',
                password: '',
                errorMessage:''
        };
        
    }

    login = () => {
        console.log('called');
        fetch('http://10.100.53.101:5000/login', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: this.state.email,
            password: this.state.password,
        }),
        })
        .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status === true){
                    temp = responseJson.id;
                    
                this.props.navigation.navigate('Logged')
                }
                else{
                alert("Invalid Email or Password!!!");
                }
                 
                
            })
            .catch((error) => {
            console.error(error);
            });

    } 
    render() {

    return (
        <KeyboardAvoidingView
            behaviour = "padding"
            style={{flex:1}}>
            <ScrollView keyboardShouldPersistTaps='never'
                contentContainerStyle={styles.signin_container}
                scrollEnabled={false}>
                <View style={styles.signin_form_container}>
                    <Text>
                        {this.state.errorMessage}
                    </Text>
                    <TextInput style={styles.signin_input}
                             onChangeText = {(email)=> this.setState({email})}
                            value ={this.state.email}
                            placeholder = "EMAIL"
                            autoCapitalize = "none"
                            onFocus = {() => this.setState({email: ""})}
                            underlineColorAndroid = "#fff"/>
                    <TextInput style={styles.signin_input}
                             onChangeText = {(password)=> this.setState({password})}
                            value ={this.state.password}
                            placeholder = "PASSWORD"
                            autoCapitalize = "none"
                            onFocus = {() => this.setState({password: ""})}
                            secureTextEntry = {true}
                            underlineColorAndroid = "#fff"/>
                    <Button block onPress={() => this.login()} style={{backgroundColor:'#0C9674'}}  > 
                        <Text  >SignIn</Text>
                    </Button>
                </View>
                <View style={styles.signin_actions_container}>
                <Text>Don't have an account</Text>
                <Button block onPress={() => this.props.navigation.navigate('Signup')} style={{backgroundColor:'#0C9674'}}  > 
                        <Text  >SignUp</Text>
                    </Button>
                    
                </View>
                </ScrollView>
        </KeyboardAvoidingView>
    );
}
}

const styles = StyleSheet.create({
    
    signin_container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    signin_form_container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    signin_actions_container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    signin_input: {
      width: 200,
      height: 40,
      borderColor: 'gray',
      borderBottomWidth: 1,
      marginTop: 5,
      marginBottom: 20,
      textAlign: 'left',
      fontSize: 10
    },
    signin_button: {
      backgroundColor: '#000',
      width : '100%',
      height: 80,
      alignItems: 'center',
      justifyContent: 'center',
    },
    signin_button_text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: '600',
      letterSpacing: 10
    },
    signup_button: {
      backgroundColor: '#fff',
      color: "lightgrey",
      width: 200,
      margin: 10,
      height: 20,
      fontSize: 10,
      textAlign: 'center',
      textAlignVertical: 'center'
    },
  });