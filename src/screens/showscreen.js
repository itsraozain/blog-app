import React,{useContext} from 'react';
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native';
import {Context} from '../context/blogprovider';
import {Feather} from '@expo/vector-icons'

const ShowScreen=({navigation})=>{
    
    const {state}=useContext(Context);
    const blogPost=state.find((blogPost)=>blogPost.id===navigation.getParam('id'));
    return (
    <View>
        <Text style={styles.icon}>{blogPost.title}</Text>
    </View>
    );
};

ShowScreen.navigationOptions=({navigation})=>{
    
    return{
        headerStyle: {
            backgroundColor: '#CD5C5C',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        headerRight: <TouchableOpacity
         
            onPress={()=>navigation.navigate('edit',{
                id:navigation.getParam('id')
                }
                )}>
            <Feather name="edit" style={styles.icon} />
            </TouchableOpacity>
        
    };
};

const styles=StyleSheet.create({
    icon:{
        fontSize:35,

    }

})

export default ShowScreen;