import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, KeyboardAvoidingView  } from 'react-native';
import {Container, Header, Icon, Left, Right, Body, Button, Item, Input,  Card, Content } from 'native-base';


export default class Compute1 extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      drainage: null,
      rainfall : null,
      soilMoisture: null,
      maxIrrigation:null,
      waterReserve:null,
      stage1:null,
      stage2: null,
      area1:null,
      area2:null,
      crop1:null,
      crop2:null,
      id: 1,
      isCompute:false,
      result: null
    }
    
  }
  calc= ()=>{
    console.log("called");
    fetch('http://10.100.31.150:5000/user/irrigation/calculation', {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          rainfall: this.state.rainfall,
          stages: [this.state.stage1,this.state.stage2],
          Area: [this.state.area1,this.state.area2],
          crops: [this.state.crop1,this.state.crop2],
          Drainage: this.state.drainage,
          WaterReserve: this.state.waterReserve,
          SoilMoisture:this.state.soilMoisture,
          id : this.state.id
      }),
      })
      .then((response) => response.json())
          .then((responseJson) => {
              if (responseJson.Solved === true){
                this.setState({isCompute:true, result:responseJson})
              };
          })
          .catch((error) => {
          console.error(error);
          });

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
              <Text style={{fontSize:25, color:'white'}}>Compute1</Text>
            </Body>
            <Right>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                <Image source={require('../assets/dp.jpg')} style={{height:30, width:30, borderRadius:15}} />
              </TouchableOpacity>
            </Right>
          </Header>
          
            <Content>
            <KeyboardAvoidingView behavior='position'>
              <View style={{flexDirection:'column'}}>
                <Card style={{flex:1, height:300, alignItems:'center'}}>
                  <Text style={{fontWeight:'bold'}}>Crop 1</Text>
                  
                  <Item rounded>
                    <Input placeholder='Crop1' onChangeText={(val) => this.setState({crop1:val})} />
                  </Item>
                  <Item rounded>
                    <Input placeholder='Area' keyboardType='number-pad' onChangeText={(val) => this.setState({area1:val})} />
                  </Item>
                  <Item rounded>
                    <Input placeholder='Stage' keyboardType='number-pad' onChangeText={(val) => this.setState({stage1:val})} />
                  </Item> 
                </Card>
                <Card style={{flex:1, height:300, alignItems:'center'}}>
                  <Text style={{fontWeight:'bold'}} >Crop 2</Text>
                  <Item rounded>
                    <Input placeholder='Crop2' onChangeText={(val) => this.setState({crop2:val})} />
                  </Item>
                  <Item rounded>
                    <Input placeholder='Area' keyboardType='number-pad' onEndEditing={(val) => this.setState({area2:val})} />
                  </Item>
                  <Item rounded>
                    <Input placeholder='Stage' keyboardType='number-pad' onChangeText={(val) => this.setState({stage2:val})}/>
                  </Item>

                </Card>
                
                   
                  <Item rounded>
                    <Input placeholder='Drainage' keyboardType='number-pad' onChangeText={(val) => this.setState({drainage:val})} />
                  </Item>
                  <Item rounded>
                    <Input placeholder='Rainfall' keyboardType='number-pad' onChangeText={(val) => this.setState({rainfall:val})} />
                  </Item>
                  <Item rounded>
                    <Input placeholder='WaterReserve' keyboardType='number-pad' onChangeText={(val) => this.setState({waterReserve:val})} />
                  </Item>
                  <Item rounded>
                    <Input placeholder='SoilMoisture' keyboardType='number-pad' onChangeText={(val) => this.setState({soilMoisture:val})} />
                  </Item>
                  <Item rounded>
                    <Input placeholder='IrrigationMax' keyboardType='number-pad' onChangeText={(val) => this.setState({maxIrrigation:val})} />
                  </Item>
                  
              </View>
              <Button block activeOpacity={0.5} onPress={() => this.calc()} style={{marginTop:20}}>
                <Text>Compute</Text>
                
              </Button>
              {this.state.isCompute &&
                <Card>
                  <Text>
                    Total volume of water {this.state.result.ObjectiveValue}:
                    For Crop1: {this.state.result.TotalValues.Rice}
                    For Crop2: {this.state.result.TotalValues.Wheat}                    
                  </Text>
                </Card> 
                }
                </KeyboardAvoidingView>
            </Content>
            
          </Container>
      );
    } 
  }
  
  const styles = StyleSheet.create({
    container: {
      marginTop : StatusBar.currentHeight,
      flex : 1,
      backgroundColor: 'white',
    }
  }); 