import React, {useContext,useEffect} from 'react';
import {View,Text,StyleSheet,FlatList,Button,TouchableOpacity } from 'react-native';
import {Context} from '../context/blogprovider';
import {Feather} from '@expo/vector-icons'

const Indexscreen=(props)=>{
    const {state,deleteBlogPost,getblogpost}=useContext(Context);

    useEffect(()=>{
        getblogpost();

       const listener= props.navigation.addListener('didFocus',()=>{
            getblogpost();
        });

        return ()=>{
            listener.remove();
        }

    },[])

    return (
        <View >
            <FlatList
            data={state}
            keyExtractor={blogPost=>blogPost.title}
            renderItem={({item})=>
                {
                return (
                    <TouchableOpacity onPress={()=>props.navigation.navigate('show',{id:item.id})}>
                            <View style={styles.row}>
                                <Text
                                style={styles.title}
                                >{item.title}
                                </Text>
                                <TouchableOpacity 
                                onPress={()=>deleteBlogPost(item.id)}>
                                <Feather 
                                style={styles.font}
                                name="trash-2"
                                />
                                </TouchableOpacity>
                            </View>
                </TouchableOpacity>
                );
                }
            }
            
            
            />
        </View>
    );
};

    Indexscreen.navigationOptions=(props)=>{
        return{
            headerStyle: {
                backgroundColor: '#CD5C5C',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            headerRight: <TouchableOpacity onPress={()=>props.navigation.navigate('create')}>
                <Feather name="plus" style={styles.plus} />
                </TouchableOpacity>
        };
    };

const styles=StyleSheet.create({
    
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor: 'grey' ,
        paddingHorizontal:10,
        marginVertical:5
        

        
        
        
    },
    title:{
        fontSize:28
    },
    font:{
        fontSize:30
    },
    plus:{
        fontSize:30,
        marginRight:10
    },
    button:{
        borderWidth:1,
        alignItems:'center',
        alignContent:'center',
        borderRadius:20,
        padding:10,
        marginHorizontal:300
    }
    


})

export default Indexscreen;