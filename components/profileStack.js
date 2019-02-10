import React from 'react';
import {createAppContainer, createStackNavigator } from 'react-navigation';
import Profile  from  './profile';
import Compute2  from  './compute2';




// export default class ProfileStack extends React.Component{
//     constructor(props){
//     super(props);

//     }
//     render(){
//         return(
//            <Stack />
//         );
//     }


// }

 
export const  Stack = createAppContainer(createStackNavigator({
    Profile: {screen: Profile},
    Edit : {screen: Compute2}
}
))
