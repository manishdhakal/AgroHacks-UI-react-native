import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, StatusBar,Image, ScrollView } from 'react-native';
import {Container, Header, Icon, Left, Right, Body, Card, Button, Input, Label, Item, Form } from 'native-base';

var ID = 1;
var arr = [];
export default class Home extends React.Component {
  constructor(props)
  {
    super(props);

    this.state = {
        MiPro:0,
        MiLab:0,
        MiTim:0,
        GhPro:0,
        GhLab:0,
        GhTim:0,
        CuPro:0,
        CuLab:0,
        CuTim:0,
        ChPro:0,
        ChLab:0,
        ChTim:0,
        id:ID,

        ProMi:0,
        ProCh:0,
        ProCu:0,
        ProGh:0,
        
        ProdC:0,
        Time:0,
        LabRes:0,

        viewInit:true,
        viewUpdate:false,
        viewCalc:false,

        optimizedVal : null,
        isOptimized: false,
        
    }
   
  }
  
  
  save = ()=> {
        console.log(" save called")
            
            fetch('http://10.100.53.93:5000/dairy/update', {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                procost : [this.state.MiPro, this.state.GhPro,  this.state.CuPro, this.state.ChPro] ,
                time : [this.state.MiTim, this.state.GhTim,  this.state.CuTim, this.state.ChTim],
                manlabour: [this.state.MiLab, this.state.GhLab,  this.state.CuLab, this.state.ChLab],
                id : ID

            }),
            })
            .then((response) => response.json())
                .then((responseJson) => {
                    if (responseJson.message == true){
                        alert("Data has been saved!!!");
                    }
                })
                .catch((error) => {
                console.error(error);
                });
    
        }
    
    
    optimize= ()=>{
        
            fetch('http://10.100.53.93:5000/dairy/solve', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    profit: [this.state.ProMi,this.state.ProGh,this.state.ProCu, this.state.ProCh],
                    bound: [this.state.ProdC, this.state.Time, this.state.LabRes],
                    id :ID
    
                }),
                })
                .then((response) => response.json())
                    .then((responseJson) => {
                        this.setState({
                            isOptimized: true,
                            viewCalc:false,
                            optimizedVal: responseJson
                        });
                        
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
                    <Text style={{fontSize:25, color:'white'}}>COMPUTE</Text>
                </Body>
                <Right>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                    <Image source={require('../assets/dp.jpg')} style={{height:30, width:30, borderRadius:15}} />
                    </TouchableOpacity>
                </Right>
                </Header>
                <ScrollView> 
                    
                        <KeyboardAvoidingView behavior='position' >
                        {this.state.viewInit &&
                            <View style={{flex:1,alignItems:'center', justifyContent:'center'}}>
                            <Button block style={{backgroundColor:'#0C9674', marginTop:20}} onPress={()=> this.setState({viewUpdate:true, viewInit:false})}>
                                <Text style={{color:'white'}}>Update Data</Text>
                            </Button>
                            <Button block style={{backgroundColor:'#0C9674', marginTop:20}} onPress={()=> this.setState({viewCalc:true, viewInit:false})}>
                                <Text style={{color:'white'}}>Calculate</Text>
                            </Button>
                            </View>
                        }
                        { this.state.viewUpdate &&
                            <Card style={{alignItems:'center'}}>
                                <Text style={{fontWeight:'bold',fontSize:25}}>Update</Text>
                            <View style={{flexDirection:'row'}}>
                                <Form style={{padding:20, flex:1}}>

                                    <Text style={{fontSize:20, paddingLeft:20, fontWeight:'bold'}} >Milk:</Text>
                                    
                                    <Item floatingLabel >
                                        <Label >Production cost</Label>
                                        <Input  keyboardType ='number-pad' onChangeText={(number) => this.setState({MiPro:number})} />
                                    </Item>
                                    <Item floatingLabel >
                                        <Label>Time</Label>
                                       <Input keyboardType ='number-pad' onChangeText={(number) => this.setState({MiTim:number})} />
                                    </Item>
                                    <Item style={{paddingBottom:10}} floatingLabel>
                                        <Label>Labour cost</Label>
                                        <Input keyboardType ='number-pad' onChangeText={(number) => this.setState({MiLab:number})}/>
                                    </Item>

                                </Form>
                                
                                <Form style={{padding:20, flex:1}}>
                                    <Text style={{fontSize:20, paddingLeft:20, fontWeight:'bold'}}>Ghee:</Text>
                                    
                                    <Item floatingLabel >
                                        <Label>Production cost</Label>
                                        <Input keyboardType ='number-pad' onChangeText={(number) => this.setState({GhPro:number})} />
                                    </Item>
                                    <Item floatingLabel >
                                        <Label>Time</Label> 
                                        <Input keyboardType ='number-pad' onChangeText={(number) => this.setState({GhTim:number})} />
                                    </Item>
                                    <Item style={{paddingBottom:10}} floatingLabel>
                                        <Label>Labour cost</Label>
                                        <Input keyboardType ='number-pad' onChangeText={(number) =>  this.setState({GhLab:number})} />
                                    </Item>

                                </Form>
                                </View>
                                
                                <View style={{flexDirection:'row'}}>
                                <Form style={{padding:20, flex:1}}>
                                    <Text style={{fontSize:20, paddingLeft:20, fontWeight:'bold'}}>Curd:</Text>
                                    
                                    <Item floatingLabel >
                                        <Label>Production cost</Label>
                                        <Input keyboardType ='number-pad' onChangeText={(number) =>  this.setState({CuPro:number})}  />
                                    </Item>
                                    <Item floatingLabel >
                                        <Label>Time</Label>
                                        <Input keyboardType ='number-pad' onChangeText={(number) =>  this.setState({CuTim:number})}  />
                                    </Item>
                                    <Item style={{paddingBottom:10}} floatingLabel>
                                        <Label>Labour cost</Label>
                                        <Input keyboardType ='number-pad' onChangeText={(number) =>  this.setState({CuLab:number})}  />
                                    </Item>
                                </Form>
                                <Form style={{padding:20, flex:1}}>
                                    <Text style={{fontSize:20, paddingLeft:20, fontWeight:'bold'}}>Cheese:</Text>
                                    
                                    <Item floatingLabel >
                                        <Label>Production cost</Label>
                                        <Input keyboardType ='number-pad' onChangeText={(number) =>  this.setState({ChPro:number})}  />
                                    </Item>
                                    <Item floatingLabel >
                                        <Label>Time</Label>
                                        <Input keyboardType ='number-pad' onChangeText={(number) =>  this.setState({ChTim:number})}  />
                                    </Item>
                                    <Item style={{paddingBottom:10}} floatingLabel>
                                        <Label>Labour cost</Label>
                                        <Input keyboardType ='number-pad' onChangeText={(number) =>  this.setState({ChLab:number})}  />
                                    </Item>

                                </Form>
                            </View>
                       
                        <Button block style={{backgroundColor:'#0C9674'}} onPress={()=>this.save()} >
                            <Text style={{fontSize:18, color:'#fff'}}>Update</Text>
                        </Button>
                        <Button block style={{backgroundColor:'#0C9674', marginTop:20}} onPress={()=>this.setState({viewInit:true, viewUpdate:false})} >
                            <Text style={{fontSize:18, color:'#fff'}}>Go Back</Text>
                        </Button>
                        </Card>}
                        {this.state.viewCalc &&
                        <Card>
                            <View style={{alignItems:'center'}}>
                                <Text style={{fontWeight:'bold', fontSize:25}}>Optimize</Text>
                            </View>
                            
                            <Form >
                                <View style={{flexDirection:'row'}}>
                                <View style={{flex:1}}>
                                <Text style={{fontSize:20, paddingLeft:20, fontWeight:'bold'}} >Milk:</Text>
                                    
                                    <Item floatingLabel >
                                        <Label>Profit </Label>
                                        <Input  keyboardType ='number-pad' onChangeText={(val) => this.setState({ProMi:val})} />
                                    </Item>
                                    
                                    </View>

                                    <View style={{flex:1}}>
                                    <Text style={{fontSize:20, paddingLeft:20, fontWeight:'bold'}} >Ghee:</Text>
                                    
                                    <Item floatingLabel >
                                        <Label >Profit</Label>
                                        <Input  keyboardType ='number-pad' onChangeText={(val) => this.setState({ProGh:val})} />
                                    </Item>
                                    
                                    </View>
                                    
                                </View>
                                <View style={{flexDirection:'row'}}>
                                    <View style={{flex:1}}>
                                    <Text style={{fontSize:20, paddingLeft:20, fontWeight:'bold'}} >Curd:</Text>
                                        
                                        <Item floatingLabel >
                                            <Label >Profit</Label>
                                            <Input  keyboardType ='number-pad' onChangeText={(val) => this.setState({ProCu:val})} />
                                        </Item>
                                        
                                        </View>

                                        <View style={{flex:1}} >
                                        <Text style={{fontSize:20, paddingLeft:20, fontWeight:'bold'}} >Cheese:</Text>
                                        
                                        <Item floatingLabel >
                                            <Label >Profit</Label>
                                            <Input  keyboardType ='number-pad' onChangeText={(val) => this.setState({ProCh:val})} />
                                        </Item>
                                        </View>
                                        </View>
                                        <View>
                                            <Text style={{fontSize:20, marginLeft:15}}>Available Resources:</Text>
                                            <View style={{flexDirection:'row'}}>
                                            <Item floatingLabel style={{paddingBottom:10, flex:1}} >
                                                <Label>Labour</Label>
                                                <Input keyboardType ='number-pad' onChangeText={(val) => this.setState({LabRes:val})} />
                                             </Item>
                                             <Item floatingLabel style={{paddingBottom:10, flex:1}} >
                                                <Label>Cost</Label>
                                                <Input keyboardType ='number-pad' onChangeText={(val) => this.setState({ProdC:val})} />
                                            </Item>
                                            <Item floatingLabel style={{paddingBottom:10, flex:1}} >
                                                <Label>Time</Label>
                                                <Input keyboardType ='number-pad' onChangeText={(val) => this.setState({Time:val})} />
                                            </Item>
                                        </View>

                                </View>
                                <Button block onPress={()=>{this.optimize()}} style={{backgroundColor:'#0C9674'}}>
                                    <Text style={{fontSize:18, color:'#fff'}}>Calculate</Text>
                                </Button>
                                <Button block onPress={()=>this.setState({viewInit:true, viewCalc:false})} style={{backgroundColor:'#0C9674', marginTop:20}}>
                                    <Text style={{fontSize:18, color:'#fff'}}>Go Back</Text>
                                </Button>

                            </Form>
                            </Card>}
                                {this.state.isOptimized &&
                                    <Card>
                                        <View style={{flexDirection:'column', alignItems:'center'}}>
                                            <Text style={{fontWeight:'bold' , fontSize:20}}>Profit</Text>
                                            <Text style={{fontSize:15}}>{this.state.optimizedVal[4]}</Text>
                                        </View>
                                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                            <View style={{flexDirection:'column'}}>
                                                <Text style={{fontWeight:'bold', fontSize:20}}>Milk</Text>
                                                <Text style={{fontSize:15}}>{this.state.optimizedVal[0]}</Text>
                                            </View>
                                            <View style={{flexDirection:'column'}}>
                                                <Text style={{fontWeight:'bold', fontSize:20}} >Ghee</Text>
                                                <Text style={{fontSize:15}}>{this.state.optimizedVal[1]}</Text>
                                            </View>
                                            <View style={{flexDirection:'column'}}>
                                                <Text style={{fontWeight:'bold', fontSize:20}}>Curd</Text>
                                                <Text style={{fontSize:15}}>{this.state.optimizedVal[2]}</Text>
                                            </View>
                                            <View style={{flexDirection:'column'}}>
                                                <Text style={{fontWeight:'bold', fontSize:20}}>Cheese</Text>
                                                <Text style={{fontSize:15}}>{this.state.optimizedVal[3]}</Text>
                                            </View>
                                        </View>
                                        <Button block onPress={()=>this.setState({isOptimized:false, viewCalc:true, viewUpdate:false})}>
                                            <Text style={{color:'#fff', fontWeight:'bold'}}>Calculate again!!</Text>
                                        </Button>
                                        <Button block onPress={()=>this.setState({isOptimized:false, viewCalc:false, viewUpdate:true})} style={{marginTop:20}}>
                                            <Text style={{color:'#fff', fontWeight:'bold'}}>Update again!!</Text>
                                        </Button>
                                    </Card> }
                                
                        </KeyboardAvoidingView>
                    </ScrollView>  
        </Container>


      );
    } 
  }
  
  const styles = StyleSheet.create({
    container: {
      marginTop: StatusBar.currentHeight,
      flex : 1,
      backgroundColor: '#fff'
      
    }
  }); 