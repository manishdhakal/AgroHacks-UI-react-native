import React, { Component} from 'react';
import {
    KeyboardAvoidingView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View, StatusBar, StyleSheet, Dimensions} from 'react-native';
//import { Button } from 'native-base';

export default class Signup extends Component {
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
        //this.signupUser = this.signupUser.bind(this);
    }

    signupUser = () => {
        {
            
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
        
        }

    render() {
        return(
            <KeyboardAvoidingView
                behaviour = 'padding'
                style = {styles.container}
            >
              <ScrollView
                contentContainerStyle = {{flex:1, backgroundColor: '#fff', justifyContent: 'space-between',}}
                keyboardShouldPersistTaps = 'never' 
                >
                <View style = {{flex: 1,backgroundColor: '#fff', alignItems: 'center'}}>
                    <Text style = {{width: Dimensions.get('window').width, marginTop:20, height:40, fontSize: 20, color: '#000',fontWeight: 'bold',letterSpacing: 10,textAlign: 'center'}}>
                        SIGN UP 
                    </Text>
                    <Text>
                        {this.state.errorMessage}
                    </Text>
                    <TextInput
                        style = {styles.signup_input}
                        onChangeText = {(firstname) => this.setState({firstname})}
                        placeholder = "FIRSTNAME"
                        autoCapitalize ='words'
                        onFocus = { () =>{
                            this.setState({firstname: ""});
                        }}
                        secureTextEntry = { false }
                        underlineColorAndroid = "#fff"
                    />
                    <TextInput
                        style = {styles.signup_input}
                        onChangeText = {(lastname) => this.setState({lastname})}
                        placeholder = "LASTNAME"
                        autoCapitalize ="words"
                        onFocus = { () =>{
                            this.setState({lastname: ""});
                        }}
                        secureTextEntry = { false }
                        underlineColorAndroid = "#fff"
                    />
                    <TextInput
                        style = {styles.signup_input}
                        onChangeText = {(email) => this.setState({email})}
                        placeholder = "EMAIL ADDRESS"
                        autoCapitalize = "none"
                        onFocus = {() => this.setState({email: ""})}
                        keyboardType = "email-address"
                        underlineColorAndroid = "#fff"
                    />
                    <TextInput
                        style = {styles.signup_input}
                        onChangeText = {(username) => this.setState({username})}
                        placeholder = "USERNAME"
                        autoCapitalize ="none"
                        onFocus = { () =>{
                            this.setState({username: ""});
                        }}
                        secureTextEntry = { false }
                        underlineColorAndroid = "#fff"
                    />
                    <TextInput
                        style = {styles.signup_input}
                        onChangeText = {(password) => this.setState({password})}
                        placeholder = "PASSWORD"
                        autoCapitalize ="none"
                        onFocus = { () =>{
                            this.setState({password: ""});
                            this.setState({errorMessage: "Password must contain symbols, uppercase and at least 8 characters long"})
                        }}
                        secureTextEntry = { true }
                        underlineColorAndroid = "#fff"
                    />
                    <TextInput
                        style = {styles.signup_input}
                        onChangeText = {(contactno) => this.setState({contactno})}
                        placeholder = "CONTACT NO."
                        autoCapitalize ="none"
                        keyboardType ='number-pad'
                        onFocus = { () =>{
                            this.setState({contactno: ""});
                        }}
                        secureTextEntry = { false }
                        underlineColorAndroid = "#fff"
                    />
                    
                    <TextInput
                        style = {styles.signup_input}
                        onChangeText = {(districtname) => this.setState({districtname})}
                        placeholder = "ADDRESS"
                        autoCapitalize ="none"
                        onFocus = { () =>{
                            this.setState({districtname: ""});
                        }}
                        secureTextEntry = { false }
                        underlineColorAndroid = "#fff"
                    />
                    
                    
                        </View>
                        <View style = {styles.signup_actions_container}>
                            <TouchableOpacity onPress = {() => this.props.navigation.goBack()}>
                                <Text style = {styles.login_button}>
                                GO BACK
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress = {this.signupUser}
                            style = {styles.signup_button}
                        >
                            <Text style = {styles.signup_text}>
                                SIGN UP
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      marginTop : StatusBar.currentHeight,
      flex : 1,
      backgroundColor: 'white'
      
    },
    signup_input:{
        
        width: 200,
        height: 30,
        borderColor: 'gray',
        borderBottomWidth: 1,
        marginTop: 15,
        textAlign: 'left',
        fontSize: 10
    },
    signup_actions_container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    login_button: {
        backgroundColor: '#fff',
        color: "lightgrey",
        width: 200,
        margin: 10,
        height: 20,
        fontSize: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
        marginBottom: 10
    },
    signup_button: {
        backgroundColor: '#0C9674',
        width: Dimensions.get('window').width,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },
    signup_text: {
        color: '#000',
        fontSize: 24,
        fontWeight: '600',
        letterSpacing: 10
    },

  }); 