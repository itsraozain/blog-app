import React ,{useState} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,TextInput} from 'react-native';

const Titlecontent=({onSubmit,initialValues})=>{
    const [title,settitle]=useState(initialValues.title);
    const [blog,setblog]=useState(initialValues.blog);

    return(
        <View>
        <Text style={styles.title}>Enter Title:</Text>
        <TextInput 
        style={styles.content}
        value={title}
        onChangeText={text=>settitle(text)}
        />
        <Text style={styles.title}>Enter Content:</Text>
        <TextInput
         style={styles.content}
         value={blog}
         onChangeText={text=>setblog(text)}
        />
        <TouchableOpacity
        onPress={()=>onSubmit(title,blog)}
        >
        <View style={styles.button} >
        <Text>Save</Text>
        </View>
        </TouchableOpacity>

    </View>
    )
}

Titlecontent.defaultProps = {
    initialValues: {
      title: '',
      blog: ''
    }
  };

const styles=StyleSheet.create({
    title:{
        marginHorizontal:20,
        fontSize:20,
        marginTop:5

    },
    content:{
        marginHorizontal:20,
        fontSize:18,
        borderWidth:1,
        padding:5,
        borderRadius:5,
        
    },
    button:{
        borderWidth:1,
        alignItems:'center',
        alignContent:'center',
        borderRadius:20,
        padding:10,
        marginHorizontal:100,
        marginTop:10
    }

})

export default Titlecontent;